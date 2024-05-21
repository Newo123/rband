import { Container } from '@/components/ui/container/Container'

import { AdvantagesImages } from './AdvantagesImages'
import { AdvantagesList } from './AdvantagesList'
import classes from './styles.module.scss'

export function Advantages() {
	return (
		<section className={classes.advantages}>
			<Container
				variant='xl'
				className={classes.advantages__container}
			>
				<AdvantagesImages />
				<AdvantagesList />
			</Container>
		</section>
	)
}
