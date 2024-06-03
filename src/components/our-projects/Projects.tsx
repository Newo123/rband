import { Container } from '@/components/ui/container/Container'

import { Reference } from '../ui/reference/Reference'

import { ProjectsHeader } from './ProjectsHeader'
import { ProjectsItem } from './ProjectsItem'
import { IProjects } from './projects.types'
import classes from './styles.module.scss'

export function Projects({ projects, title }: IProjects) {
	return (
		<section className={classes.ourProjects}>
			<Container
				variant='xl'
				className={classes.ourProjects__container}
			>
				{title && (
					<ProjectsHeader
						title={title}
						projects={projects}
					/>
				)}
				<div className={classes.ourProjects__grid}>
					{Array.isArray(projects)
						? projects.length > 0 &&
							projects[0].projects.map((project, index) => (
								<ProjectsItem
									key={index}
									{...project}
								/>
							))
						: projects.projects.map((project, index) => (
								<ProjectsItem
									key={index}
									{...project}
								/>
							))}
				</div>

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
