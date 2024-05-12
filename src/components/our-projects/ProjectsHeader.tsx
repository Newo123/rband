import cn from 'clsx';
import Link from 'next/link';
import classes from './styles.module.scss';

export function ProjectsHeader() {
	return (
		<div className={classes.ourProjects__header}>
			<h2 className={cn('site-title-2', classes.ourProjects__title)}>
				Наши проекты
			</h2>
			<Link href='/' className={classes.ourProjects__more}>
				Смотреть все кейсы
			</Link>
		</div>
	);
}
