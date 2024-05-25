import { MetadataRoute } from 'next/types'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/'
		},
		sitemap: 'https://acme.com/sitemap.xml'
	}
}
