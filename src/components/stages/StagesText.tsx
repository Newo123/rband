'use client'

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import classes from './styles.module.scss'

export function StagesText({ text }: { text: string }) {
	const textRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: textRef,
		offset: ['start 0.8', 'start 0.25']
	})

	const words = text.toString().split(' ')

	return (
		<p
			className={classes.stages__descriptionText}
			ref={textRef}
		>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length
				return (
					<Word
						key={i}
						range={[start, end]}
						progress={scrollYProgress}
					>
						{word + ' '}
					</Word>
				)
			})}
		</p>
	)
}

interface IWord {
	children: string
	range: Array<number>
	progress: MotionValue<number>
}

const Word = ({ children, progress, range }: IWord) => {
	const maxWidth = useTransform(progress, range, ['100%', '0%'])
	return (
		<span className={classes.word}>
			<span dangerouslySetInnerHTML={{ __html: children }} />
			<motion.span
				className={classes.word__shadow}
				style={{ maxWidth: maxWidth }}
			></motion.span>
		</span>
	)
}
