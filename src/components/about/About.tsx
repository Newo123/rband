import { TextWrap } from '../text-wrap/TextWrap'
import { Container } from '../ui/container/Container'

import classes from './About.module.scss'
import { AboutHead } from './AboutHead'
import { AboutPartners } from './AboutPartners'
import { AboutSticky } from './AboutSticky'
import { IAbout } from './about.types'

export function About({ info, projects, images, head, reviews }: IAbout) {
	return (
		<section className={classes.about}>
			{images && images.length > 0 && (
				<TextWrap
					images={images}
					className={classes.about__textWrap}
				/>
			)}
			<Container
				variant='xl'
				className={classes.about__container}
			>
				<AboutSticky info={info} />
				<div className={classes.about__content}>
					<AboutHead {...head} />
					<AboutPartners
						projects={projects}
						reviews={reviews}
					/>
				</div>
			</Container>
		</section>
	)
}
