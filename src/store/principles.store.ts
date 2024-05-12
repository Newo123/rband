import { create } from 'zustand'

type TypePrinciplesContentItem = {
	title: string
	text: Array<string>
}
export type TypePrinciplesContent = {
	title: string
	items: Array<TypePrinciplesContentItem>
}
type TypePrinciplesPersonImages = {
	desktop: string
	mobile: string
}
export type TypePrinciplesPersonStatistics = {
	bigText: string
	text: string
}
type TypePrinciplesPersonName = {
	name: string
	job: string
}

export type TypePrinciplesPerson = {
	images: TypePrinciplesPersonImages
	statistics: Array<TypePrinciplesPersonStatistics>
	educations: Array<string>
	aboutName: TypePrinciplesPersonName
	aboutText: Array<string>
}

export interface IPrinciples {
	content: TypePrinciplesContent
	person: TypePrinciplesPerson
}

export const usePrinciples = create<IPrinciples>()(set => ({
	content: {
		title: 'ПРИНЦИПЫ RBAND',
		items: [
			{
				title: 'Продуктивная работа',
				text: [
					'Мы за постоянное общение между клиентами и нашими специалистами. Умение слышать, предлагать рациональные решения и качественно реализовывать их позволяет быстро запустить даже сложный проект.'
				]
			},
			{
				title: 'Продуктивная работа',
				text: [
					'Мы за постоянное общение между клиентами и нашими специалистами. Умение слышать, предлагать рациональные решения и качественно реализовывать их позволяет быстро запустить даже сложный проект.'
				]
			},
			{
				title: 'Продуктивная работа',
				text: [
					'Мы за постоянное общение между клиентами и нашими специалистами. Умение слышать, предлагать рациональные решения и качественно реализовывать их позволяет быстро запустить даже сложный проект.'
				]
			},
			{
				title: 'Продуктивная работа',
				text: [
					'Мы за постоянное общение между клиентами и нашими специалистами. Умение слышать, предлагать рациональные решения и качественно реализовывать их позволяет быстро запустить даже сложный проект.'
				]
			},
			{
				title: 'Продуктивная работа',
				text: [
					'Мы за постоянное общение между клиентами и нашими специалистами. Умение слышать, предлагать рациональные решения и качественно реализовывать их позволяет быстро запустить даже сложный проект.'
				]
			}
		]
	},
	person: {
		images: {
			desktop: '/victoria.jpg',
			mobile: '/victoriaMobile.png'
		},
		statistics: [
			{
				bigText: '10+',
				text: 'лет в компании'
			},
			{
				bigText: '80+',
				text: 'успешных web-проектов'
			},
			{
				bigText: '30+',
				text: 'запущенных бренд-проектов'
			}
		],
		educations: [
			'Выпускница академий дизайна Праги и Барселоны.',
			'Проектная практика в Европе и США. '
		],
		aboutName: {
			name: 'Виктория',
			job: 'Арт-директор'
		},
		aboutText: [
			'Став предпринимателем, я целиком осознала смысл выражения “Время – деньги”. Грамотная реализация в срок является естественной потребностью Заказчика.',
			'Но фокусируясь на заработке, а не на качестве – хорошего продукта не получится. Во всём нужна золотая середина!'
		]
	}
}))
