import { About } from '@/components/about/About'
import { Advantages } from '@/components/advantages/Advantages'
import { advantagesDataHome } from '@/components/advantages/advantages.data'
import { Descriptor } from '@/components/descriptor/Descriptor'
import { Motivations } from '@/components/motivations/Motivations'
import { Projects } from '@/components/our-projects/Projects'
import { projects } from '@/components/our-projects/projects.data'
import { Partners } from '@/components/partners/Partners'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'
import { Useful } from '@/components/useful/Useful'

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

export function Home() {
	return (
		<>
			<Descriptor />

			<PageWrapper>
				<Partners {...partners} />
				<Advantages advantages={advantagesDataHome} />
				<Projects
					title='Наши проекты'
					projects={projects}
				/>
				<About />
				<Useful />
				<Motivations />
			</PageWrapper>
		</>
	)
}
