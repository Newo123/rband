import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { HTMLAttributes, PropsWithChildren, useRef } from 'react'

import classes from './styles.module.scss'

interface ILink {
	text: string
	href: string
}

interface IProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
	link: Array<ILink>
	sliderRef: any
}

export function ReputationSliderLink({ link, sliderRef, ...rest }: IProps) {
	const linkRef = useRef(null)

	useGSAP(() => {
		gsap.to(linkRef.current, {
			scrollTrigger: {
				trigger: '#reviews-slider'
			},
			opacity: 1,
			translateY: 0,
			delay: 0.6
		})
	})
	return (
		<div
			className={classes.reputation__sliderSlideLinks}
			{...rest}
			ref={linkRef}
			style={{ opacity: 0, transform: 'translateY(100%)' }}
		>
			Смотреть{' '}
			{link.map((l, i) => (
				<Link
					href={l.href}
					key={i}
				>
					{l.text}
				</Link>
			))}
		</div>
	)
}
