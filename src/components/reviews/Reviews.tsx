import { Container } from '../ui/container/Container'

import classes from './Reviews.module.scss'
import { ReviewsItem } from './ReviewsItem'
import { IReviews } from './reviews.types'

export function Reviews(review: Array<IReviews>) {
	const reviews = Object.values(review)
	return (
		reviews &&
		reviews.length && (
			<section className={classes.reviews}>
				<Container
					className={classes.reviews__container}
					variant='xl'
				>
					{reviews.map((review, index) => (
						<ReviewsItem
							key={index}
							{...review}
						/>
					))}
				</Container>
			</section>
		)
	)
}
