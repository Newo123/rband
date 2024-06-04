'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

import classes from './ImageBackgroundScroll.module.scss'

interface IImageBackgroundScrollPictures {
	image: string
	smallImage: string
}
interface IImageBackgroundScroll {
	pictures: IImageBackgroundScrollPictures
}
const MImage = motion(Image)
export function ImageBackgroundScroll({ pictures }: IImageBackgroundScroll) {
	const { scrollYProgress, scrollY } = useScroll()

	const position = useTransform(
		scrollYProgress,
		[0, 1],
		['center 100%', 'center -250%']
	)

	useEffect(() => {
		console.log(scrollYProgress)
	}, [scrollY])
	return (
		<div className={classes.image}>
			<MImage
				src={pictures.image}
				alt='img'
				fill
				// @ts-ignore
				style={{ objectPosition: position }}
			/>
		</div>
	)
}
