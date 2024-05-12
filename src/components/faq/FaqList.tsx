import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

import classes from './styles.module.scss'

interface IFaqList extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export function FaqList({ children, className, ...rest }: IFaqList) {
	return (
		<div
			className={cn(classes.faqList, className)}
			{...rest}
		>
			{children}
		</div>
	)
}
