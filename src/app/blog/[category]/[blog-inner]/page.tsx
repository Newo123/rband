import type { Metadata } from 'next'
import { FC } from 'react'

import { HeroInner } from '@/components/hero-inner/HeroInner'
import { Typography } from '@/components/typography/Typography'
import { TypographyContainer } from '@/components/typography/TypographyContainer'
import { ImageBackgroundScroll } from '@/components/ui/ImageBackgroundScroll/ImageBackgroundScroll'
import { Container } from '@/components/ui/container/Container'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

import classes from './inner.module.scss'

export const metadata: Metadata = {
	title: 'blog-inner',
	description: ''
}

interface IPage {}

const hero = {
	title: 'Дизайним идеальную кнопку',
	text: 'Кнопки обеспечивают взаимодействие пользователя с сайтом, а также помогают принять финальное решение. Поэтому на них стоит обратить особое внимание при разработке.'
}
const pictures = {
	image: '/blog-inner/1.png',
	smallImage: '/blog-inner/1.png'
}

const Page: FC<IPage> = () => {
	return (
		<>
			<HeroInner {...hero} />
			<PageWrapper>
				<ImageBackgroundScroll pictures={pictures} />
				<section className={classes.section}>
					<Container variant='xl'>
						<Typography>
							<TypographyContainer className='typography__container_block-center'>
								<h1>Заголовок к тексту H1 - 36</h1>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края. Нами также были разработаны брендбук, печатная
									продукция для Форума «Государственные и муниципальные закупки:
									последние изменения и практические аспекты. 2023» и
									корпоративные подарки.В них мы отразили белизну снегов, синеву
									льда и доброту местных жителей.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края. Нами также были разработаны брендбук, печатная
									продукция для Форума «Государственные и муниципальные закупки:
									последние изменения и практические аспекты. 2023» и
									корпоративные подарки.В них мы отразили белизну снегов, синеву
									льда и доброту местных жителей.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края. Нами также были разработаны брендбук, печатная
									продукция для Форума «Государственные и муниципальные закупки:
									последние изменения и практические аспекты. 2023» и
									корпоративные подарки.В них мы отразили белизну снегов, синеву
									льда и доброту местных жителей.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края. Нами также были разработаны брендбук, печатная
									продукция для Форума «Государственные и муниципальные закупки:
									последние изменения и практические аспекты. 2023» и
									корпоративные подарки.В них мы отразили белизну снегов, синеву
									льда и доброту местных жителей.
								</p>
								<p>
									Разработать логотип, дизайн POS-материалов и визуальный код
									бренда. Соединить строгость государственного учреждения,
									Департамента государственного заказа ЯНАО и калоритность
									культуры края.
								</p>
							</TypographyContainer>
						</Typography>
					</Container>
				</section>
			</PageWrapper>
		</>
	)
}

export default Page