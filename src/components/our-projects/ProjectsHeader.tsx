import cn from 'clsx'

import Heading from '../ui/Heading/Heading'
import { Reference } from '../ui/reference/Reference'

import { IProjects } from './projects.types'
import classes from './styles.module.scss'

export function ProjectsHeader({ projects }: IProjects) {
	return (
		<div className={classes.ourProjects__header}>
			<Heading
				tag='h4'
				className={cn('site-title-2', classes.ourProjects__title)}
			>
				Наши проекты
			</Heading>
			{projects && projects?.length > 0 ? (
				<div className={classes.ourProjects__containerTabs}>
					<div className={classes.ourProjects__tabs}>
						{projects.map((project, index) => (
							<div
								className={cn(classes.ourProjects__tab)}
								key={index}
							>
								<span>{project.title}</span>
							</div>
						))}
					</div>
				</div>
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
