'use client'

import { useRef } from 'react'

import { TextWrap } from '../text-wrap/TextWrap'
import { TextWrapItem } from '../text-wrap/TextWrapItem'
import { Container } from '../ui/container/Container'

import classes from './Motivations.module.scss'
import { MotivationsItem } from './MotivationsItem'

const text = [
	{
		image: '/home-motivations/wrap1.svg'
	},
	{
		image: '/home-motivations/wrap2.svg'
	}
]

const motivations = [
	{
		image: '/home-motivations/1.svg',
		title: 'Анализ проектаи разработка стратегии',
		texts: [
			'Мы всегда проводим анализ проекта, изучаем цели и задачи, подбираем эффективные инструменты.',
			'Без грамотного планирования бизнес рискует потерять инвестиции и время для решения поставленных задач.'
		]
	},
	{
		image: '/home-motivations/2.svg',
		title: 'Креативный подход = инструмент продаж',
		texts: [
			'В насыщенном рынке присутвия недостаточно – необходимо выделяться. Шаблонные решения уже не работают.',
			'Бизнесу необходимы свежие идеи, уникальные решения и современные инструменты для бизнес-задач.'
		]
	},
	{
		image: '/home-motivations/3.gif',
		title: 'Изучаем вашу ЦА и помогаем выделиться среди конкурентов',
		texts: [
			'Разработка любого бизнес-инструмента начинается с постановки целей, анализа целевой аудитории, ее потребностей и выявления конкурентных преимуществ компании.',
			'Пренебрежение этим этапом влечёт за собой риск создания не эффективного ресурса с низкой конверсией.'
		]
	},
	{
		image: '/home-motivations/4.svg',
		title: 'Эффективные решения = Успешный бизнес',
		texts: [
			'Развитие нашей компании зависит от успеха проектов, поэтому мы предлагаем только эффективные бизнес-решения.',
			'Мы разделяем ценности наших клиентов как свои: тайминг, прибыль, компетентность, деловая этика и любовь к своему делу.',
			'Залог успешного проекта – выбор грамотного мотивированного разработчика!'
		]
	}
]

export function Motivations() {
	const textRef = useRef(null)
	return (
		<section className={classes.motivations}>
			{text.length > 0 && (
				<TextWrap
					id='motivation-text-wrap'
					className={classes.motivations__textWrap}
					ref={textRef}
				>
					{text.map((t, i) => {
						return (
							<TextWrapItem
								image={t.image}
								index={i}
								key={i}
								reference={textRef}
								id='#motivation-text-wrap'
							/>
						)
					})}
				</TextWrap>
			)}
			<Container
				variant='xl'
				className={classes.motivations__container}
			>
				{motivations.length > 0 &&
					motivations.map((motivation, index) => (
						<MotivationsItem
							key={index}
							image={motivation.image}
							title={motivation.title}
							texts={motivation.texts}
						/>
					))}
			</Container>
		</section>
	)
}
