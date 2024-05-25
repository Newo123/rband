'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { IProject } from '@/store/our-project.store'

import classes from './styles.module.scss'

type TypeProject = IProject

export function ProjectsItem({
	href,
	image,
	text,
	title,
	shadow,
	textColor,
	video
}: TypeProject) {
	const itemRef = useRef(null)
	const animationRef = useRef(null)
	const [isVisible, setIsVisible] = useState<boolean>(false)
	useGSAP(() => {
		ScrollTrigger.create({
			trigger: itemRef.current,
			start: 'top bottom',
			end: 'bottom top',
			animation: gsap.to(animationRef.current, {
				translateY: 0,
				opacity: 1,
				duration: 1,
				delay: -0.2
			}),
			onToggle: self => {
				if (self.isActive) {
					const video = self.trigger?.querySelector('video')
					setIsVisible(!isVisible)

					if (video) video.play()
				} else {
					const video = self.trigger?.querySelector('video')
					if (video) video.pause()
				}
			}
		})
	})
	return (
		<div
			ref={animationRef}
			style={{ transform: 'translateY(100%)', opacity: 0 }}
		>
			<a
				href={href}
				className={cn(
					classes.ourProjects__item,
					textColor === 'white' ? classes.ourProjects__textWhite : ''
				)}
				key={Math.random()}
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

					{isVisible && video?.length ? (
						<video
							loop
							autoPlay
							preload='auto'
							muted={true}
							playsInline
							controls={false}
							poster={image}
						>
							{video.map((v, i) => (
								<source
									src={v.src}
									type={v.type}
									key={i}
								/>
							))}
						</video>
					) : null}
				</div>

				<h6 className={classes.ourProjects__itemTitle}>{title}</h6>
				<p className={classes.ourProjects__itemText}>{text}</p>
			</a>
		</div>
	)
}
