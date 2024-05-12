'use client'

import cn from 'clsx'
import Image from 'next/image'

import { useAdvantages } from '@/store/advantages.store'

import classes from './styles.module.scss'

export function AdvantagesImages() {
	const { advantages } = useAdvantages()

	return (
		<div className={classes.advantages__imgContainer}>
			{advantages.map(advantage => (
				<div
					className={cn(
						classes.advantages__img,
						advantage.isActive === true ? classes.active : ''
					)}
					key={advantage.id}
				>
					<Image
						src={advantage.image}
						fill={true}
						alt={advantage.alt}
						sizes='100vw'
					/>
				</div>
			))}
		</div>
	)
}
