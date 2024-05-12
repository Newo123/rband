import { TypePrinciplesPerson } from '@/store/principles.store'

import classes from '../styles.module.scss'

export function PersonAbout({
	aboutName,
	aboutText,
	educations
}: Omit<TypePrinciplesPerson, 'statistics' | 'images'>) {
	return (
		<div className={classes.principles__personAbout}>
			{aboutName.name && (
				<h6 className={classes.principles__personAboutName}>
					{aboutName.name}
					<span>{aboutName.job}</span>
				</h6>
			)}

			{educations.length > 0 && (
				<div className={classes.principles__personStatisticAbout}>
					{educations.map((education, i) => (
						<p key={i}>{education}</p>
					))}
				</div>
			)}
			{aboutText.length > 0 && (
				<div className={classes.principles__personAboutText}>
					{aboutText.map((about, i) => (
						<p key={i}>{about}</p>
					))}
				</div>
			)}
		</div>
	)
}
