'use client'

import { useAdvantages } from '@/store/advantages.store'

import { AdvantagesItem } from './AdvantagesItem'
import classes from './styles.module.scss'

export function AdvantagesList() {
	const { advantages, setActive } = useAdvantages()
	return (
		<div className={classes.advantages__list}>
			{advantages.map(advantage => (
				<AdvantagesItem
					key={advantage.id}
					{...advantage}
					setActive={setActive}
				/>
			))}
		</div>
	)
}
