import { forwardRef } from 'react'

import classes from './switcher.module.scss'

export type TypeProps = {
	name: string
	id: string
	label: string
	isChecked: boolean
	type?: 'radio' | 'checkbox'
}

export const SwitcherComponent = forwardRef(
	({ id, label, name, type = 'radio', isChecked }: TypeProps) => {
		return (
			<label
				htmlFor={id}
				className={classes.switcher}
			>
				<div className={classes.switcher__container}>
					<div className={classes.switcher__state}>
						<div className={classes.switcher__stateRing}></div>
					</div>
					<input
						id={id}
						type={type}
						name={name}
						defaultChecked={isChecked}
						value={label}
						hidden
					/>
				</div>

				{label}
			</label>
		)
	}
)
SwitcherComponent.displayName = 'switcher'
export const Switcher = SwitcherComponent
