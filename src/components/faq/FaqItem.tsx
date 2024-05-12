import { Icon } from '@iconify/react'
import cn from 'clsx'
import { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

import { TypeFaqItem } from '@/store/faq.store'

import { Typography } from '../typography/Typography'
import { TypographyContainer } from '../typography/TypographyContainer'

import classes from './styles.module.scss'

export function FaqItem({ title, typography }: TypeFaqItem) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className={cn(classes.faqItem, isOpen ? classes.faqItem_active : '')}>
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
		</div>
	)
}
