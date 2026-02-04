import { useState } from 'react'
import { useSetAtom } from 'jotai'
import { tokenState, userState } from '@/state'
import { login, loginMock, loginWithZalo } from '@/api/auth'
import { isZaloMiniApp } from '@/utils/isZalo'
import { toast } from 'react-toastify'
import { useNavigate } from 'zmp-ui'
import { getAccessToken, getUserInfo } from 'zmp-sdk/apis'

export function useAuth() {
    const [loading, setLoading] = useState(false)
    const setToken = useSetAtom(tokenState)
    const setUser = useSetAtom(userState)
    const navigate = useNavigate()

    const handleLogin = async (username: string) => {
        try {
            if (!username.trim()) {
                toast.error('Vui lòng nhập username')
                return
            }

            setLoading(true)

            // ===== DEV MODE (BROWSER) =====
            if (!isZaloMiniApp()) {
                const data = await loginMock(username)
                setToken(data.token)
                setUser({
                    id: `user_${Date.now()}`,
                    name: username,
                    avatar: 'https://h5.zdn.vn/static/images/avatar.jpg',
                })
                navigate('/', { replace: true })
                return
            }

            // ===== ZALO MINI APP (MANUAL LOGIN) =====
            const data = await login({ username })
            setToken(data.token)
            setUser({
                id: `user_${Date.now()}`,
                name: username,
                avatar: 'https://h5.zdn.vn/static/images/avatar.jpg',
            })

            navigate('/', { replace: true })
        } catch (err: any) {
            console.error(err)
            toast.error(err.message || 'Đăng nhập thất bại')
        } finally {
            setLoading(false)
        }
    }

    const handleZaloLogin = async () => {
        try {
            setLoading(true)
            console.log('--- Bắt đầu Zalo Login ---')

            // 1. Lấy thông tin user (Optional - không block quá trình lấy token)
            try {
                const info = await new Promise((resolve, reject) => {
                    getUserInfo({
                        success: resolve,
                        fail: (err) => {
                            console.warn('getUserInfo failed (có thể chưa cấp quyền):', err)
                            resolve(null) // Không block, tiếp tục lấy token
                        },
                    })
                })
                if (info) console.log('User info sơ bộ:', info)
            } catch (e) {
                console.warn('Lỗi khi gọi getUserInfo (non-blocking):', e)
            }

            // 2. Lấy access token
            console.log('Đang gọi getAccessToken...')
            let accessToken = ''
            try {
                accessToken = await getAccessToken()
                console.log('Access Token nhận được:', accessToken)
            } catch (tokenErr: any) {
                console.error('Lỗi thực thi getAccessToken:', tokenErr)
                const errorDetail = typeof tokenErr === 'object' ? JSON.stringify(tokenErr) : tokenErr
                throw new Error(`Zalo SDK getAccessToken Error: ${errorDetail}`)
            }

            if (!accessToken) {
                throw new Error(
                    'Không lấy được accessToken. Lưu ý: getAccessToken chỉ hoạt động trên Simulator của Zalo DevTools hoặc thiết bị thật. Nếu đang ở trình duyệt, vui lòng dùng Đăng nhập Username.',
                )
            }

            // 3. Gọi API login phía server
            console.log('Đang gọi API loginWithZalo...')
            const data = await loginWithZalo({ accessToken })
            setToken(data.token)
            console.log('Login server thành công, token:', data.token)

            // 4. Cập nhật lại user info từ Zalo sau khi login thành công
            getUserInfo({
                success: (res) => {
                    console.log('Cập nhật user info thành công:', res.userInfo)
                    setUser(res.userInfo as any)
                },
                fail: (err) => {
                    console.warn('Cập nhật user info sau login thất bại:', err)
                },
            })

            navigate('/', { replace: true })
        } catch (err: any) {
            console.error('Lỗi Zalo Login (Chi tiết):', err)
            // Nếu lỗi là object {}, thử stringify để xem nội dung
            const errorMsg =
                err instanceof Error ? err.message : typeof err === 'object' ? JSON.stringify(err) : String(err)

            toast.error(errorMsg || 'Đăng nhập Zalo thất bại')
        } finally {
            setLoading(false)
            console.log('--- Kết thúc Zalo Login ---')
        }
    }

    const logout = () => {
        setToken(null)
        setUser(null)
    }

    return {
        loading,
        handleLogin,
        handleZaloLogin,
        logout,
    }
}
