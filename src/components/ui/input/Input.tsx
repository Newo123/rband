'use client'

import cn from 'clsx'
import { useState } from 'react'

import classes from './input.module.scss'
import { TypeInput } from './input.types'

export function Input({ placeholder, className, ...rest }: TypeInput) {
	const [isFocused, setIsFocused] = useState(false)
	return (
		<div
			className={cn(
				classes.input,
				isFocused && classes.input_focused,
				className
			)}
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
