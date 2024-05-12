import cn from 'clsx'
import { HTMLAttributes, PropsWithChildren, useState } from 'react'

import classes from './styles.module.scss'

type TypeInput = PropsWithChildren<HTMLAttributes<HTMLInputElement>> & {
	placeholder: string
}

export function TextField({ placeholder, ...rest }: TypeInput) {
	const [isFocused, setIsFocused] = useState(false)
	return (
		<div
			className={cn(classes.textfield, isFocused && classes.textfield_focused)}
		>
			<label
				htmlFor={rest.id}
				className={classes.textfield__label}
			>
				{placeholder}
			</label>
			<input
				{...rest}
				onFocus={() => setIsFocused(true)}
				onBlur={e => !e.target.value && setIsFocused(!isFocused)}
				className={classes.textfield__input}
			/>
		</div>
	)
}
