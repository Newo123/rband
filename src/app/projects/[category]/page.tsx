import type { Metadata } from 'next'
import { FC } from 'react'

import { Hero } from '@/components/hero/Hero'
import { Projects } from '@/components/our-projects/Projects'
import { projectsServices } from '@/components/our-projects/projects.data'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

import classes from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Projects',
	description: ''
}

interface IPage {}
const hero = {
	title: 'сайты и сервисы',
	text: 'Наши проекты это: интуитивно понятный дизайн, изучение поведения и предпочтений ЦА,  бенчмаркетинг и технологичность.',
	inners: [
		{
			text: 'Сайты и сервисы',
			href: '#'
		},
		{
			text: 'Интернет-продвижение',
			href: '#'
		},
		{
			text: 'Брендинг',
			href: '#'
		},
		{
			text: 'Дизайн-поддержка',
			href: '#'
		}
	],
	projects: {
		image: '/projects-page/1.png',
		text: 'Успешно запущенных сайтов и сервисов',
		count: '150'
	}
}
const Page: FC<IPage> = () => {
	return (
		<>
			<Hero {...hero} />

			<PageWrapper className={classes.projectsPageWrapper}>
				<Projects projects={projectsServices} />
			</PageWrapper>
		</>
	)
}

export default Page
