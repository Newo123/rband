import cn from 'clsx'
import Link from 'next/link'

import { Container } from '../ui/container/Container'

import classes from './Hero.module.scss'
import { HeroReviews } from './HeroReviews'
import { IHero } from './hero.types'

export function Hero({ title, text, inners, reviews }: IHero) {
	return (
		<section className={classes.hero}>
			<Container
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
				{/* <div className={classes.hero__projects}></div> */}
			</Container>
		</section>
	)
}
