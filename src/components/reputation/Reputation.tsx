import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useReputation } from '@/store/reputation.store'

import { TextWrap } from '../text-wrap/TextWrap'
import { TextWrapItem } from '../text-wrap/TextWrapItem'
import { Container } from '../ui/container/Container'

import { ReputationSliderLink } from './ReputationSliderLink'
import { RatingItem } from './rating/RatingItem'
import { RatingList } from './rating/RatingList'
import classes from './styles.module.scss'

export function Reputation() {
	const reputations = useReputation(state => state.reputation.reputations)
	const text = useReputation(state => state.reputation.textWrap)
	const [isAutoplay, setIsAutoplay] = useState<boolean>(false)
	const sliderRef = useRef<any>(null)
	const sliderContainerRef = useRef<any>(null)
	const reputationRef = useRef<any>()

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: '#reviews-slider',
			start: 'top bottom',
			end: 'bottom top',
			animation: gsap.to(sliderContainerRef.current, {
				opacity: 1,
				translateY: 0
			}),
			onUpdate: self => {
				setIsAutoplay(self.isActive)
			}
		})
	})

	return (
		<section className={classes.reputation}>
			{text.length > 0 && (
				<TextWrap
					id='reputation-text-wrap'
					variant='reverse'
					ref={reputationRef}
				>
					{text.map((t, i) => {
						return (
							<TextWrapItem
								reference={reputationRef}
								image={t.image}
								index={i + 1}
								key={i}
								id='#reputation-text-wrap'
							/>
						)
					})}
				</TextWrap>
			)}
			<Container
				variant='lg'
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
					style={{ opacity: 0, transform: 'translateY(100%)' }}
				>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						loop={true}
						className={classes.reputation__slider}
						onSwiper={instance => (sliderRef.current = instance)}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true,
							stopOnLastSlide: false,
							disableOnInteraction: false
						}}
					>
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
