'use client'

import { useStages } from '@/store/stages.store'

import { TextWrap } from '../text-wrap/TextWrap'
import { Bullet } from '../ui/bullet/Bullet'
import { Container } from '../ui/container/Container'
import { Form } from '../ui/form/Form'

import { StagesImages } from './StagesImages'
import { StagesList } from './StagesList'
import { StagesText } from './StagesText'
import classes from './styles.module.scss'

const words =
	'Мы используем комбинацию методов <strong>Agile</strong>, <strong>Waterfall</strong> и <strong>KISS</strong> для продуктивного сотрудничества между всеми вовлеченными сторонами проекта и достижения результатов в срок.'

export function Stages() {
	const text = useStages(state => state.stages.textWraps)

	return (
		<section className={classes.stages}>
			<TextWrap
				images={text}
				className={classes.stages__textWrap}
			/>

			<Container
				variant='xl'
				className={classes.stages__container}
			>
				<div className={classes.stages__box}>
					<StagesImages />
					<StagesList />
				</div>
				<StagesText text={words} />
				<Bullet
					className={classes.stages__bullet}
					title='Начать <br /> проект'
				>
					<Form />
				</Bullet>
			</Container>
		</section>
	)
}
