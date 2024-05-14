'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

import { useScroll } from '@/hooks/useScroll'

import { Container } from '../ui/container/Container'

import { PartnersItem } from './PartnersItem'
import classes from './styles.module.scss'

export function Partners(partners: Array<{ href: string; image: string }>) {
	const partnersRef = useRef(null)
	const { scroll } = useScroll()
	const [isAnimate, setIsAnimate] = useState(false)

	useGSAP(() => {
		if (scroll <= 0 && !isAnimate) {
			gsap.to(partnersRef.current, {
				translateY: 0,
				opacity: 1,
				delay: 1.3,
				onComplete: () => {
					setIsAnimate(true)
				}
			})
		}
	})

	return (
		<div
			className={classes.partners}
			// ref={partnersRef}
			// style={
			// 	!isAnimate && scroll <= 0
			// 		? {
			// 				transform: 'translateY(100%)',
			// 				opacity: 0
			// 			}
			// 		: {}
			// }
		>
			<div
				className={classes.partners__trigger}
				ref={partnersRef}
				style={
					!isAnimate && scroll <= 0
						? {
								transform: 'translateY(100%)',
								opacity: 0
							}
						: { opacity: 1 }
				}
			>
				<Container
					variant='lg'
					className={classes.partners__container}
				>
					{Object.values(partners)?.map(partner => (
						<PartnersItem
							key={partner.image}
							href={partner.href}
							image={partner.image}
						/>
					))}
				</Container>
			</div>
		</div>
	)
}
