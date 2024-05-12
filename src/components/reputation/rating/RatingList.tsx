import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

import classes from './styles.module.scss'

interface IRatingList
	extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export function RatingList({ children, className, ...rest }: IRatingList) {
	return (
		<div
			className={cn(classes.ratingList, className)}
			{...rest}
		>
			{children}
		</div>
	)
}
