import { MetadataRoute } from 'next/types'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://rband-jk22.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: 'https://rband-jk22.vercel.app/contacts',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	]
}
