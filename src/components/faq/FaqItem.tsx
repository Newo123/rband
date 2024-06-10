'use client'

import { Icon } from '@iconify/react'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

import { TypeFaqItem } from '@/store/faq.store'

import { Typography } from '../typography/Typography'
import { TypographyContainer } from '../typography/TypographyContainer'

import classes from './styles.module.scss'

const variants = {
	active: {
		opacity: 1,
		y: 0
	},
	inactive: {
		opacity: 1,
		y: 0
	}
}

export const FaqItem = ({ title, typography }: TypeFaqItem) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<motion.div
			initial={{ opacity: 1, y: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={cn(classes.faqItem, isOpen && classes.faqItem_active)}
		>
			<div
				className={classes.faqItem__head}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={classes.faqItem__title}>{title}</div>
				<div className={classes.faqItem__close}>
					<Icon icon='ph:plus' />
				</div>
			</div>
			<div className={classes.faqItem__body}>
				<Typography>
					<TypographyContainer>
						{ReactHtmlParser(typography)}
					</TypographyContainer>
				</Typography>
			</div>
		</motion.div>
	)
}
