'use client'

import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Container } from '@/components/ui/container/Container'

import { useScroll } from '@/hooks/useScroll'

import classes from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger, gsap, useGSAP)

export function Descriptor() {
	const [isPlay, setIsPlay] = useState(false)
	const [translateContent, setTranslateContent] = useState(0)
	const [opacityContent, setOpacityContent] = useState(1)
	const [scaleContent, setScaleContent] = useState(1)

	const quantityRef = useRef(null)
	const contentRef = useRef<any>(null)
	const backgroundRef = useRef(null)
	const priceRef = useRef(null)
	const descriptorRef = useRef<any>(null)
	const videoRef = useRef<HTMLVideoElement>(null)
	const actionsRef = useRef(null)
	const { scroll } = useScroll()

	useEffect(() => {
		const translate = scroll / 40
		const opacity = 1 - scroll / 1000
		const scale = 1 - scroll / 2000
		if (translate < 20) {
			setTranslateContent(translate)
		}
		if (opacity >= 0) {
			setOpacityContent(opacity)
		}
		if (scale >= 0) {
			setScaleContent(scale)
		}

		if (
			scroll > descriptorRef.current.clientHeight &&
			!videoRef.current?.paused &&
			isPlay
		) {
			videoRef.current?.pause()
		} else if (
			scroll <= descriptorRef.current.clientHeight &&
			videoRef.current?.paused &&
			isPlay
		) {
			videoRef.current?.play()
		}
	}, [scroll])

	useGSAP(() => {
		const tl = gsap.timeline()
		tl.to(backgroundRef.current, {
			maskSize: '50dvh 50dvh',
			duration: 1
		})
			.to(backgroundRef.current, {
				maskSize: '100vw 100vh',
				delay: 0.5,
				duration: 1
			})
			.to(backgroundRef.current, { maskSize: '100% 100%' })

		gsap.to(actionsRef.current, {
			delay: 1.5,
			scale: 1,
			duration: 1,
			onComplete: () => {
				setIsPlay(true)
				if (videoRef.current?.readyState === 4) {
					videoRef.current?.play()
				}
			}
		})
		gsap.to([quantityRef.current, contentRef.current], {
			transform: 'none',
			scale: 1,
			duration: 1,
			delay: 1.6
		})
		gsap.to(priceRef.current, {
			opacity: 1,
			delay: 2.1,
			duration: 0.3
		})
	})

	return (
		<section
			className={cn(classes.descriptor)}
			id='descriptor'
			ref={descriptorRef}
		>
			<Container
				variant='xl'
				className={classes.descriptor__container}
			>
				<div
					className={classes.descriptor__actionsTrigger}
					ref={backgroundRef}
				>
					<div
						className={classes.descriptor__actions}
						ref={actionsRef}
					>
						<div className={classes.descriptor__actionsImage}>
							<Image
								src='/descriptor.jpeg'
								alt='descriptor'
								sizes='100vw'
								fill
								priority
							/>
						</div>
						<div className={classes.descriptor__actionsVideo}>
							<video
								ref={videoRef}
								preload='auto'
								controls={false}
								autoPlay={isPlay}
								loop
								playsInline
								muted
							>
								<source
									src='/descriptor.mp4'
									type='video/mp4'
								/>
							</video>
						</div>
					</div>
				</div>

				<div
					style={{
						transform: `translateY(-${translateContent}%) scale(${scaleContent})`,
						position: 'relative',
						zIndex: '2',
						opacity: opacityContent,
						height: '100%'
					}}
				>
					<div
						className={classes.descriptor__content}
						ref={contentRef}
					>
						<h1
							className={cn('site-title-1', classes.descriptor__contentTitle)}
						>
							СОЗДАЕМ сайты для бизнеса
							<span className={classes.descriptor__contentRegion}>
								В екатеринбурге
							</span>
						</h1>
						<p className={classes.descriptor__contentText}>
							создадим сайт для бизнеса с презентацией услуг и целевыми
							действиями для заявок. Решим задачи имиджа компании.
						</p>
					</div>
				</div>

				<div className={classes.descriptor__right}>
					<div
						className={classes.descriptor__rightQuantity}
						ref={quantityRef}
					>
						<div className={classes.descriptor__rightQuantityNumber}>+ 150</div>
						<div className={classes.descriptor__rightQuantityText}>
							успешно запущенных сайтов и сервисов
						</div>
					</div>
					<div
						className={classes.descriptor__rightPrice}
						ref={priceRef}
						style={
							isPlay
								? {
										transform: `translateY(-${translateContent}%) scale(${scaleContent})`,
										opacity: opacityContent
									}
								: {}
						}
					>
						Старт от
						<span>200 000 ₽</span>
						<span>30 раб. дней</span>
					</div>
				</div>
			</Container>
		</section>
	)
}
