import Image from 'next/image'

import classes from './Hero.module.scss'
import { TypeReview } from './hero.types'

export function HeroReviews(reviews: Array<TypeReview>) {
	return (
		<button className={classes.hero__reviews}>
			<div className={classes.hero__reviewsText}>
				<p>Смотреть отзывы</p>
				<span>на доверительных сервисах</span>
			</div>
			<div className={classes.hero__reviewsIcons}>
				{Object.values(reviews).map((review, index) => (
					<div
						className={classes.hero__reviewsIconsIcon}
						key={index}
					>
						<Image
							src={review.icon}
							alt={review.alt}
							width={25}
							height={25}
						/>
						<span>{review.rating}</span>
					</div>
				))}
			</div>
		</button>
	)
}
