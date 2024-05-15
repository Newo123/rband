import { HTMLAttributes, PropsWithChildren } from 'react'

export function PageWrapper({
	children,
	...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
	return (
		<div
			style={{ backgroundColor: '#fff', position: 'relative' }}
			{...rest}
		>
			{children}
		</div>
	)
}
