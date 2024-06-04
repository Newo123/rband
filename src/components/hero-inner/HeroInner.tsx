'use client'

import { motion } from 'framer-motion'

import { useParallax } from '@/hooks/useParallax'

import { Container } from '../ui/container/Container'

import classes from './HeroInner.module.scss'
import { HeroInnerBackButton } from './HeroInnerBackButton'

interface IHeroInnerInfo {
	title: string
	text: string
}

interface IHeroInner {
	title: string
	text: string
	innerInfo?: Array<IHeroInnerInfo>
}

export function HeroInner({ innerInfo, text, title }: IHeroInner) {
	const { opacity, scale } = useParallax()
	return (
		<section className={classes.heroInner}>
			<motion.div style={{ opacity, scale }}>
				<Container
					className={classes.heroInner__container}
					variant='xl'
				>
					<div className={classes.heroInner__content}>
						<HeroInnerBackButton />
						<h1 className={classes.heroInner__contentTitle}>{title}</h1>
						<p className={classes.heroInner__contentText}>{text}</p>
					</div>
					{innerInfo && innerInfo?.length > 0 && (
						<div className={classes.heroInner__box}>
							{innerInfo.map((info, index) => (
								<div
									key={index}
									className={classes.heroInner__boxLine}
								>
									<div className={classes.heroInner__boxLineTitle}>
										{info.title}
									</div>
									<div className={classes.heroInner__boxLineText}>
										{info.text}
									</div>
								</div>
							))}
						</div>
					)}
				</Container>
			</motion.div>
		</section>
	)
}
