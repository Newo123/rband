'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import router from 'next/router'

import { Button } from '../ui/button/Button'

import classes from './About.module.scss'
import { IAboutSticky } from './about.types'

export function AboutSticky({ info }: IAboutSticky) {
	const pathname = usePathname()
	return (
		<div className={classes.about__info}>
			{info.length > 0 &&
				info.map(
					(about, index) =>
						about.texts.length > 0 && (
							<div
								key={index}
								className={classes.about__block}
							>
								{about.texts.map((text, i) => (
									<p
										key={i}
										className={cn(
											classes.about__blockText,
											pathname === '/about' && 'text-center sm:text-left'
										)}
									>
										{text}
									</p>
								))}
								<Button
									className={cn(
										classes.about__blockButton,
										pathname === '/about' && 'mx-auto lg:mx-0',
										pathname === '/' && 'hidden lg:block'
									)}
								>
									<span onClick={() => router.push(about.button.href)}>
										{about.button.text}
									</span>
								</Button>
							</div>
						)
				)}
		</div>
	)
}
