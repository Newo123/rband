import type { Metadata } from 'next'
import { FC } from 'react'

import { Blog } from '@/components/blog/Blog'
import { Hero } from '@/components/hero/Hero'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

export const metadata: Metadata = {
	title: 'blog',
	description: ''
}

interface IPage {}

const hero = {
	title: 'мир дизайна',
	text: 'Полезные советы от практиков индустрии и другая полезная информация для дизайнеров и тех, кто интересуется дизайном.',
	inners: [
		{
			text: 'Мир дизайна',
			href: '#'
		},
		{
			text: 'Скрипты & плагины',
			href: '#'
		},
		{
			text: 'How-to',
			href: '#'
		},
		{
			text: 'Ревью',
			href: '#'
		},
		{
			text: 'Рекомендации',
			href: '#'
		},
		{
			text: 'PRO маркетинг',
			href: '#'
		}
	]
}
const blog = [
	{
		title:
			'Дизайним идеальную кнопку. Дизайним идеальную кнопку идеальную кнопку',
		href: '/blog/category/inner',
		image: '/blog/1.gif'
	},
	{
		title: 'Что такое разрешение и почему оно важно?',
		href: '/blog/category/inner',
		image: '/blog/2.gif'
	},
	{
		title: '10 ошибок начинающего дизайнера',
		href: '/blog/category/inner',
		image: '/blog/2.gif'
	},
	{
		title:
			'Дизайним идеальную кнопку. Дизайним идеальную кнопку идеальную кнопку',
		href: '/blog/category/inner',
		image: '/blog/1.gif'
	},
	{
		title: 'Что такое разрешение и почему оно важно?',
		href: '/blog/category/inner',
		image: '/blog/1.gif'
	},
	{
		title: '10 ошибок начинающего дизайнера',
		href: '/blog/category/inner',
		image: '/blog/2.gif'
	}
]

const Page: FC<IPage> = () => {
	return (
		<>
			<Hero {...hero} />
			<PageWrapper>
				<Blog {...blog} />
			</PageWrapper>
		</>
	)
}

export default Page
