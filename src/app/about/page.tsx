import type { Metadata } from 'next'
import { FC } from 'react'

import { About } from '@/components/about/About'
import { HeroAbout } from '@/components/hero-about/HeroAbout'
import { HorizontalSection } from '@/components/horizontal-section/HorizontalSection'
import { Motivations } from '@/components/motivations/Motivations'

export const metadata: Metadata = {
	title: 'About',
	description: ''
}

interface IPage {}

const aboutInfo = [
	{
		texts: [
			'Как сказал Билл Гейтс: “Если вашего бизнеса нет в интернете, то вас нет в бизнесе». Сейчас не достаточно просто сделать сайт, важно понимать необходимость комплексного профессионального подхода.',
			'Над каждым проектом мы работаем как над своим. Довольные клиенты и успешно реализованные проекты – это лучшее подтверждение нашей компетентности.'
		],
		button: {
			text: 'Скачать презентацию',
			href: '#'
		}
	}
]
const projects = [
	{
		image: '/home-projects/1.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/2.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/3.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/4.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/5.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/6.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/7.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/8.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/9.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/10.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/11.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/12.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/13.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/15.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	},
	{
		image: '/home-projects/14.svg',
		name: 'КФХ Стародубец',
		text: 'Один из лидеров по выращиванию зерновых и картофельных культур',
		href: '#'
	}
]
const headAbout = {
	reputations: [
		{
			numbers: '1200+',
			text: 'Успешно реализованных сайтов и дизайн-проектов'
		},
		{
			numbers: '12+',
			text: 'лет опыта web-разработки и дизайна'
		},
		{
			numbers: '10+',
			text: 'стран доверяют нам разработку своих проектов'
		},
		{
			numbers: '260+',
			text: 'довольных постоянных клиентов'
		}
	],
	image: '/about/about-img.png',
	video: '/about/about-video.mp4'
}
const aboutReviews = {
	title: 'Более 20 крутых клиентов',
	text: 'Доверительные отношения, проверенные временем.'
}

const motivations = [
	{
		image: '/about/motivation1.svg',
		title: 'Ваш проект = наш проект. На стороне с заказчиком',
		texts: [
			'Будем прямолинейны – мы заинтересованы в успехе всех наших проектов. Прибыльные и грамотные решения ведут к масштабированию и развитию сервиса.',
			'Многолетнее сотрудничество всегда приятно и эффективно!'
		]
	},
	{
		image: '/about/motivation2.gif',
		title: 'Продвигая вас, мы продвигаем себя',
		texts: [
			'Довольные клиенты и успешно реализованные проекты – это лучшее подтверждение компетентности и профессионализма компании. Мы работаем над любым проектом с максимальной отдачей от чего сами получаем большое удовлетворение!'
		]
	},
	{
		image: '/about/motivation3.svg',
		title: 'Компетенция и профессионализм',
		texts: [
			'Мы настоящие трудоголики и фанаты своего дела. Регулярно посещаем форумы и лекции, сотрудничаем с московскими и европейскими студиями, гуглим форумы дизайна и программирования. Будьте готовы к неординарным решениям!'
		]
	},
	{
		image: '/about/motivation4.svg',
		title: 'Оптимизация = только нужные люди и решения',
		texts: [
			'Мы за прямое общение между клиентами и нашими ключевыми специалистами.',
			'Высокая вовлеченность, умение слышать, предлагать рациональные решения и качественно реализовывать их позволяет быстро запустить даже сложный проект.'
		]
	}
]
const text = [
	{
		image: '/about/wrap1.svg',
		text: 'Принципы'
	},
	{
		image: '/about/wrap2.svg',
		text: 'RBAND'
	}
]
const Page: FC<IPage> = () => {
	return (
		<>
			<HeroAbout />
			<About
				info={aboutInfo}
				projects={projects}
				head={headAbout}
				reviews={aboutReviews}
			/>
			<HorizontalSection />
			{/* / */}
			<Motivations
				motivations={motivations}
				textWrap={text}
			/>
		</>
	)
}

export default Page
