import type { Metadata } from 'next'
import { FC } from 'react'

import { Hero } from '@/components/hero/Hero'
import { Reviews } from '@/components/reviews/Reviews'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

export const metadata: Metadata = {
	title: 'Reviews',
	description: 'Reviews'
}

interface IPage {}

const hero = {
	title: 'Нам Доверяют',
	text: 'Довольные клиенты и успешно реализованные проекты – это лучшее подтверждение нашей компетентности. ',
	reviews: [
		{
			icon: '/review-page-yandex.svg',
			rating: '5.0',
			alt: 'yandex'
		},
		{
			icon: '/review-page-google.svg',
			rating: '5.0',
			alt: 'google'
		}
	]
}

const reviews = [
	{
		title: 'Брендинг для "Чистоff". Брянск, Россия',
		text: 'Я очень редко кого-то рекомендую. Но RBand я могу уверенно рекомендовать всем. Это команда профессионалов, которые четко понимают то, что тебе нужно. И, что меня сильно удивило, в отличие от других компаний, у RBand все четко по графику и точно в срок. Последние полтора года постоянно обращаемся к ним за разработкой полиграфии и оформления своих рекламных активностей.',
		image: '/reviews/1.jpg',
		author: 'Сергей Туркин, владелец "ЧистоFF"',
		links: [
			{
				text: 'Брендинг',
				href: '#'
			}
		]
	},
	{
		title: 'Web-сайт для фабрики "Honman". Брянск, Россия',
		text: 'В 2022 году наша компания заказала у ребят сделать сайт на домене Honman.ru. Очень остались довольны творческим и профессиональным подходом.... Особо отмечу дотошность, въедливость в детали разработки сайта, а также соблюдение всех оговоренных на начальном этапе сроков. Надеемся на дальнейшее сотрудничество в наших новых проектах. Огромные молодцы, рекомендую!!!!!!!',
		image: '/reviews/2.png',
		author: 'Александр Кузнецов, владелец "Honman"',
		links: [
			{
				text: 'Web-сайт',
				href: '#'
			},
			{
				text: 'Кейс продвижения',
				href: '#'
			}
		]
	}
]

const Page: FC<IPage> = () => {
	return (
		<>
			<Hero {...hero} />
			<PageWrapper>
				<Reviews {...reviews} />
			</PageWrapper>
		</>
	)
}

export default Page
