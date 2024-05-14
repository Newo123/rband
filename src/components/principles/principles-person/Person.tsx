import VictoriaImage from '/public/victoriaMobile.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { TypePrinciplesPerson } from '@/store/principles.store'

import classes from '../styles.module.scss'

import { PersonAbout } from './PersonAbout'
import { PersonStatistics } from './PersonStatistics'

export function Person({
	images,
	aboutName,
	aboutText,
	educations,
	statistics
}: TypePrinciplesPerson) {
	const personRef = useRef(null)
	useGSAP(() => {
		gsap.to(personRef.current, {
			scrollTrigger: {
				trigger: personRef.current
			},
			opacity: 1,
			delay: 0.3
		})
	})
	return (
		<div
			className={classes.principles__person}
			ref={personRef}
			style={{ opacity: 0 }}
		>
			<div className={classes.principles__personImg}>
				<Image
					src={VictoriaImage}
					alt='victoria'
					fill
					sizes='100vw'
				/>
			</div>
			<PersonStatistics
				educations={educations}
				statistics={statistics}
			/>
			<PersonAbout
				aboutName={aboutName}
				aboutText={aboutText}
				educations={educations}
			/>
		</div>
	)
}
