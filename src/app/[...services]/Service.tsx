'use client'

import { Advantages } from '@/components/advantages/Advantages'
import { advantagesData } from '@/components/advantages/advantages.data'
import { Descriptor } from '@/components/descriptor/Descriptor'
import { Faq } from '@/components/faq/Faq'
import { Projects } from '@/components/our-projects/Projects'
import { projectsServices } from '@/components/our-projects/projects.data'
import { Partners } from '@/components/partners/Partners'
import { Principles } from '@/components/principles/Principles'
import { Reputation } from '@/components/reputation/Reputation'
import { Services } from '@/components/services/Services'
import { Stages } from '@/components/stages/Stages'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

const partners = [
	{
		href: '#',
		image: '/partner1.png'
	},
	{
		href: '#',
		image: '/partner2.png'
	},
	{
		href: '#',
		image: '/partner3.png'
	},
	{
		href: '#',
		image: '/partner4.png'
	},
	{
		href: '#',
		image: '/partner5.png'
	},
	{
		href: '#',
		image: '/partner6.png'
	}
]

export function Service() {
	return (
		<>
			<Descriptor />

			<PageWrapper>
				<Partners {...partners} />
				<Services />
				<Advantages advantages={advantagesData} />
				<Projects
					title='Наши проекты'
					projects={projectsServices}
				/>
				<Stages />
				<Principles />
				<Reputation />
				<Faq />
			</PageWrapper>
		</>
	)
}
