'use client'

import cn from 'clsx'

import { TextWrap } from '../text-wrap/TextWrap'
import { Container } from '../ui/container/Container'

import classes from './Motivations.module.scss'
import { MotivationsItem } from './MotivationsItem'
import { IMotivations } from './motivations.types'

export function Motivations({ motivations, textWrap }: IMotivations) {
	return (
		<section className={cn(classes.motivations, classes.motivations_about)}>
			<TextWrap
				images={textWrap}
				variant='reverse'
				className={classes.motivations__textWrap}
			/>
			<Container
				variant='xl'
				className={classes.motivations__container}
			>
				{motivations.length > 0 &&
					motivations.map((motivation, index) => (
						<MotivationsItem
							key={index}
							image={motivation.image}
							title={motivation.title}
							texts={motivation.texts}
						/>
					))}
			</Container>
		</section>
	)
}
