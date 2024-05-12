'use client'

import type { ImageLoader } from 'next/image'

export function normalizeUnsplashUrl(src: string) {
	const unsplashBaseUrl = process.env.NEXT_PUBLIC_URL

	if (src.slice(0, 4) === 'http') {
		return new URL(src)
	} else {
		return new URL(`${unsplashBaseUrl}/${src[0] === '/' ? src.slice(1) : src}`)
	}
}

export const unsplashLoader: ImageLoader = ({ src, width, quality }) => {
	const url = normalizeUnsplashUrl(src)
	url.searchParams.set('width', width.toString())
	url.searchParams.set('quality', (quality || 75).toString())
	url.searchParams.set('format', 'auto')

	return url.href
}
