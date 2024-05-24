import cn from 'clsx'

import Heading from '../ui/Heading/Heading'
import { Reference } from '../ui/reference/Reference'

import classes from './styles.module.scss'

export function ProjectsHeader() {
	return (
		<div className={classes.ourProjects__header}>
			<Heading
				tag='h4'
				className={cn('site-title-2', classes.ourProjects__title)}
			>
				Наши проекты
			</Heading>
			<Reference
				href='/'
				className={classes.ourProjects__more}
			>
				Смотреть все кейсы
			</Reference>
		</div>
	)
}
