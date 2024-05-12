import { Container } from '../ui/container/Container'

import { PartnersItem } from './PartnersItem'
import classes from './styles.module.scss'

export function Partners(partners: Array<{ href: string; image: string }>) {
	return (
		<div className={classes.partners}>
			<Container
				variant='lg'
				className={classes.partners__container}
			>
				{Object.values(partners)?.map(partner => (
					<PartnersItem
						key={partner.image}
						href={partner.href}
						image={partner.image}
					/>
				))}
			</Container>
		</div>
	)
}
