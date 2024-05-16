'use client'

import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react'

import classes from './styles.module.scss'

type TypeTextWrapVariant = 'reverse'

interface ITextWrap extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
	variant?: TypeTextWrapVariant
}

export const TextWrap = forwardRef(
	({ children, className, variant, ...rest }: ITextWrap, reference: any) => {
		return (
			<div
				ref={reference}
				className={cn(
					classes.textWrap,
					variant === 'reverse' ? classes.textWrap_reverse : '',
					className
				)}
				{...rest}
			>
				{children}
			</div>
		)
	}
)
