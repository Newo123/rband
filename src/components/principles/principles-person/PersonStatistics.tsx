import { TypePrinciplesPerson } from '@/store/principles.store'

import classes from '../styles.module.scss'

export function PersonStatistics({
	statistics,
	educations
}: Omit<TypePrinciplesPerson, 'images' | 'aboutName' | 'aboutText'>) {
	return (
		<div className={classes.principles__personStatistic}>
			{statistics.length && (
				<ul className={classes.principles__personStatisticList}>
					{statistics.map((statistic, index) => (
						<li
							className={classes.principles__personStatisticItem}
							key={index}
						>
							<b>{statistic.bigText}</b>
							{statistic.text}
						</li>
					))}
				</ul>
			)}

			{educations.length > 0 && (
				<div className={classes.principles__personStatisticAbout}>
					{educations.map((education, index) => (
						<p key={index}>{education}</p>
					))}
				</div>
			)}
		</div>
	)
}
