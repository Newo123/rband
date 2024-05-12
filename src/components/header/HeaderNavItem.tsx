import Link from 'next/link'

import classes from './styles.module.scss'

type TypeProps = {
	href: string
	title: string
}

export function HeaderNavItem({ href, title }: TypeProps) {
	return (
		<li className={classes.header__listItem}>
			<Link
				href={href}
				className={classes.header__listItemLink}
			>
				{title}
			</Link>
		</li>
	)
}
