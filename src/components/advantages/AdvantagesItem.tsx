'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { IAdvantage, IProps } from './advantages.types'
import classes from './styles.module.scss'

export function AdvantagesItem({
	advantage,
	setIsActive,
	isHome
}: Omit<IProps, 'advantages'> & { advantage: IAdvantage; isHome: boolean }) {
	const itemRef = useRef(null)
	const { alt, blocks, id, image, isActive } = advantage
	useGSAP(
		() => {
			ScrollTrigger.create({
				trigger: itemRef.current,
				start: 'top 50%',
				end: 'bottom 50%',
				onToggle: self => {
					if (self.isActive) {
						setIsActive(id)
					} else {
						setIsActive('')
					}
				}
			})
		},
		{ scope: itemRef, dependencies: [setIsActive] }
	)

	return (
		<div
			className={classes.advantages__trigger}
			ref={itemRef}
		>
			<div
				className={cn(
					classes.advantages__item,
					isActive ? classes.advantages__item_active : '',
					classes.advantages__item_home
				)}
			>
				<div
					className={cn(
						classes.advantages__itemImage,
						isHome && classes.advantages__itemImage_home
					)}
					// style={{ aspectRatio: '1.4' }}
				>
					{isHome && (
						<span className={classes.advantages__itemImageCount}>
							{Number(advantage.id) < 9 ? '0' + advantage.id : advantage.id}
						</span>
					)}
					<Image
						src={image}
						alt={alt}
						sizes='100vw'
						width={900}
						height={600}
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
								className={cn(
									classes.advantages__itemText,
									isHome ? classes.advantages__itemText_home : ''
								)}
								key={id + index}
							>
								{t}
							</p>
						))}
						{block.labels && block.labels.length > 0 && (
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
						)}

						{block.links && block.links.length > 0 && (
							<div className={classes.advantages__itemLinks}>
								{block.links.map((link, index) => (
									<Link
										href={link.href}
										key={index}
										className={classes.advantages__itemLink}
									>
										<span></span>
										{link.text}
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
