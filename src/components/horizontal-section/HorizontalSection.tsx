'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { Container } from '../ui/container/Container'

import classes from './HorizontalSection.module.scss'
import { HorizontalSectionPerson } from './HorizontalSectionPerson'
import { TypeHorizontalSectionPerson } from './horizontalSection.types'

interface IHorizontalSection {}

const cards: TypeHorizontalSectionPerson[] = [
	{
		about:
			'Выпускница академий дизайна Праги и Барселоны. Практика в Европе и США.',
		image: '/about/victoria.png',
		job: 'Арт-директор',
		name: 'Виктория Денисюк'
	},
	{
		about:
			'Два профильных образования в сфере IT и разработки ПО. 17 лет в индустрии.',
		image: '/about/andrey.png',
		job: 'ведущий разработчик',
		name: 'Андрей Передерий'
	}
]

export function HorizontalSection({}: IHorizontalSection) {
	const targetRef = useRef<HTMLDivElement | null>(null)
	const textRef = useRef<HTMLDivElement | null>(null)
	const [width, setWidth] = useState<number>(0)
	const { scrollYProgress } = useScroll({
		target: targetRef
	})
	const { scrollYProgress: scrollProgress } = useScroll({
		target: textRef,
		offset: ['start end', 'end start']
	})

	const xFirst = useTransform(scrollYProgress, [0, 0.4], ['0%', `-35%`])
	const xSecond = useTransform(scrollYProgress, [0.4, 1], ['0%', '-100%'])
	const opacity = useTransform(scrollYProgress, [0.4, 1], ['1', '0.3'])

	const mobileText = useTransform(scrollProgress, [0, 1], ['-50%', '50%'])

	const handleResize = (e: any) => {
		setWidth(e.target.innerWidth)
	}

	useEffect(() => {
		setWidth(window.innerWidth)
		console.log(width)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<section
			ref={targetRef}
			className={classes.section}
		>
			<div className={classes.section__sticky}>
				<Container
					variant='xl'
					className={classes.section__container}
				>
					<div className={classes.section__wrapper}>
						<motion.div
							ref={textRef}
							className={classes.section__logo}
							style={width > 992 ? { x: xFirst } : { x: mobileText }}
						>
							<svg
								width='2187'
								height='431'
								viewBox='0 0 2187 431'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<motion.path
									style={width > 992 ? { opacity } : { opacity: 1 }}
									d='M359.576 411.535V411.251L359.427 411.01L277.547 278.119C318.822 249.552 339.132 203.131 339.733 154.986V154.973C339.733 117.719 327.184 80.1322 301.82 51.8467C276.441 23.5438 238.284 4.61473 187.208 4.61353C146.003 4.21289 105.324 4.34531 64.2998 4.47885C43.6577 4.54605 22.9281 4.61353 2 4.61353H1V5.61353V427.193V428.193H2H112.04H113.04V427.193V296.299H169.172L241.045 427.673L241.329 428.193H241.922H358.576H359.576V427.193V411.535ZM449.75 425.386V426.386H450.75H653.391C696.908 426.386 730.554 412.306 753.321 389.047C776.083 365.794 787.881 333.457 787.881 297.106C787.881 258.753 770.154 224.448 736.376 206.58C756.998 189.357 770.443 159.598 770.443 133.894C770.443 94.5041 756.672 62.3104 732.999 39.9677C709.332 17.6312 675.85 5.21578 636.554 5.21578H450.75H449.75V6.21578V425.386ZM943.818 428.795H944.46L944.727 428.213L968.512 376.399H1124.78L1149.16 428.221L1149.43 428.795H1150.07H1263.71H1264.71V427.795V412.739V412.518L1264.62 412.317L1073.4 1.57795L1073.14 1H1072.5H1021.99H1021.35L1021.08 1.57469L828.063 412.314L827.968 412.516V412.739V427.795V428.795H828.968H943.818ZM1663 429.711L1663.29 430H1663.7H1696.17H1697.17V429V6.21578V5.21578H1696.17H1586.13H1585.13V6.21578V209.864L1367.34 3.68284L1367.05 3.40903H1366.66H1332.38H1331.38V4.40903V427.795V428.795H1332.38H1442.42H1443.42V427.795V212.775L1663 429.711ZM1816.96 5.21578H1815.96V6.21578V427.795V428.795H1816.96H1977.51C2047.54 428.795 2100.14 402.029 2134.99 361.902C2169.81 321.797 2186.87 268.406 2185.97 215.196C2185.97 163.186 2168.31 110.698 2133.4 71.1996C2098.48 31.6817 2046.34 5.21578 1977.51 5.21578H1816.96ZM186.602 204.563H111.236V102.372H186.602C201.941 102.372 213.073 108.414 220.393 117.652C227.737 126.92 231.301 139.482 231.301 152.564C231.301 165.64 227.59 178.664 220.157 188.394C212.746 198.095 201.609 204.563 186.602 204.563ZM561.789 169.632V101.168H628.737C639.548 101.168 647.525 105.689 652.75 112.448C657.996 119.234 660.503 128.33 660.208 137.476C659.914 145.715 657.123 153.762 651.887 159.734C646.669 165.687 638.978 169.632 628.737 169.632H561.789ZM561.789 328.628V260.766H644.973C665.913 260.766 678.212 278.204 677.048 297.021C676.158 305.305 673.357 313.212 668.272 319.032C663.208 324.829 655.819 328.628 645.574 328.628H561.789ZM1089.02 282.254H1004.86L1046.65 184.012L1089.02 282.254ZM1976.31 327.423H1928V106.588H1976.31C2008.46 106.588 2032.84 120.291 2049.19 140.841C2065.56 161.415 2073.93 188.889 2073.93 216.403C2073.93 244.234 2066.01 272.01 2049.86 292.804C2033.73 313.569 2009.37 327.423 1976.31 327.423Z'
									stroke='white'
									stroke-width='2'
								/>
							</svg>
						</motion.div>
						<motion.div
							className={classes.section__cards}
							style={width > 992 ? { x: xSecond } : { x: 0 }}
						>
							{cards.map((card, index) => (
								<HorizontalSectionPerson
									{...card}
									key={index}
								/>
							))}
						</motion.div>
					</div>
				</Container>
			</div>
		</section>
	)
}
