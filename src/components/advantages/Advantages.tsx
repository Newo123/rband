'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Container } from '@/components/ui/container/Container'

import { AdvantagesImages } from './AdvantagesImages'
import { AdvantagesList } from './AdvantagesList'
import { IAdvantage, IProps } from './advantages.types'
import classes from './styles.module.scss'

export function Advantages({
	advantages: advantagesProp
}: Omit<IProps, 'setIsActive'>) {
	const [advantages, setAdvantages] = useState<Array<IAdvantage>>([])
	const [isActive, setIsActive] = useState('')

	const pathname = usePathname()
	const [isHome, setIsHome] = useState<boolean>(false)

	useEffect(() => {
		if (pathname === '/') {
			setIsHome(true)
		}
		setAdvantages(advantagesProp)
	}, [])

	useEffect(() => {
		setAdvantages(prev => {
			const newAdvantages = prev.map(advantage => {
				if (advantage.id === isActive) {
					advantage.isActive = true
				} else {
					advantage.isActive = false
				}
				return advantage
			})
			return newAdvantages
		})
	}, [isActive])
	return (
		<section className={classes.advantages}>
			<Container
				variant='xl'
				className={classes.advantages__container}
			>
				<AdvantagesImages
					advantages={advantages}
					setIsActive={setIsActive}
					isHome={isHome}
				/>
				<AdvantagesList
					advantages={advantages}
					setIsActive={setIsActive}
					isHome={isHome}
				/>
			</Container>
		</section>
	)
}
