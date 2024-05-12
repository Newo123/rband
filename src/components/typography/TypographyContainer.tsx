import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface ITypographyContainer
	extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export function TypographyContainer({
	children,
	className,
	...rest
}: ITypographyContainer) {
	return (
		<div
			className={cn('typography__container', className)}
			{...rest}
		>
			{children}
		</div>
	)
}
