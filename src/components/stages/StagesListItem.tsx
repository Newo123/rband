'use client'

import cn from 'clsx'

import { TypeStagesContent } from '@/store/stages.store'

import classes from './styles.module.scss'

export function StagesListItem({
	number,
	text,
	title,
	isActive,
	setActiveStages
}: TypeStagesContent & { setActiveStages: (number: string) => void }) {
	return (
		<li
			className={cn(
				classes.stages__listItem,
				isActive && classes.stages__listItem_active
			)}
			onClick={() => setActiveStages(number)}
		>
			<span className={classes.stages__listNumber}>{number}</span>
			<h5 className={classes.stages__listTitle}>{title}</h5>
			<p className={classes.stages__listText}>{text}</p>
		</li>
	)
}
