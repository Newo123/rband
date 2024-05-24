'use client'

import { Container } from '@/components/ui/container/Container'

import { Reference } from '../ui/reference/Reference'

import { ProjectsGrid } from './ProjectsGrid'
import { ProjectsHeader } from './ProjectsHeader'
import { TypeProjects } from './projects.types'
import classes from './styles.module.scss'

export function Projects(projects: TypeProjects) {
	return (
		<section className={classes.ourProjects}>
			<Container
				variant='xl'
				className={classes.ourProjects__container}
			>
				<ProjectsHeader />
				<ProjectsGrid />
				<Reference
					href='/'
					className={classes.ourProjects__moreMobile}
				>
					смотреть все кейсы
				</Reference>
			</Container>
		</section>
	)
}
