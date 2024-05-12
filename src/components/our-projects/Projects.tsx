import Link from 'next/link'

import { Container } from '@/components/ui/container/Container'

import { ProjectsGrid } from './ProjectsGrid'
import { ProjectsHeader } from './ProjectsHeader'
import classes from './styles.module.scss'

export function Projects() {
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
				>
					смотреть все кейсы
				</Link>
			</Container>
		</section>
	)
}
