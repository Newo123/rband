import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../ui/container/Container'

import classes from './styles.module.scss'

const socials = [
	{
		href: '',
		title: 'WhatsApp'
	},
	{
		href: '',
		title: 'Telegram'
	},
	{
		href: '',
		title: 'Behance'
	}
]
const services = [
	{
		href: '',
		title: 'Сайты и Web-сервисы'
	},
	{
		href: '',
		title: 'Интернет-реклама и продвижение'
	},
	{
		href: '',
		title: 'Дизайн и брендирование'
	}
]

export function Footer() {
	const date = new Date(Date.now()).getFullYear()
	return (
		<footer className={classes.footer}>
			<Container
				variant='xl'
				className={classes.footer__container}
			>
				<div className={classes.footer__company}>
					<Link
						href='/'
						className={classes.footer__logo}
					>
						rband
					</Link>
					<p className={classes.footer__companyText}>
						Агентство дизайна и интернет-индустрии
					</p>
				</div>
				<div className={classes.footer__content}>
					<div className={classes.footer__contacts}>
						<div className={classes.footer__contactsTop}>
							<Link
								className={cn(
									'under-line-white',
									classes.footer__contactsPhone
								)}
								href='tel+74951091202'
							>
								+7 495 109-12-02
							</Link>
							<p className={classes.footer__contactsOperating}>
								Пн-Пт: 10:00-18:00
							</p>
						</div>
						<Link
							href='mailto:mail@r-band.ru'
							className={cn('under-line-white', classes.footer__contactsMail)}
						>
							mail@r-band.ru
						</Link>
					</div>
					{socials.length > 0 && (
						<div className={classes.footer__socials}>
							{socials.map((soc, i) => (
								<Link
									href={soc.href}
									key={soc.title}
									className={cn(
										'under-line-white',
										classes.footer__socialsItem
									)}
								>
									{soc.title}
								</Link>
							))}
						</div>
					)}
					{services.length > 0 && (
						<div className={classes.footer__services}>
							{services.map((service, i) => (
								<div
									className={classes.footer__servicesItem}
									key={service.title}
								>
									<Link
										href={service.href}
										className={cn(
											'under-line-white-bg',
											classes.footer__servicesItemLink
										)}
									>
										{service.title}
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
				<div className={classes.footer__info}>
					<button className={classes.footer__reviews}>
						<p className={classes.footer__reviewsText}>смотреть Отзывы</p>
						<div className={classes.footer__reviewsLinks}>
							<div className={classes.footer__reviewsItem}>
								<div className={classes.footer__reviewsItemImg}>
									<Image
										src='/review-yandex.png'
										alt='review-yandex'
										fill
									/>
								</div>
								5.0
							</div>
							<div className={classes.footer__reviewsItem}>
								<div className={classes.footer__reviewsItemImg}>
									<Image
										src='/review-google.png'
										alt='review-google'
										fill
									/>
								</div>
								5.0
							</div>
						</div>
					</button>
					<div className={classes.footer__copyright}>
						<span>&copy; 2015 - {date} RBAND</span>
						<span className='under-line-gray'>Политика обработки данных</span>
					</div>
				</div>
			</Container>
		</footer>
	)
}
