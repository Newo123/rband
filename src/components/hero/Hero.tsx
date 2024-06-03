'use client'

import cn from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import { Container } from '../ui/container/Container'

import classes from './Hero.module.scss'
import { HeroProjects } from './HeroProjects'
import { HeroReviews } from './HeroReviews'
import { IHero } from './hero.types'

const MContainer = motion(Container)

export function Hero({ title, text, inners, reviews, projects }: IHero) {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start']
	})
	const scale = useTransform(scrollYProgress, [0, 1], ['1', '0.4'])
	const opacity = useTransform(scrollYProgress, [0, 1], ['1', '0'])

	return (
		<section className={classes.hero}>
			<motion.div style={{ scale, opacity }}>
				<MContainer
					variant='xl'
					className={classes.hero__container}
				>
					<div className={classes.hero__content}>
						<h1 className={cn(classes.hero__title, 'site-title-2')}>{title}</h1>
						<p className={classes.hero__text}>{text}</p>
						{inners && inners.length > 0 && (
							<div className={classes.hero__inners}>
								{inners.map((inner, index) => (
									<Link
										href={inner.href}
										key={index}
										className={classes.hero__innersLink}
									>
										<span>{inner.text}</span>
									</Link>
								))}
							</div>
						)}
					</div>
					{reviews && reviews.length > 0 && <HeroReviews {...reviews} />}
					{projects && <HeroProjects {...projects} />}
				</MContainer>
			</motion.div>
		</section>
	)
}
