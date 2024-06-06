import cn from 'clsx'
import Image from 'next/image'

import { Container } from '../ui/container/Container'

import classes from './HeroAbout.module.scss'

interface IHeroAbout {}

const texts = [
	[
		'Наша команда была основана в 2015 году из отраслевых экспертов дизайна, програмирования и маркетинга. Здесь каждый занят своим делом, чтобы результат получился крутым.',
		'Мы убеждены, что успех начинается со взаимопонимания между проектной командой и заказчиком.'
	],
	[
		'Поэтому мы отводим достаточное количество времени на брифинг и выстраиваем работу поэтапно с промежуточным согласованием, чтобы результат был предсказуемым.',
		'Верим в прозрачность и гибкий подход. Готовы к пересмотру стратегии, если это улучшит результат. Дружим с клиентами.'
	]
]

export function HeroAbout({}: IHeroAbout) {
	return (
		<section className={classes.heroAbout}>
			<Container
				variant='xl'
				className={classes.heroAbout__container}
			>
				<div className={classes.heroAbout__content}>
					<h1 className={cn('site-title-1', classes.heroAbout__title)}>
						Мы RBAND
					</h1>
					<p className={classes.heroAbout__text}>
						Наши проекты это: интуитивно понятный дизайн, изучение поведения и
						предпочтений ЦА, бенчмаркетинг и технологичность.
					</p>
				</div>
				{texts.length > 0 && (
					<div className={classes.heroAbout__texts}>
						{texts.map(
							(text, index) =>
								text.length > 0 && (
									<div
										key={index}
										className={classes.heroAbout__textsBox}
									>
										{text.map((t, i) => (
											<p
												key={i}
												className={classes.heroAbout__textsItem}
											>
												{t}
											</p>
										))}
									</div>
								)
						)}
					</div>
				)}
			</Container>
			<div className={classes.heroAbout__pictures}>
				<Image
					src='/about/hero.jpg'
					alt='hero'
					fill
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
						src='/about/video.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
		</section>
	)
}
