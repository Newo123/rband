'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { IAdvantage } from '@/store/advantages.store'

import classes from './styles.module.scss'

type TypeProps = IAdvantage & { setActive: (id: string) => void }

export function AdvantagesItem({
	blocks,
	id,
	image,
	alt,
	setActive
}: TypeProps) {
	const itemRef = useRef(null)
	const [isActive, setIsActive] = useState<boolean>(false)

	useGSAP(
		() => {
			setTimeout(() => {}, 200)
			ScrollTrigger.create({
				trigger: itemRef.current,
				start: 'top 50%',
				end: 'bottom 50%',
				onToggle: self => {
					setIsActive(self.isActive)
					setActive(id)
				}
			})
		},
		{ scope: itemRef }
	)

	return (
		<div
			className={classes.advantages__trigger}
			ref={itemRef}
		>
			<div
				className={cn(
					classes.advantages__item,
					isActive && classes.advantages__item_active
				)}
			>
				<div
					className={classes.advantages__itemImage}
					style={{ aspectRatio: '1.4' }}
				>
					<Image
						src={image}
						alt={alt}
						sizes='100vw'
						fill
					/>
				</div>
				{blocks.map(block => (
					<div
						className={classes.advantages__itemContent}
						key={block.title}
					>
						<h6 className={cn(classes.advantages__itemTitle, 'site-title-6')}>
							{block.title}
						</h6>
						{block.text.map((t, index) => (
							<p
								className={classes.advantages__itemText}
								key={id + index}
							>
								{t}
							</p>
						))}
						<div className={classes.advantages__itemLabels}>
							{block.labels?.map((label, index) => (
								<div
									className={classes.advantages__itemLabel}
									key={id + index}
								>
									<span></span>
									{label}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
