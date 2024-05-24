'use client'

import { Container } from '@/components/ui/container/Container'

import { Reference } from '../ui/reference/Reference'

import { ProjectsGrid } from './ProjectsGrid'
import { ProjectsHeader } from './ProjectsHeader'
import { IProjects } from './projects.types'
import classes from './styles.module.scss'

export function Projects({ projects }: IProjects) {
	return (
		<section className={classes.ourProjects}>
			<Container
				variant='xl'
				className={classes.ourProjects__container}
			>
				<ProjectsHeader projects={projects} />
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
