import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

import './typography.scss'

interface ITypography
	extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export function Typography({ children, className, ...rest }: ITypography) {
	return (
		<div
			className={cn('typography', className)}
			{...rest}
		>
			{children}
		</div>
	)
}
