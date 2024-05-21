import cn from 'clsx'

import { useFaq } from '@/store/faq.store'

import Heading from '../ui/Heading/Heading'
import { Container } from '../ui/container/Container'

import { FaqItem } from './FaqItem'
import { FaqList } from './FaqList'
import classes from './styles.module.scss'

export function Faq() {
	const faq = useFaq(state => state.faq)
	return (
		<section className={classes.faq}>
			<Container
				variant='xl'
				className={classes.faq__container}
			>
				<Heading
					tag='h5'
					className={cn('site-title-2', classes.faq__title)}
				>
					{faq.title}
				</Heading>
				{faq.items.length > 0 && (
					<FaqList>
						{faq.items.map((item, index) => (
							<FaqItem
								title={item.title}
								typography={item.typography}
								key={index}
							/>
						))}
					</FaqList>
				)}
			</Container>
		</section>
	)
}
