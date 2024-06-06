'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '../ui/button/Button'

import classes from './About.module.scss'
import { IAboutPartners } from './about.types'

export function AboutPartners({ projects, reviews }: IAboutPartners) {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<div className={classes.about__contentProjects}>
			<div
				className={cn(
					classes.about__contentProjectsMobile,
					pathname === '/about' && classes.about__contentProjectsMobile_centered
				)}
			>
				<h6 className={classes.about__contentProjectsMobileTitle}>
					{reviews.title}
				</h6>
				<p className={classes.about__contentProjectsMobileText}>
					{reviews.text}
				</p>
				<Button className={classes.about__contentProjectsButton}>
					<span onClick={() => router.push('/reviews')}>
						смотреть все отзывы
					</span>
				</Button>
			</div>

			{projects.length > 0 &&
				projects.map((project, index) => (
					<div
						key={index}
						className={classes.about__contentProjectsItem}
					>
						<div className={classes.about__contentProjectsItemLogo}>
							<Image
								src={project.image}
								alt={project.name}
								width={260}
								height={130}
							/>
						</div>
						<div className={classes.about__contentProjectsItemContent}>
							<h6 className={classes.about__contentProjectsItemTitle}>
								{project.name}
							</h6>
							<p className={classes.about__contentProjectsItemText}>
								{project.text}
							</p>
							<span className={classes.about__contentProjectsItemMore}>
								Смотреть проект
							</span>
						</div>
						<Link
							href={project.href}
							className={classes.about__contentProjectsItemLink}
							target='_blank'
						></Link>
					</div>
				))}
		</div>
	)
}
