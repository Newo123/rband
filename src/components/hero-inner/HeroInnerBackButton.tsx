'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'

import classes from './HeroInner.module.scss'

export function HeroInnerBackButton() {
	const router = useRouter()
	return (
		<button
			onClick={() => router.back()}
			className={classes.heroInner__contentBackButton}
		>
			<Icon icon='ic:sharp-chevron-left' />
		</button>
	)
}
