import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Link from 'next/link'
import { useRef } from 'react'

import { Container } from '@/components/ui/container/Container'

import { ProjectsGrid } from './ProjectsGrid'
import { ProjectsHeader } from './ProjectsHeader'
import classes from './styles.module.scss'

export function Projects() {
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
		<section className={classes.ourProjects}>
			<Container
				variant='lg'
				className={classes.ourProjects__container}
			>
				<ProjectsHeader />
				<ProjectsGrid />
				<Link
					href='/'
					className={classes.ourProjects__moreMobile}
					ref={linkRef}
					style={{
						opacity: 0,
						transform: 'translateY(100%)'
					}}
				>
					смотреть все кейсы
				</Link>
			</Container>
		</section>
	)
}
