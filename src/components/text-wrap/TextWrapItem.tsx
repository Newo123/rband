import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState } from 'react'

import classes from './styles.module.scss'

export function TextWrapItem({
	image,
	index,
	id
}: {
	image: string
	index: number
	id: string
}) {
	const [translate, setTranslate] = useState<number>(50)

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: id,
			start: 'top bottom',
			// end: 'bottom top',
			onUpdate: self => {
				if (index % 2 === 0) {
					setTranslate(Number(self.progress * 100) - 50)
				} else {
					setTranslate(Number(self.progress * 100 * -1) + 50)
				}
			}
		})
	})
	return (
		<div
			className={classes.textWrap__item}
			// ref={imgRef}
			style={{
				transform: `translateX(${translate}%)`,
				willChange: 'transform'
			}}
		>
			<img
				src={image}
				alt='text wrap'
			/>
		</div>
	)
}
