'use client'

import cn from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { IProject } from './projects.types'
import classes from './styles.module.scss'

const animation = {
	inactive: {
		y: 100,
		opacity: 0
	},
	active: {
		y: 0,
		opacity: 1
	}
}

export function ProjectsItem({
	href,
	image,
	text,
	title,
	shadow,
	textColor,
	video
}: IProject) {
	const itemRef = useRef(null)
	const animationRef = useRef(null)
	const videoRef = useRef(null)
	const [isVisible, setIsVisible] = useState<boolean>(false)
	// useGSAP(() => {
	// 	ScrollTrigger.create({
	// 		trigger: itemRef.current,
	// 		start: 'top bottom',
	// 		end: 'bottom top',
	// 		animation: gsap.to(animationRef.current, {
	// 			translateY: 0,
	// 			opacity: 1,
	// 			duration: 1,
	// 			delay: -0.2
	// 		}),
	// 		onToggle: self => {
	// 			if (self.isActive) {
	// 				const video = self.trigger?.querySelector('video')
	// 				setIsVisible(!isVisible)

	// 				if (video) video.play()
	// 			} else {
	// 				const video = self.trigger?.querySelector('video')
	// 				if (video) video.pause()
	// 			}
	// 		}
	// 	})
	// })
	return (
		<motion.div
			initial='inactive'
			whileInView='active'
			variants={animation}
			ref={animationRef}
			transition={{ duration: 0.75 }}
		>
			<Link
				href={href}
				className={cn(
					classes.ourProjects__item,
					textColor === 'white' ? classes.ourProjects__textWhite : ''
				)}
				ref={itemRef}
			>
				<div
					className={cn(
						classes.ourProjects__itemImg,
						shadow ? classes.ourProjects__itemImgShadow : ''
					)}
				>
					{image && (
						<Image
							src={image}
							fill={true}
							alt={title}
						/>
					)}

					{video?.length && (
						<video
							loop
							autoPlay
							preload='auto'
							muted={true}
							playsInline
							controls={false}
							poster={image}
							ref={videoRef}
						>
							{video.map((v, i) => (
								<source
									src={v.src}
									type={v.type}
									key={i}
								/>
							))}
						</video>
					)}
				</div>

				<h6 className={classes.ourProjects__itemTitle}>{title}</h6>
				<p className={classes.ourProjects__itemText}>{text}</p>
			</Link>
		</motion.div>
	)
}
