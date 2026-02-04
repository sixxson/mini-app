const BASE_URL = import.meta.env.VITE_BASE_URL || ''
const MINI_APP_ID = import.meta.env.VITE_MINI_APP_ID || ''

/**
 * Login bằng username (PROD)
 */
export async function login(payload: { username: string }) {
    const url = `${BASE_URL}/api/auth/login`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-App-Id': MINI_APP_ID,
            'X-Zalo-App-Id': MINI_APP_ID,
        },
        body: JSON.stringify(payload),
    })

    if (!res.ok) {
        const err = await res.json().catch(() => null)
        throw new Error(err?.message || `Login thất bại (${res.status}) - URL: ${url}`)
    }

    return res.json() // { token }
}

/**
 * Login bằng accessToken Zalo (PROD)
 */
export async function loginWithZalo(payload: { accessToken: string }) {
    const url = `${BASE_URL}/api/auth/zalo`
    console.log('--- Calling loginWithZalo ---')
    console.log('URL:', url)
    console.log('App ID:', MINI_APP_ID)

    // Gửi cả accessToken và access_token để đảm bảo tương thích với backend
    const body = {
        accessToken: payload.accessToken,
        access_token: payload.accessToken,
        appId: MINI_APP_ID,
    }

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-App-Id': MINI_APP_ID,
            'X-Zalo-App-Id': MINI_APP_ID,
        },
        body: JSON.stringify(body),
    })

    if (!res.ok) {
        let errorMsg = `Login Zalo thất bại (${res.status})`
        const text = await res.text().catch(() => '')

        try {
            // Thử parse JSON trước
            const errBody = JSON.parse(text)
            errorMsg = errBody?.message || errBody?.error || errorMsg
        } catch (e) {
            // Nếu không phải JSON, lấy text body
            if (text) errorMsg += ` - Backend Response: ${text.substring(0, 200)}`
        }

        console.error('Lỗi chi tiết từ backend:', text)
        throw new Error(`${errorMsg} - URL: ${url}`)
    }

    return res.json() // { token }
}

/**
 * Login mock để DEV trên browser
 */
export async function loginMock(username: string = 'user_123') {
    return new Promise<{ token: string }>((resolve) => {
        setTimeout(() => {
            resolve({ token: `mock-token-${username}` })
        }, 500)
    })
}
