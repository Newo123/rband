'use client'

import cn from 'clsx'
import Image from 'next/image'

import { IProps } from './advantages.types'
import classes from './styles.module.scss'

export function AdvantagesImages({
	advantages,
	isHome
}: IProps & { isHome: boolean }) {
	return (
		<div
			className={cn(
				classes.advantages__imgContainer,
				isHome ? classes.advantages__imgContainer_rounded : '',
				isHome ? classes.advantages__imgContainer_gray : ''
			)}
		>
			{advantages.map(advantage => (
				<div
					className={cn(
						classes.advantages__img,
						advantage.isActive === true ? classes.active : '',
						isHome ? classes.advantages__img_home : ''
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
