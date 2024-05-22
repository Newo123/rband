import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useRef } from 'react'

import { TypeService } from '@/store/services.store'

import { Contacts } from '../contacts/Contacts'
import { Button } from '../ui/button/Button'
import { TypeInput } from '../ui/input/input.types'
import { TypeSwitcher } from '../ui/switcher/switcher.types'

import classes from './styles.module.scss'
import { ModalContext } from '@/contexts/Modal.context'

const switchers: Array<TypeSwitcher> = [
	{
		id: 'web-service',
		label: 'Сайт или web-сервис',
		name: 'type-project',
		isChecked: true
	},
	{
		id: 'internet-promotion',
		label: 'Интернет-продвижение',
		name: 'type-project',
		isChecked: false
	},
	{
		id: 'Design-logo-or-branding',
		label: 'Дизайн, лого или брендинг',
		name: 'type-project',
		isChecked: false
	}
]

const inputs: Array<TypeInput> = [
	{
		placeholder: 'Имя *',
		id: 'name',
		name: 'name',
		type: 'text'
	},
	{
		placeholder: 'Телефон *',
		id: 'phone',
		name: 'phone',
		type: 'phone'
	}
]

export const call = {
	title: 'Написать в RBAND',
	text: 'Расскажите о своём проекте или предложении. Сообщение сразу попадёт к нужному специалисту или руководителю.',
	switchers: switchers,
	inputs: inputs
}

export function ServicesItem({
	id,
	price,
	text,
	title,
	image,
	href
}: TypeService) {
	const { open } = useContext(ModalContext)
	const itemRef = useRef(null)
	useGSAP(() => {
		gsap.to(itemRef.current, {
			scrollTrigger: {
				trigger: itemRef.current
			},
			opacity: 1,
			translateY: 0
		})
	})
	return (
		<div
			className={classes.services__item}
			ref={itemRef}
			style={{ opacity: 0, transform: 'translateY(20%)' }}
		>
			<Link
				href={href}
				className={classes.services__itemLinkFull}
			></Link>
			<h6 className={classes.services__itemTitle}>{title}</h6>
			<p className={classes.services__itemPrice}>{price}</p>
			<p className={classes.services__itemText}>{text}</p>
			<div className={classes.services__itemActions}>
				<div
					onClick={() =>
						open(
							<Contacts
								theme='dark'
								callback={call}
								contact={{ isAddress: false }}
							/>
						)
					}
				>
					<Button className={classes.services__itemActionsButton}>
						заказать
						<span>проект</span>
					</Button>
				</div>
				<Link
					href={href}
					className={classes.services__itemActionsLink}
				>
					Подробнее
				</Link>
			</div>
			<div className={classes.services__itemImg}>
				<Image
					src={image}
					alt={title}
					fill
				/>
			</div>
			<div className={classes.services__itemArrow}>
				<svg
					width='12'
					height='12'
					viewBox='0 0 12 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0.697678 10.1607C0.307154 10.5512 0.307154 11.1844 0.697678 11.5749C1.0882 11.9654 1.72137 11.9654 2.11189 11.5749L0.697678 10.1607ZM11.9543 1.3183C11.9543 0.766014 11.5066 0.318298 10.9543 0.318299L1.95428 0.318299C1.402 0.318299 0.954285 0.766014 0.954285 1.3183C0.954285 1.87058 1.402 2.3183 1.95428 2.3183L9.95428 2.3183L9.95428 10.3183C9.95428 10.8706 10.402 11.3183 10.9543 11.3183C11.5066 11.3183 11.9543 10.8706 11.9543 10.3183L11.9543 1.3183ZM2.11189 11.5749L11.6614 2.02541L10.2472 0.611192L0.697678 10.1607L2.11189 11.5749Z'
						fill='white'
					/>
				</svg>
			</div>
		</div>
	)
}
