import cn from 'clsx'
import Link from 'next/link'

import Heading from '../ui/Heading/Heading'

import classes from './styles.module.scss'

export function ProjectsHeader() {
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
			>
				Смотреть все кейсы
			</Link>
		</div>
	)
}
