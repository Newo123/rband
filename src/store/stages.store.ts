import { create } from 'zustand'

export type TypeTextWrap = {
	image: string
}

export type TypeStagesContent = {
	number: string
	title: string
	text: string
	image: string
	isActive: boolean
}

interface IStagesStore {
	stages: {
		textWraps: Array<TypeTextWrap>
		content: Array<TypeStagesContent>
	}
	setActiveStages: (number: string) => void
}

export const useStages = create<IStagesStore>()(set => ({
	stages: {
		textWraps: [
			{
				image: '/stages-first.svg'
			},
			{
				image: '/stages-second.svg'
			}
		],
		content: [
			{
				number: '01/',
				title: 'Бриф и аналитика',
				text: 'Выявление потребностей, постановка целей проекта. Составление подробной структуры сайта.',
				image: '/stages1.svg',
				isActive: true
			},
			{
				number: '02/',
				title: 'Дизайн проекта',
				text: 'Выявление потребностей, постановка целей проекта. Составление подробной структуры сайта.',
				image: '/stages2.svg',
				isActive: false
			},
			{
				number: '03/',
				title: 'Front-end и Back-end разработка',
				text: 'Выявление потребностей, постановка целей проекта. Составление подробной структуры сайта.',
				image: '/stages3.svg',
				isActive: false
			},
			{
				number: '04/',
				title: 'Тестирование и отладка',
				text: 'Выявление потребностей, постановка целей проекта. Составление подробной структуры сайта.',
				image: '/stages4.svg',
				isActive: false
			},
			{
				number: '05/',
				title: 'Запуск проекта',
				text: 'Выявление потребностей, постановка целей проекта. Составление подробной структуры сайта.',
				image: '/stages5.svg',
				isActive: false
			},
			{
				number: '06/',
				title: 'Гарантийные обязательства',
				text: 'Выявление потребностей, постановка целей проекта. Составление подробной структуры сайта.',
				image: '/stages6.svg',
				isActive: false
			}
		]
	},
	setActiveStages: (number: string) =>
		set(state => ({
			stages: {
				textWraps: [...state.stages.textWraps],
				content: [
					...state.stages.content.map(item => {
						if (item.number === number) {
							item.isActive = true
						} else {
							item.isActive = false
						}
						return item
					})
				]
			}
		}))
}))
