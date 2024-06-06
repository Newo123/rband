import { About } from '@/components/about/About'
import { Advantages } from '@/components/advantages/Advantages'
import { advantagesDataHome } from '@/components/advantages/advantages.data'
import { Descriptor } from '@/components/descriptor/Descriptor'
import { Motivations } from '@/components/motivations/Motivations'
import { Projects } from '@/components/our-projects/Projects'
import { projects } from '@/components/our-projects/projects.data'
import { Partners } from '@/components/partners/Partners'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'
import { Useful } from '@/components/useful/Useful'

const partners = [
	{
		href: '#',
		image: '/partner1.png'
	},
	{
		href: '#',
		image: '/partner2.png'
	},
	{
		href: '#',
		image: '/partner3.png'
	},
	{
		href: '#',
		image: '/partner4.png'
	},
	{
		href: '#',
		image: '/partner5.png'
	},
	{
		href: '#',
		image: '/partner6.png'
	}
]
const text = [
	{
		image: '/repText1.svg',
		text: 'ПРОВЕРЕННАЯ'
	},
	{
		image: '/repText2.svg',
		text: 'РЕПУТАЦИЯ'
	}
]

const aboutInfo = [
	{
		texts: [
			'RBand cобрал в себе специалистов с глубоким знанием прикладных наук, актуальных технологий и пониманием их постоянного развития.',
			'Наша вовлеченность в специфику компании клинета, умение слышать, широкий кругозор и знание современных инструментов приводят к эффективым бизнес-решениям.'
		],
		button: {
			text: 'о компании',
			href: '#'
		}
	},
	{
		texts: [
			'Над каждым проектом мы работаем как над своим. Довольные клиенты и успешно реализованные проекты – это лучшее подтверждение нашей компетентности. '
		],
		button: {
			text: 'отзывы на ресурсах',
			href: '#'
		}
	}
]
const projectsAbout = [
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
const text2 = [
	{
		image: '/home-motivations/wrap1.svg',
		text: 'ВАШ ПРОЕКТ'
	},
	{
		image: '/home-motivations/wrap2.svg',
		text: 'НАШ ПРОЕКТ'
	}
]
export function Home() {
	return (
		<>
			<Descriptor />

			<PageWrapper>
				<Partners {...partners} />
				<Advantages advantages={advantagesDataHome} />
				<Projects
					title='Наши проекты'
					projects={projects}
				/>
				<About
					images={text}
					head={headAbout}
					info={aboutInfo}
					projects={projectsAbout}
					reviews={aboutReviews}
				/>

				<Useful />
				<Motivations
					motivations={motivations}
					textWrap={text2}
				/>
			</PageWrapper>
		</>
	)
}
