import VictoriaImage from '/public/victoriaMobile.png'
import Image from 'next/image'

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
	return (
		<div className={classes.principles__person}>
			<div className={classes.principles__personImg}>
				<Image
					src={VictoriaImage}
					alt='victoria'
					fill
					sizes='100vw'
					// quality={75}
					// loader={({ src, width, quality }) => {
					// 	return window.innerWidth <= 992
					// 		? (src = images.mobile)
					// 		: (src = images.desktop)
					// }}
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
