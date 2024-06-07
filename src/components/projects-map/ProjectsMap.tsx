import cn from 'clsx'

import { Container } from '../ui/container/Container'

import classes from './ProjectsMap.module.scss'
import { ProjectsMapFrame } from './ProjectsMapFrame'
import './styles.scss'

interface IProjectsMap {}

export function ProjectsMap({}: IProjectsMap) {
	return (
		<section className={classes.projectsMap}>
			<Container
				variant='xl'
				className={classes.projectsMap__container}
			>
				<h2 className={cn('site-title-2', classes.projectsMap__title)}>
					Карта проектов
				</h2>
				<p className={classes.projectsMap__text}>
					Наши проекты это: интуитивно понятный дизайн, изучение поведения и
					предпочтений ЦА, бенчмаркетинг и технологичность.
				</p>
				<div className={classes.projectsMap__map}>
					<ProjectsMapFrame />
				</div>
			</Container>
		</section>
	)
}
