import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import classes from './styles.module.scss'

interface IRatingItem {
	image: string
	title: string
	text: string
	index: number
}

export function RatingItem({ image, text, title, index }: IRatingItem) {
	const itemRef = useRef(null)
	useGSAP(() => {
		gsap.to(itemRef.current, {
			scrollTrigger: {
				trigger: itemRef.current
			},
			opacity: 1,
			translateY: 0,
			delay: index > 0 ? index / 2 : 0.3
		})
	})

	return (
		<div
			className={classes.ratingItem}
			ref={itemRef}
			style={{ transform: 'translateY(100%)', opacity: 0 }}
		>
			<div className={classes.ratingItem__img}>
				<Image
					src={image}
					alt={title}
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className={classes.ratingItem__content}>
				<div className={classes.ratingItem__contentTitle}>{title}</div>
				<div className={classes.ratingItem__contentText}>{text}</div>
			</div>
		</div>
	)
}
