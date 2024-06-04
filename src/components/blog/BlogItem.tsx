'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import classes from './Blog.module.scss'
import { IBlog } from './blog.types'

const MLink = motion(Link)
const animation = {
	inactive: {
		transform: 'translateY(50%)',
		opacity: 0
	},
	active: {
		transform: 'translateY(0%)',
		opacity: 1
	}
}

export function BlogItem({ href, image, title }: IBlog) {
	return (
		<MLink
			href={href}
			className={classes.blog__item}
			initial='inactive'
			whileInView='active'
			variants={animation}
			transition={{ duration: 0.75 }}
			viewport={{ once: true }}
		>
			<div className={classes.blog__itemPictures}>
				<Image
					src={image}
					alt={title}
					fill
				/>
			</div>
			<h6 className={classes.blog__itemTitle}>{title}</h6>
		</MLink>
	)
}
