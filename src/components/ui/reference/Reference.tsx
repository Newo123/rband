'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap/all'
import Link from 'next/link'
import { useRef } from 'react'

import { IReference } from './reference.types'

export function Reference({ children, className, ...rest }: IReference) {
	const linkRef = useRef<HTMLAnchorElement>(null)
	useGSAP(
		() => {
			gsap.to(linkRef.current, {
				scrollTrigger: {
					trigger: linkRef.current
				},
				opacity: 1,
				translateY: 0,
				delay: 0.7
			})
		},
		{ scope: linkRef }
	)
	return (
		<Link
			className={cn(className)}
			ref={linkRef}
			{...rest}
			style={{ opacity: 0, transform: 'translateY(100%)' }}
		>
			{children}
		</Link>
	)
}
