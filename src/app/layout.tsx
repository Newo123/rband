import { GoogleAnalytics } from '@next/third-parties/google'
import cn from 'clsx'
import type { Metadata } from 'next/types'
import { ReactNode } from 'react'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

import { Providers } from '@/providers/providers'

import { ILang } from '@/types/lang.types'

import { intro, montserrat } from '@/utils/fonts'

import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: 'RBAND',
	description: 'RBAND Home page',
	icons: '/favicon.png'
}

type Props = {
	children: ReactNode
	params: ILang
}

export default function RootLayout({ children, params }: Readonly<Props>) {
	return (
		<html
			lang={params.lang ? params.lang : 'ru'}
			className={cn(montserrat.className, montserrat.variable, intro.variable)}
		>
			<body>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
			<GoogleAnalytics gaId='UA-138430986-1' />
		</html>
	)
}
