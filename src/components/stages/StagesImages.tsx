'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { useStages } from '@/store/stages.store'

import classes from './styles.module.scss'

export function StagesImages() {
	const stages = useStages(state => state.stages.content)
	const imageContainerRef = useRef(null)
	useGSAP(() => {
		gsap.to(imageContainerRef.current, {
			scrollTrigger: {
				trigger: imageContainerRef.current
			},
			opacity: 1,
			delay: 0.3
		})
	})
	return (
		<div
			className={classes.stages__imagesContainer}
			ref={imageContainerRef}
			style={{ opacity: 0 }}
		>
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
