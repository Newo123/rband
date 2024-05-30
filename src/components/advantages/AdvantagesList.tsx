'use client'

import { AdvantagesItem } from './AdvantagesItem'
import { IProps } from './advantages.types'
import classes from './styles.module.scss'

export function AdvantagesList({
	advantages,
	setIsActive,
	isHome
}: IProps & { isHome: boolean }) {
	return (
		<div className={classes.advantages__list}>
			{advantages.map(advantage => (
				<AdvantagesItem
					key={advantage.id}
					advantage={advantage}
					setIsActive={setIsActive}
					isHome={isHome}
				/>
			))}
		</div>
	)
}
