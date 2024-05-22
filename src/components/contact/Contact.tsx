import cn from 'clsx'
import Link from 'next/link'

import { IconComponent } from '../ui/IconComponent/IconComponent'

import classes from './contact.module.scss'

export function Contact({ isAddress }: { isAddress: boolean }) {
	return (
		<div className={classes.contact}>
			<h1 className={cn('site-title-3', classes.contact__title)}>Контакты</h1>
			<p className={classes.contact__time}>
				<IconComponent icon='tabler:clock' />
				Пн-Пт: 10:00-18:00
			</p>
			<div className={classes.contact__contentInfo}>
				<div className={classes.contact__contentInfoBox}>
					<Link
						target='_blank'
						href='tel:+74951091202'
					>
						+7 495 109 12 02
					</Link>
					<Link
						target='_blank'
						href='https://wa.me/+74832590366'
					>
						WhatsApp
					</Link>
					<Link
						target='_blank'
						href='https://t.me/rband_pro'
					>
						Telegram
					</Link>
				</div>
				<div className={classes.contact__contentInfoBox}>
					<Link
						target='_blank'
						href='mailto:mail@rband.pro'
					>
						mail@rband.pro
					</Link>
					{isAddress && (
						<p className={classes.contact__contentInfoAddress}>
							Россия, Брянск, ул. Осовиахима, 3г
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
