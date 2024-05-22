import type { Metadata } from 'next'

import { TypeInput } from '@/components/ui/input/input.types'
import { TypeSwitcher } from '@/components/ui/switcher/switcher.types'

import { Contacts } from '../../components/contacts/Contacts'

export const metadata: Metadata = {
	title: 'Contacts'
}

const switchers: Array<TypeSwitcher> = [
	{
		id: 'develop-project',
		label: 'Разработать проект',
		name: 'type-project',
		isChecked: true
	},
	{
		id: 'partners',
		label: 'Партнёрство',
		name: 'type-project',
		isChecked: false
	},
	{
		id: 'career',
		label: 'Карьера',
		name: 'type-project',
		isChecked: false
	},
	{
		id: 'other',
		label: 'Другое',
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

const call = {
	title: 'Написать в RBAND',
	text: 'Расскажите о своём проекте или предложении. Сообщение сразу попадёт к нужному специалисту или руководителю.',
	switchers: switchers,
	inputs: inputs
}

export default function Page() {
	return (
		<Contacts
			contact={{ isAddress: true }}
			callback={call}
		/>
	)
}
