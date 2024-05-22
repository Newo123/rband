import cn from 'clsx'

import { Callback } from '@/components/callback/Callback'
import { Contact } from '@/components/contact/Contact'
import { Container } from '@/components/ui/container/Container'

import { ICallback } from '../callback/callback.types'

import classes from './Contacts.module.scss'

interface IContacts {
	theme?: 'dark' | 'light'
	contact: {
		isAddress: boolean
	}
	callback: ICallback
}

export function Contacts({ theme = 'light', callback, contact }: IContacts) {
	return (
		<section className={cn(classes.contacts, theme === 'dark' && 'dark')}>
			<Container
				variant='xl'
				className={classes.contacts__container}
			>
				<Contact isAddress={contact.isAddress} />
				<Callback {...callback} />
			</Container>
		</section>
	)
}
