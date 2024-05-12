import cn from 'clsx'

import { useServices } from '@/store/services.store'

import { Container } from '../ui/container/Container'

import { ServicesItem } from './ServicesItem'
import classes from './styles.module.scss'

export function Services() {
	const services = useServices(state => state.services)
	return (
		<section className={classes.services}>
			<Container
				variant='lg'
				className={classes.services__container}
			>
				<h2 className={cn('site-title-2', classes.services__title)}>
					Мы разрабатываем
				</h2>
				<p className={classes.services__text}>
					Для развития бизнеса необходимы инновационные идеи, индивидуальный
					подход и эффективные инструменты решения задач.
				</p>

				{services.length > 0 && (
					<div className={classes.services__list}>
						{services.map(service => (
							<ServicesItem
								key={service.id}
								{...service}
							/>
						))}
					</div>
				)}
			</Container>
		</section>
	)
}
