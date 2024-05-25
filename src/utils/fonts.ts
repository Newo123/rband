import { Montserrat } from 'next/font/google'
import Intro from 'next/font/local'

export const intro = Intro({
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
export const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-montserrat'
})
