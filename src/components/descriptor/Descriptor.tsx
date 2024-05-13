import DescriptorImg from '/public/descriptor.jpg'
import { useGSAP } from '@gsap/react'
import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { Container } from '@/components/ui/container/Container'

import classes from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger, gsap, useGSAP)

export function Descriptor() {
	const [scroll, setScroll] = useState<number>(0)
	const [isPlay, setIsPlay] = useState(false)

	const quantityRef = useRef(null)
	const contentRef = useRef(null)
	const backgroundRef = useRef(null)
	const priceRef = useRef(null)
	const videoRef = useRef(null)

	// useGSAP(() => {
	// 	ScrollTrigger.create({
	// 		trigger: '#descriptor',
	// 		start: 'top bottom',
	// 		end: 'bottom top',
	// 		onUpdate: self => {
	// 			setScroll(self.progress * 50)
	// 		},
	// 		markers: true
	// 	})
	// })

	useGSAP(() => {
		// const tl = gsap.timeline()
		gsap.to(quantityRef.current, {
			transform: 'none',
			scale: 1,
			duration: 0.7,
			delay: 0.3
		})
		gsap.to(contentRef.current, {
			transform: 'none',
			scale: 1,
			duration: 0.7,
			delay: 0.3
		})

		gsap.to(backgroundRef.current, {
			scale: 1,
			duration: 0.7,
			delay: 0.3
		})
		gsap.to(priceRef.current, {
			opacity: 1,
			delay: 0.4
		})
		setIsPlay(true)
	})

	// useEffect(() => {
	// 	setScroll(scroll)
	// 	console.log(scroll)
	// }, [scroll])
	return (
		<section
			className={cn(classes.descriptor)}
			id='descriptor'
		>
			<Container
				variant='lg'
				className={classes.descriptor__container}
			>
				<div
					className={classes.descriptor__actions}
					ref={backgroundRef}
				>
					<div className={classes.descriptor__actionsImage}>
						<Image
							src={DescriptorImg}
							alt='descriptor'
							sizes='100vw'
						/>
					</div>
					<div className={classes.descriptor__actionsVideo}>
						<video
							preload='auto'
							controls={false}
							autoPlay={isPlay}
							loop
							playsInline
							muted
							poster={DescriptorImg.src}
						>
							<source
								src='/descriptor.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
				<div
					className={classes.descriptor__content}
					ref={contentRef}
				>
					<p className={classes.descriptor__contentRegion}>В екатеринбурге</p>
					<h1 className={cn('site-title-1', classes.descriptor__contentTitle)}>
						СОЗДАЕМ сайты для бизнеса
					</h1>
					<p className={classes.descriptor__contentText}>
						создадим сайт для бизнеса с презентацией услуг и целевыми действиями
						для заявок. Решим задачи имиджа компании.
					</p>
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
