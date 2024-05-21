import { usePrinciples } from '@/store/principles.store'

import { Container } from '../ui/container/Container'

import { PrinciplesContent } from './PrinciplesContent'
import { Person } from './principles-person/Person'
import classes from './styles.module.scss'

export function Principles() {
	const { content, person } = usePrinciples()
	return (
		<section className={classes.principles}>
			<Container
				variant='xl'
				className={classes.principles__container}
			>
				<PrinciplesContent {...content} />
				<Person {...person} />
			</Container>
		</section>
	)
}
