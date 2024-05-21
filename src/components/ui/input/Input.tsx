'use client'

import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren, useState } from 'react'

import classes from './input.module.scss'

type TypeInput = PropsWithChildren<HTMLAttributes<HTMLInputElement>> & {
	placeholder: string
}

export function Input({ placeholder, className, ...rest }: TypeInput) {
	const [isFocused, setIsFocused] = useState(false)
	return (
		<div
			className={cn(
				classes.input,
				isFocused && classes.input_focused,
				className
			)}
			{...rest}
		>
			<label
				htmlFor={rest.id}
				className={classes.input__label}
			>
				{placeholder}
			</label>
			<input
				{...rest}
				onFocus={() => setIsFocused(true)}
				onBlur={e => !e.target.value && setIsFocused(!isFocused)}
				className={classes.input__input}
			/>
		</div>
	)
}
