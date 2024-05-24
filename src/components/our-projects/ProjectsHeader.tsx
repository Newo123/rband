import cn from 'clsx'

import Heading from '../ui/Heading/Heading'
import { Reference } from '../ui/reference/Reference'

import { IProjectsSlides } from './projects.types'
import classes from './styles.module.scss'

export function ProjectsHeader({ title, projects }: IProjectsSlides) {
	return (
		<div className={classes.ourProjects__header}>
			<Heading
				tag='h4'
				className={cn('site-title-2', classes.ourProjects__title)}
			>
				Наши проекты
			</Heading>
			{projects && projects?.length > 0 ? (
				<div>{projects[0].title}</div>
			) : (
				<Reference
					href='/'
					className={classes.ourProjects__more}
				>
					Смотреть все кейсы
				</Reference>
			)}
		</div>
	)
}
