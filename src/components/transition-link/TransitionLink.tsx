'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { animationPageOut } from '@/utils/animation'

interface ITransitionLink extends PropsWithChildren {
	href: string
	className: string
}

export function TransitionLink({ href, children, className }: ITransitionLink) {
	const router = useRouter()
	const pathname = usePathname()

	const handleClick = (e: any) => {
		e.preventDefault()
		if (pathname !== href) {
			animationPageOut(href, router)
		}
	}

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={className}
		>
			{children}
		</Link>
	)
}
