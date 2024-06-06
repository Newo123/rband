import { TransitionLink } from '../transition-link/TransitionLink'

import classes from './styles.module.scss'

type TypeProps = {
	href: string
	title: string
}

export function HeaderNavItem({ href, title }: TypeProps) {
	return (
		<li className={classes.header__listItem}>
			<TransitionLink
				href={href}
				className={classes.header__listItemLink}
			>
				{title}
			</TransitionLink>
			{/* <Link
				href={href}
				className={classes.header__listItemLink}
			>
				{title}
			</Link> */}
		</li>
	)
}
