'use client'

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

import { Tooltip } from '../ui/tooltip/Tooltip'

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
	const [visible, setVisible] = useState<boolean>(false)
	const htmlTagRegex = /<("[^"]*"|'[^']*'|[^'">])*>/
	const reg = new RegExp(htmlTagRegex)

	return (
		<span className={classes.word}>
			{reg.test(children) ? (
				<span
					style={{ position: 'relative' }}
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
				>
					<span
						dangerouslySetInnerHTML={{
							__html: children
						}}
					/>
					{visible && (
						<Tooltip
							link={{ href: '#', text: 'Читать подробнее', target: '_blank' }}
							text='<strong>Принцип KISS</strong> – принцип проектирования, принятый в ВМС США в 1960. Он утверждает, что большинство систем работают лучше, если они не усложняются. Простота должна быть одной из ключевых целей и следует избегать ненужного усложнения.'
						/>
					)}
				</span>
			) : (
				<span>{children}</span>
			)}
			<motion.span
				className={classes.word__shadow}
				style={{ maxWidth: maxWidth }}
			></motion.span>
		</span>
	)
}
