'use client'

import { useRef } from 'react'

import { useStages } from '@/store/stages.store'

import { TextWrap } from '../text-wrap/TextWrap'
import { TextWrapItem } from '../text-wrap/TextWrapItem'
import { Bullet } from '../ui/bullet/Bullet'
import { Container } from '../ui/container/Container'
import { Form } from '../ui/form/Form'

import { StagesImages } from './StagesImages'
import { StagesList } from './StagesList'
import classes from './styles.module.scss'

export function Stages() {
	const text = useStages(state => state.stages.textWraps)
	const textRef = useRef<any>()

	return (
		<section className={classes.stages}>
			{text.length > 0 && (
				<TextWrap
					id='stages-text-wrap'
					className={classes.stages__textWrap}
					ref={textRef}
				>
					{text.map((t, i) => {
						return (
							<TextWrapItem
								image={t.image}
								index={i}
								key={i}
								reference={textRef}
								id='#stages-text-wrap'
							/>
						)
					})}
				</TextWrap>
			)}

			<Container
				variant='xl'
				className={classes.stages__container}
			>
				<div className={classes.stages__box}>
					<StagesImages />
					<StagesList />
				</div>
				<p className={classes.stages__descriptionText}>
					Мы используем комбинацию методов <strong>Agile</strong>,{' '}
					<strong>Waterfall</strong> и <strong>KISS</strong> для продуктивного
					сотрудничества между всеми вовлеченными сторонами проекта и достижения
					результатов в срок.
				</p>
				<Bullet title='Начать <br /> проект'>
					<Form />
				</Bullet>
			</Container>
		</section>
	)
}
