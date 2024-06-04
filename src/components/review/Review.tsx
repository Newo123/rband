'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Bullet } from '../ui/bullet/Bullet'
import { Container } from '../ui/container/Container'
import { Form } from '../ui/form/Form'
import { LightBox } from '../ui/lightbox/LightBox'

import classes from './Review.module.scss'

interface IReview {
	bulletTitle: string
	title: string
	text: string
	project: string
	author: string
	certificate?: string
}

export function Review({
	bulletTitle,
	author,
	project,
	text,
	title,
	certificate
}: IReview) {
	const [state, setState] = useState(false)

	useEffect(() => {
		if (state === true) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'scroll'
		}
		console.log(document.body)
	}, [state])
	return (
		<section className={classes.review}>
			<Container
				variant='xl'
				className={classes.review__container}
			>
				<Bullet
					className={classes.review__bullet}
					title={bulletTitle}
				>
					<Form />
				</Bullet>
				<div className={classes.review__content}>
					<div className={classes.review__contentLeft}>
						<h3 className={classes.review__contentTitle}>{title}</h3>
						<p className={classes.review__contentProject}>{project}</p>
						<p className={classes.review__contentText}>{text}</p>
						<p className={classes.review__contentAuthor}>{author}</p>
					</div>
					{certificate && (
						<div
							className={classes.review__contentImage}
							onClick={() => setState(true)}
						>
							<Image
								src={certificate}
								alt={title}
								width={320}
								height={426}
							/>
							<div className={classes.review__contentImageButton}>
								<Icon icon='bitcoin-icons:search-filled' />
							</div>
						</div>
					)}
				</div>
			</Container>
			{state && (
				<LightBox
					image={certificate ? certificate : ''}
					title={title}
					state={state}
					setState={setState}
				/>
			)}
		</section>
	)
}
