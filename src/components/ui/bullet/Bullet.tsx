'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { HTMLAttributes, PropsWithChildren, useRef, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

import classes from './styles.module.scss'

type TypeBullet = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
	title: string
}

export function Bullet({ className, children, title, ...rest }: TypeBullet) {
	const bulletRef = useRef(null)
	const titleRef = useRef(null)
	const childRef = useRef(null)
	const [isActive, setIsActive] = useState(false)

	useGSAP(
		() => {
			ScrollTrigger.create({
				trigger: bulletRef.current,
				start: 'top 75%',
				end: 'bottom 25%',
				onEnter: self => {
					gsap
						.timeline()
						.add(() => setIsActive(self.isActive))
						.to(titleRef.current, {
							opacity: 0
						})
						.to(childRef.current, {
							opacity: 1,
							delay: 0.3
						})
				},
				onLeaveBack: self => {
					gsap
						.timeline()
						.to(childRef.current, {
							opacity: 0
						})
						.add(() => setIsActive(self.isActive))
						.to(titleRef.current, {
							opacity: 1
						})
				}
			})
		},
		{
			scope: bulletRef,
			dependencies: [isActive, setIsActive, bulletRef, titleRef]
		}
	)

	return (
		<div
			className={cn(
				classes.bullet,
				className,
				isActive && classes.bullet_active
			)}
			ref={bulletRef}
			{...rest}
		>
			<div
				ref={childRef}
				style={{ opacity: 0, width: '100%', height: '100%' }}
			>
				{children}
			</div>
			{title && (
				<h4
					ref={titleRef}
					className={cn(classes.bullet__title)}
				>
					{ReactHtmlParser(title)}
				</h4>
			)}
		</div>
	)
}
