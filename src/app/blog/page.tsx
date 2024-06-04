import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE
}

export default function Page() {
	notFound()
}
