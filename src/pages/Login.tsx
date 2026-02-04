import { useState } from 'react'
import { Button, Header, Page, Text, Input, Box } from 'zmp-ui'
import { useAuth } from '@/hooks/useAuth'

export default function Login() {
	const [username, setUsername] = useState('')
	const { loading, handleLogin, handleZaloLogin } = useAuth()

	const onLogin = () => {
		handleLogin(username)
	}

	return (
		<Page className="p-4 flex flex-col justify-center h-screen">
			<Header title="Đăng nhập" />

			<Text.Title size="large" className="mb-2">
				Đăng nhập
			</Text.Title>

			<Text className="mb-6 text-gray-500">Chọn phương thức đăng nhập</Text>

			<Box className="mb-4">
				<Input
					placeholder="Nhập username..."
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					clearable
					className="mb-2"
				/>
				<Button fullWidth loading={loading} onClick={onLogin}>
					Đăng nhập (Username)
				</Button>
			</Box>

			<div className="flex items-center justify-between mb-4">
				<div className="h-px bg-gray-300 flex-1"></div>
				<span className="px-2 text-gray-400 text-sm">HOẶC</span>
				<div className="h-px bg-gray-300 flex-1"></div>
			</div>

			<Button fullWidth variant="secondary" loading={loading} onClick={handleZaloLogin}>
				Đăng nhập bằng Zalo
			</Button>
		</Page>
	)
}
