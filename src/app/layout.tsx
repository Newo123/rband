import cn from 'clsx'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Intro from 'next/font/local'
import { ReactNode } from 'react'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Localization } from '@/components/localization/Localization'
import { Modal } from '@/components/ui/modal/Modal'

import SmoothScroll from '@/providers/SmoothScroll'
import { Providers } from '@/providers/providers'

import { ILang } from '@/types/lang.types'

import '@/styles/globals.scss'

const intro = Intro({
	src: [
		{
			path: '../fonts/IntroBlackCaps.ttf'
		},
		{
			path: '../fonts/IntroBlackCaps.woff'
		},
		{
			path: '../fonts/IntroBlackCaps.woff2'
		}
	],
	variable: '--font-intro',
	style: 'normal',
	weight: '900'
})
const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-montserrat'
})

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
			lang={params.lang}
			className={cn(montserrat.className, montserrat.variable, intro.variable)}
		>
			<body>
				<Providers>
					<SmoothScroll>
						<Header />
						<main>{children}</main>
						<Footer />
						<Modal id='country'>
							<Localization />
						</Modal>
					</SmoothScroll>
				</Providers>
			</body>
		</html>
	)
}
