import { HeaderNavItem } from './HeaderNavItem'
import { menu } from './menu.data'
import classes from './styles.module.scss'

export function HeaderNav() {
	return (
		<nav className={classes.header__nav}>
			<ul className={classes.header__list}>
				{menu.map((m, i) => (
					<HeaderNavItem
						{...m}
						key={i}
					/>
				))}
			</ul>
		</nav>
	)
}
