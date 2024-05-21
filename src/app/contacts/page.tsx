import type { Metadata } from 'next'

import { Contacts } from './Contacts'

export const metadata: Metadata = {
	title: ''
}

export default function Page() {
	return <Contacts />
}
