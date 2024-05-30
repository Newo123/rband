import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as TypeSwiper } from 'swiper/types'

import { useReputation } from '@/store/reputation.store'

import { TextWrap } from '../text-wrap/TextWrap'
import { Container } from '../ui/container/Container'

import { ReputationSliderLink } from './ReputationSliderLink'
import { RatingItem } from './rating/RatingItem'
import { RatingList } from './rating/RatingList'
import classes from './styles.module.scss'

export function Reputation() {
	const reputations = useReputation(state => state.reputation.reputations)
	const text = useReputation(state => state.reputation.textWrap)
	const [isAutoplay, setIsAutoplay] = useState({})
	const sliderRef = useRef<any>(null)
	const sliderContainerRef = useRef<any>(null)
	const reputationRef = useRef<any>()
	const swiperRef = useRef<any>(null)

	const swiperOptions = {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		className: classes.reputation__slider,
		onSwiper: (instance: TypeSwiper) => (swiperRef.current = instance),
		ref: sliderRef,
		style: { opacity: 0, transform: 'translateY(100%)' },
		enabled: false,
		speed: 500,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
			stopOnLastSlide: false,
			disableOnInteraction: false
		}
	}

	useGSAP(
		() => {
			ScrollTrigger.create({
				trigger: sliderContainerRef.current,
				start: 'top bottom',
				end: 'bottom top',
				animation: gsap.to(sliderRef.current, {
					opacity: 1,
					translateY: 0,
					delay: 1,
					onComplete: () => {
						swiperRef.current.autoplay.start()
					}
				}),
				onEnter: () => {
					swiperRef.current.enabled = true
				}
			})
		},
		{
			scope: sliderContainerRef.current,
			dependencies: [isAutoplay, setIsAutoplay]
		}
	)

	return (
		<section className={classes.reputation}>
			<TextWrap
				images={text}
				variant='reverse'
			/>
			<Container
				variant='xl'
				className={classes.reputation__container}
			>
				{reputations.length > 0 && (
					<RatingList>
						{reputations.map((reputation, index) => (
							<RatingItem
								image={reputation.image}
								text={reputation.text}
								title={reputation.title}
								key={reputation.image}
								index={index}
							/>
						))}
					</RatingList>
				)}
				<div
					className={classes.reputation__sliderWrapper}
					id='reviews-slider'
					ref={sliderContainerRef}
				>
					<Swiper {...swiperOptions}>
						<SwiperSlide className={classes.reputation__sliderSlide}>
							<div className={classes.reputation__sliderSlideContent}>
								<div className={classes.reputation__sliderSlideTitle}>
									Логотипы и интерьер “Battle Bar”. Курск, Россия
								</div>
								<div className={classes.reputation__sliderSlideText}>
									Спасибо команде Виктории за разработку фирменного стиля и
									бренда моего Батл Бара. Изначально я и не предполагал, что
									интереснее не совмещать не совмещаемое, кофейню с пирожными и
									бар с бургерами, а наоборот, разделить и создать между ними
									борьбу. Такая идея пришла экспромтом во время первых
									переговоров с енотами и я понял, что попал творческим ребятам.
									Удачи и хороших вам проектов!
								</div>
								<div className={classes.reputation__sliderSlideAuthor}>
									Денис, владелец &quot;Battle Bar&quot;
								</div>
								<ReputationSliderLink
									link={[{ text: 'Брендинг', href: '/' }]}
								></ReputationSliderLink>
							</div>
							<div className={classes.reputation__sliderSlideImg}>
								<Image
									src='/slider1.jpg'
									alt='slider'
									fill
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className={classes.reputation__sliderSlide}>
							<div className={classes.reputation__sliderSlideContent}>
								<div className={classes.reputation__sliderSlideTitle}>
									Логотипы и интерьер &quot;Battle Bar&quot;. Курск, Россия
								</div>
								<div className={classes.reputation__sliderSlideText}>
									Спасибо команде Виктории за разработку фирменного стиля и
									бренда моего Батл Бара. Изначально я и не предполагал, что
									интереснее не совмещать не совмещаемое, кофейню с пирожными и
									бар с бургерами, а наоборот, разделить и создать между ними
									борьбу. Такая идея пришла экспромтом во время первых
									переговоров с енотами и я понял, что попал творческим ребятам.
									Удачи и хороших вам проектов!
								</div>
								<div className={classes.reputation__sliderSlideAuthor}>
									Денис, владелец &quot;Battle Bar&quot;
								</div>
								<ReputationSliderLink
									link={[{ text: 'Брендинг', href: '/' }]}
								></ReputationSliderLink>
							</div>
							<div className={classes.reputation__sliderSlideImg}>
								<Image
									src='/slider1.jpg'
									alt='slider'
									fill
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide className={classes.reputation__sliderSlide}>
							<div className={classes.reputation__sliderSlideContent}>
								<div className={classes.reputation__sliderSlideTitle}>
									Логотипы и интерьер &quot;Battle Bar&quot;. Курск, Россия
								</div>
								<div className={classes.reputation__sliderSlideText}>
									Спасибо команде Виктории за разработку фирменного стиля и
									бренда моего Батл Бара. Изначально я и не предполагал, что
									интереснее не совмещать не совмещаемое, кофейню с пирожными и
									бар с бургерами, а наоборот, разделить и создать между ними
									борьбу. Такая идея пришла экспромтом во время первых
									переговоров с енотами и я понял, что попал творческим ребятам.
									Удачи и хороших вам проектов!
								</div>
								<div className={classes.reputation__sliderSlideAuthor}>
									Денис, владелец &quot;Battle Bar&quot;
								</div>
								<ReputationSliderLink
									link={[{ text: 'Брендинг', href: '/' }]}
								></ReputationSliderLink>
							</div>
							<div className={classes.reputation__sliderSlideImg}>
								<Image
									src='/slider1.jpg'
									alt='slider'
									fill
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</section>
	)
}
