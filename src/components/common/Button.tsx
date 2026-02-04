import clsx from 'clsx'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'outline'
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={clsx(
				'px-4 py-2 rounded-lg text-sm font-medium transition',
				variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
				variant === 'outline' && 'border border-gray-300 hover:bg-gray-100',
				className,
			)}
		>
			{children}
		</button>
	)
}
