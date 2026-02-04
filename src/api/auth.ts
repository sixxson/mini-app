/**
 * Login bằng username (PROD)
 */
export async function login(payload: { username: string }) {
	const res = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})

	if (!res.ok) {
		const err = await res.json().catch(() => null)
		throw new Error(err?.message || 'Login thất bại')
	}

	return res.json() // { token }
}

/**
 * Login bằng accessToken Zalo (PROD)
 */
export async function loginWithZalo(payload: { accessToken: string }) {
	const res = await fetch('/api/auth/zalo', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})

	if (!res.ok) {
		const err = await res.json().catch(() => null)
		throw new Error(err?.message || 'Login Zalo thất bại')
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
