'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import { TextWrap } from '../text-wrap/TextWrap'
import { TextWrapItem } from '../text-wrap/TextWrapItem'
import { Button } from '../ui/button/Button'
import { Container } from '../ui/container/Container'

import classes from './About.module.scss'

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
			'Над каждым проектом мы работаем как над своим. Довольные клиенты и успешно реализованные проекты – это лучшее подтверждение нашей компетентности.'
		],
		button: {
			text: 'отзывы на ресурсах',
			href: '#'
		}
	}
]

const textReputation = [
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
export function About() {
	const textRef = useRef(null)
	const router = useRouter()
	return (
		<section className={classes.about}>
			{text.length > 0 && (
				<TextWrap
					id='about-text-wrap'
					className={classes.about__textWrap}
					ref={textRef}
				>
					{text.map((t, i) => {
						return (
							<TextWrapItem
								text={t.text}
								image={t.image}
								index={i}
								key={i}
								reference={textRef}
								id='#about-text-wrap'
							/>
						)
					})}
				</TextWrap>
			)}
			<Container
				variant='xl'
				className={classes.about__container}
			>
				<div className={classes.about__info}>
					{aboutInfo.length > 0 &&
						aboutInfo.map(
							(about, index) =>
								about.texts.length > 0 && (
									<div
										key={index}
										className={classes.about__block}
									>
										{about.texts.map((text, i) => (
											<p
												key={i}
												className={classes.about__blockText}
											>
												{text}
											</p>
										))}
										<Button className={classes.about__blockButton}>
											<span onClick={() => router.push(about.button.href)}>
												{about.button.text}
											</span>
										</Button>
									</div>
								)
						)}
				</div>

				<div className={classes.about__content}>
					<div className={classes.about__contentHead}>
						<div className={classes.about__contentHeadVideo}>
							<Image
								src='/about-img.png'
								alt='about images'
								fill
								sizes='100vw'
								objectFit='cover'
								objectPosition='center'
							/>
							<video
								loop
								autoPlay
								preload='auto'
								muted={true}
								playsInline
								controls={false}
							>
								<source
									src='/about-video.mp4'
									type='video/mp4'
								/>
							</video>
						</div>
						<div className={classes.about__contentHeadReputation}>
							{textReputation.map((rep, index) => (
								<div
									className={classes.about__contentHeadReputationItem}
									key={index}
								>
									<p>
										<strong>{rep.numbers}</strong>
									</p>
									<p>{rep.text}</p>
								</div>
							))}
						</div>
					</div>
					<div className={classes.about__contentProjects}>
						<div className={classes.about__contentProjectsMobile}>
							<h6 className={classes.about__contentProjectsMobileTitle}>
								Более {projects.length} крутых клиентов
							</h6>
							<p className={classes.about__contentProjectsMobileText}>
								Доверительные отношения, проверенные временем.
							</p>
							<Button className={classes.about__contentProjectsButton}>
								<span onClick={() => router.push('/reviews')}>
									смотреть все отзывы
								</span>
							</Button>
						</div>

						{projects.length > 0 &&
							projects.map((project, index) => (
								<div
									key={index}
									className={classes.about__contentProjectsItem}
								>
									<div className={classes.about__contentProjectsItemLogo}>
										<Image
											src={project.image}
											alt={project.name}
											width={260}
											height={130}
										/>
									</div>
									<div className={classes.about__contentProjectsItemContent}>
										<h6 className={classes.about__contentProjectsItemTitle}>
											{project.name}
										</h6>
										<p className={classes.about__contentProjectsItemText}>
											{project.text}
										</p>
										<span className={classes.about__contentProjectsItemMore}>
											Смотреть проект
										</span>
									</div>
									<Link
										href={project.href}
										className={classes.about__contentProjectsItemLink}
										target='_blank'
									></Link>
								</div>
							))}
					</div>
				</div>
			</Container>
		</section>
	)
}
