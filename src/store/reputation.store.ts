import { create } from 'zustand'

import { TypeTextWrap } from './stages.store'

export interface IRatingItem {
	image: string
	title: string
	text: string
}

interface IReputation {
	reputation: {
		textWrap: Array<TypeTextWrap>
		reputations: IRatingItem[]
	}
}

export const useReputation = create<IReputation>()(set => ({
	reputation: {
		textWrap: [
			{
				image: '/repText1.svg'
			},
			{
				image: '/repText2.svg'
			}
		],
		reputations: [
			{
				image: '/rep1.png',
				text: 'среди web-студий по России',
				title: 'Топ Рейтинг'
			},
			{
				image: '/rep2.png',
				text: 'среди web-студий по России',
				title: 'Топ Рейтинг'
			},
			{
				image: '/rep3.png',
				text: '100% рекомендация работодателя',
				title: 'Топ Рейтинг'
			}
		]
	}
}))
