import DescriptorImg from '/public/descriptor.jpg'
import cn from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useState } from 'react'

import { Container } from '@/components/ui/container/Container'

import classes from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

export function Descriptor() {
	const [scroll, setScroll] = useState<number>(0)

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
				<div className={classes.descriptor__actions}>
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
							autoPlay
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
				<div className={classes.descriptor__content}>
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
					<div className={classes.descriptor__rightQuantity}>
						<div className={classes.descriptor__rightQuantityNumber}>+ 150</div>
						<div className={classes.descriptor__rightQuantityText}>
							успешно запущенных сайтов и сервисов
						</div>
					</div>
					<div className={classes.descriptor__rightPrice}>
						Старт от
						<span>200 000 ₽</span>
						<span>30 раб. дней</span>
					</div>
				</div>
			</Container>
		</section>
	)
}
