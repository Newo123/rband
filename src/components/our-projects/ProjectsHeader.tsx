import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap/all'
import Link from 'next/link'
import { useRef } from 'react'

import Heading from '../ui/Heading/Heading'

import classes from './styles.module.scss'

export function ProjectsHeader() {
	const linkRef = useRef(null)
	useGSAP(
		() => {
			gsap.to(linkRef.current, {
				scrollTrigger: {
					trigger: linkRef.current
				},
				translateY: 0,
				opacity: 1,
				delay: 0.3
			})
		},
		{ scope: linkRef }
	)
	return (
		<div className={classes.ourProjects__header}>
			<Heading
				tag='h2'
				className={cn('site-title-2', classes.ourProjects__title)}
			>
				Наши проекты
			</Heading>
			<Link
				href='/'
				className={classes.ourProjects__more}
				ref={linkRef}
				style={{
					opacity: 0,
					transform: 'translateY(100%)'
				}}
			>
				Смотреть все кейсы
			</Link>
		</div>
	)
}
