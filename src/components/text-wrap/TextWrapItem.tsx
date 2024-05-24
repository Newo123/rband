'use client'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState } from 'react'

import classes from './styles.module.scss'

export function TextWrapItem({
	image,
	index,
	id,
	reference,
	text
}: {
	image: string
	index: number
	id: string
	reference: any
	text: string
}) {
	const [translate, setTranslate] = useState<number>(50)

	useGSAP(
		() => {
			ScrollTrigger.create({
				trigger: id,
				start: 'top bottom',
				end: 'bottom top',
				onUpdate: self => {
					if (index % 2 === 0) {
						setTranslate(Number(self.progress * 100) - 50)
					} else {
						setTranslate(Number(self.progress * 100 * -1) + 50)
					}
				}
			})
		},
		{ scope: reference.current }
	)
	return (
		<div
			className={classes.textWrap__item}
			style={{
				transform: `translateX(${translate}%)`,
				willChange: 'transform'
			}}
		>
			<h2 className={classes.textWrap__itemText}>{text}</h2>
			<img
				src={image}
				alt='text wrap'
			/>
		</div>
	)
}
