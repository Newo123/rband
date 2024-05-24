import { About } from '@/components/about/About'
import { Descriptor } from '@/components/descriptor/Descriptor'
import { Projects } from '@/components/our-projects/Projects'
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
				<Projects />
				<About />
				<Useful />
			</PageWrapper>
		</>
	)
}
