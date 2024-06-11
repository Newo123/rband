'use client'

import Link from 'next/link'
import { HTMLAttributeAnchorTarget, useEffect, useRef, useState } from 'react'

import classes from './Tooltip.module.scss'

interface ITooltip {
	text: string
	link?: {
		text: string
		href: string
		target: HTMLAttributeAnchorTarget
	}
}
export function Tooltip({ text, link }: ITooltip) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [position, setPosition] = useState<number>(0)
	useEffect(() => {
		const el =
			containerRef.current?.getBoundingClientRect().left!! +
			containerRef.current?.offsetWidth!! -
			window.innerWidth
		if (el > 0) {
			setPosition(el + 20)
		}
	}, [])
	return (
		<div className={classes.tooltip}>
			<div
				className={classes.tooltip__box}
				ref={containerRef}
				style={{ transform: `translateX(-${position}px)` }}
			>
				<p
					dangerouslySetInnerHTML={{ __html: text }}
					className={classes.tooltip__text}
				/>
				{link && (
					<Link
						href={link.href}
						target={link.target}
						className={classes.tooltip__link}
					>
						{link.text}
					</Link>
				)}
			</div>
		</div>
	)
}
