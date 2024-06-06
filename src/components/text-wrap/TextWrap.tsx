'use client'

import cn from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HTMLAttributes, PropsWithChildren, useRef } from 'react'

import classes from './styles.module.scss'

type TypeTextWrapVariant = 'reverse'

export type TypeImages = {
	image: string
	text: string
}

interface ITextWrap extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
	variant?: TypeTextWrapVariant
	images: Array<TypeImages>
}

export const TextWrap = ({
	children,
	className,
	variant,
	images,
	...rest
}: ITextWrap) => {
	const itemRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: itemRef,
		offset: ['start end', 'end start']
	})
	const translateX = useTransform(scrollYProgress, [0, 1], ['-50%', '50%'])
	const translateXReverse = useTransform(
		scrollYProgress,
		[0, 1],
		['50%', '-50%']
	)
	const isReversed = variant === 'reverse' ? 1 : 0

	return (
		<div
			className={cn(classes.textWrap, className)}
			ref={itemRef}
			{...rest}
		>
			{images &&
				images.length > 0 &&
				images.map((image, index) => (
					<motion.div
						className={classes.textWrap__item}
						style={{
							x: index % 2 === isReversed ? translateX : translateXReverse
						}}
						key={index}
					>
						<h2 className={classes.textWrap__itemText}>{image.text}</h2>
						<img
							src={image.image}
							alt='text wrap'
						/>
					</motion.div>
				))}
		</div>
	)
}
