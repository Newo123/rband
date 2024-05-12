import { create } from 'zustand'

type TypeTextColorProjects = 'white'

type TypeVideoProjects = {
	src: string
	type: string
}

export interface IProject {
	title: string
	text: string
	href: string
	textColor?: TypeTextColorProjects
	shadow?: boolean
	image: string
	video?: Array<TypeVideoProjects>
}

interface IProjectStore {
	projects?: IProject[]
}

export const useProjectStore = create<IProjectStore>()(set => ({
	projects: [
		{
			title: 'Сайт завода «Термотрон», Россия',
			text: 'Сочетание многолетнего опыта, мощности и инноваций.',
			href: '/',
			textColor: 'white',
			shadow: true,
			image: '/project3.jpg',
			video: [
				{
					src: '/termotron_oblojka.mp4',
					type: 'video/mp4'
				}
			]
		},
		{
			title: 'Cайт девелоперской компании «САКС», Россия',
			text: 'Cовременный подход в проектировании сайта и квартир.',
			href: '/',
			image: '/project1.jpg'
		},
		{
			title: 'Cайт девелоперской компании «САКС», Россия',
			text: 'Cовременный подход в проектировании сайта и квартир.',
			href: '/',
			textColor: 'white',
			image: '/project2.jpg'
		},
		{
			title: 'Cайт девелоперской компании «САКС», Россия',
			text: 'Cовременный подход в проектировании сайта и квартир.',
			href: '/',
			image: '/project4.jpg'
		},
		{
			title: 'Cайт девелоперской компании «САКС», Россия',
			text: 'Cовременный подход в проектировании сайта и квартир.',
			href: '/',
			textColor: 'white',
			image: '/project2.jpg'
		},
		{
			title: 'Cайт девелоперской компании «САКС», Россия',
			text: 'Cовременный подход в проектировании сайта и квартир.',
			href: '/',
			image: '/project4.jpg'
		}
	]
}))
