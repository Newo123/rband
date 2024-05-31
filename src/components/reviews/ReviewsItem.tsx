import Image from 'next/image'
import Link from 'next/link'

import classes from './Reviews.module.scss'
import { IReviews } from './reviews.types'

export function ReviewsItem({ author, image, links, text, title }: IReviews) {
	return (
		<div className={classes.reviews__item}>
			<div className={classes.reviews__itemImage}>
				<Image
					src={image}
					alt={title}
					width={500}
					height={338}
				/>
			</div>
			<div className={classes.reviews__itemContent}>
				<h6 className={classes.reviews__itemTitle}>{title}</h6>
				<p className={classes.reviews__itemText}>{text}</p>
				<p className={classes.reviews__itemAuthor}>{author}</p>
				{links.length > 0 && (
					<div className={classes.reviews__itemLinks}>
						<span>Смотреть</span>
						<div className={classes.reviews__itemLinksBox}>
							{links.map((link, index) => (
								<>
									{index > 0 && <span>|</span>}

									<Link
										href={link.href}
										key={index}
									>
										{link.text}
									</Link>
								</>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
