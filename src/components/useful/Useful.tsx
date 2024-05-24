import cn from 'clsx'

import Heading from '../ui/Heading/Heading'
import { Container } from '../ui/container/Container'
import { Reference } from '../ui/reference/Reference'

import classes from './Useful.module.scss'
import { UsefulSlider } from './UsefulSlider'

const slides = [
	{
		href: '#',
		image: '/useful1.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful2.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful3.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful1.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful2.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful3.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful1.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	},
	{
		href: '#',
		image: '/useful2.png',
		title: 'Чек-лист успешного сайта и как формируется его стоимость',
		text: 'Разберём как распознать псевдо-разработчиков и на что необходимо обращать внимание, чтобы заработать, а не потерять.'
	}
]

export function Useful() {
	return (
		slides.length > 0 && (
			<section className={classes.useful}>
				<Container
					variant='xl'
					className={classes.useful__container}
				>
					<div className={classes.useful__header}>
						<Heading
							tag='h2'
							className={cn(classes.useful__title, 'site-title-2')}
						>
							Будет полезно
						</Heading>
						<Reference
							href='#'
							className={classes.useful__more}
						>
							Смотреть все статьи
						</Reference>
					</div>
					<UsefulSlider {...slides} />
				</Container>
			</section>
		)
	)
}
