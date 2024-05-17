'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap, { Observer } from 'gsap/all'
import { HTMLAttributes, PropsWithChildren, useRef } from 'react'

import classes from './Button.module.scss'

export function Button({
	className,
	children
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement | HTMLLinkElement>>) {
	const buttonRef = useRef<any>()
	const followerRef = useRef<any>()
	const handleLeave = (e: any) => {
		gsap.to(followerRef.current, {
			duration: 0,
			transform: 'none',
			scale: 0
		})
	}

	useGSAP(
		() => {
			Observer.create({
				target: buttonRef.current,
				type: 'pointer',
				onMove: self => {
					gsap.to(followerRef.current, {
						duration: 0.2,
						delay: 0,
						translateX:
							// @ts-ignore
							(self.event.layerX / buttonRef.current.clientWidth) * 100 + '%',
						translateY:
							// @ts-ignore
							(self.event.layerY / buttonRef.current.clientHeight) * 100 + '%',
						scale: 1
					})
				},
				onHoverEnd: self => {
					gsap.to(followerRef.current, {
						duration: 0.2,
						delay: 0,
						scale: 0
					})
				}
			})
		},
		{ scope: buttonRef }
	)
	return (
		<button
			className={cn(classes.button, className)}
			ref={buttonRef}
		>
			<div
				className={classes.button__follower}
				ref={followerRef}
			></div>
			{children}
		</button>
	)
}
