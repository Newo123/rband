'use client'

import cn from 'clsx'
import Image from 'next/image'

import { useStages } from '@/store/stages.store'

import classes from './styles.module.scss'

export function StagesImages() {
	const stages = useStages(state => state.stages.content)
	return (
		<div className={classes.stages__imagesContainer}>
			{stages.length > 0 &&
				stages.map(stage => (
					<div
						className={cn(
							classes.stages__img,
							stage.isActive ? classes.stages__imgActive : ''
						)}
						key={stage.number}
					>
						<Image
							src={stage.image}
							fill={true}
							alt={stage.title}
						/>
					</div>
				))}
		</div>
	)
}
