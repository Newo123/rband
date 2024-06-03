import { TypeInput } from '../ui/input/input.types'
import { TypeSwitcher } from '../ui/switcher/switcher.types'

export const menu = [
	{
		href: '/asdas',
		title: 'Услуги'
	},
	{
		href: '#',
		title: 'Мы'
	},
	{
		href: 'projects/project',
		title: 'Проекты'
	},
	{
		href: '#',
		title: 'Блог'
	},
	{
		href: '/reviews',
		title: 'Отзывы'
	},
	{
		href: '/contacts',
		title: 'Контакты'
	}
]

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

export const localesRegions = [
	{
		country: 'Srbija',
		href: '/',
		cities: [
			{
				title: 'Beograd',
				href: '/'
			},
			{
				title: 'Novi Sad',
				href: '/'
			},
			{
				title: 'Niš',
				href: '/'
			},
			{
				title: 'Kragujevac',
				href: '/'
			},
			{
				title: 'Subotica',
				href: '/'
			}
		]
	},
	{
		country: 'Montenegro',
		href: '/',
		cities: [
			{
				title: 'Bar',
				href: '/'
			},
			{
				title: 'Podgorica',
				href: '/'
			},
			{
				title: 'Tivat',
				href: '/'
			},
			{
				title: 'Budva',
				href: '/'
			},
			{
				title: 'Kotor',
				href: '/'
			},
			{
				title: 'Herceg Novi',
				href: '/'
			},
			{
				title: 'Nikšić',
				href: '/'
			}
		]
	},
	{
		country: 'Hrvatska',
		href: '/',
		cities: [
			{
				title: 'Zagreb',
				href: '/'
			},
			{
				title: 'Dubrovnik',
				href: '/'
			},
			{
				title: 'Split',
				href: '/'
			},
			{
				title: 'Rijeka',
				href: '/'
			},
			{
				title: 'Zadar',
				href: '/'
			}
		]
	}
]
export const localesCountry = [
	{
		title: 'Русский',
		href: '/'
	},
	{
		title: 'English',
		href: '/'
	},
	{
		title: 'Srpski',
		href: '/'
	}
]
