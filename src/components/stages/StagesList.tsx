'use client'

import gsap from 'gsap'

import { useStages } from '@/store/stages.store'

import { StagesListItem } from './StagesListItem'
import classes from './styles.module.scss'

export function StagesList() {
	const { stages: allStages, setActiveStages } = useStages()
	const stages = allStages.content
	const tl = gsap.timeline()

	return (
		<ul
			className={classes.stages__list}
			id='stages-list'
		>
			{stages.length > 0 &&
				stages.map((stage, index) => (
					<StagesListItem
						{...stage}
						setActiveStages={setActiveStages}
						key={stage.number}
						index={index}
						tl={tl}
					/>
				))}
		</ul>
	)
}
