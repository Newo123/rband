'use client'

import cn from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { IProject } from './projects.types'
import classes from './styles.module.scss'

const animation = {
	inactive: {
		transform: 'translateY(50%)',
		opacity: 0
	},
	active: {
		transform: 'translateY(0%)',
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

	const handleEnter = (e: any) => {
		const video = e.target as HTMLVideoElement
		video.play()
	}
	const handleLeave = (e: any) => {
		const video = e.target as HTMLVideoElement
		video.pause()
	}

	return (
		<motion.div
			initial='inactive'
			whileInView='active'
			variants={animation}
			ref={animationRef}
			transition={{ duration: 0.75 }}
			viewport={{ once: true }}
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
						<motion.video
							loop
							autoPlay
							preload='auto'
							muted={true}
							playsInline
							controls={false}
							poster={image}
							ref={videoRef}
							onViewportEnter={handleEnter}
							onViewportLeave={handleLeave}
						>
							{video.map((v, i) => (
								<source
									src={v.src}
									type={v.type}
									key={i}
								/>
							))}
						</motion.video>
					)}
				</div>

				<h6 className={classes.ourProjects__itemTitle}>{title}</h6>
				<p className={classes.ourProjects__itemText}>{text}</p>
			</Link>
		</motion.div>
	)
}
