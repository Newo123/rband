import Image from 'next/image'

import classes from './HorizontalSection.module.scss'
import { TypeHorizontalSectionPerson } from './horizontalSection.types'

const HorizontalSectionPerson = ({
	about,
	image,
	job,
	name
}: TypeHorizontalSectionPerson) => {
	return (
		<div className={classes.section__card}>
			<div className={classes.section__cardImage}>
				<Image
					src={image}
					alt={name}
					width={361}
					height={361}
				/>
			</div>
			<h6 className={classes.section__cardName}>{name}</h6>
			<p className={classes.section__cardJob}>{job}</p>
			<p className={classes.section__cardAbout}>{about}</p>
		</div>
	)
}

export { HorizontalSectionPerson }
