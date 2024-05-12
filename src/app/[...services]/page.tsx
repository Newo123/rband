import { Metadata } from 'next'

import { Service } from './Service'

export const metadata: Metadata = {
	title: 'Services',
	description: 'RBAND Services',
	openGraph: {
		title: 'Services',
		description: 'RBAND Services'
	}
}

export default function ServicesPage() {
	return <Service />
}
