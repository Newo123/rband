import Image from 'next/image'

import classes from './styles.module.scss'

interface IRatingItem {
	image: string
	title: string
	text: string
}

export function RatingItem({ image, text, title }: IRatingItem) {
	return (
		<div className={classes.ratingItem}>
			<div className={classes.ratingItem__img}>
				<Image
					src={image}
					alt={title}
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className={classes.ratingItem__content}>
				<div className={classes.ratingItem__contentTitle}>{title}</div>
				<div className={classes.ratingItem__contentText}>{text}</div>
			</div>
		</div>
	)
}
