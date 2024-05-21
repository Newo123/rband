import cn from 'clsx'
import Link from 'next/link'

import { IconComponent } from '@/components/ui/IconComponent/IconComponent'
import { Button } from '@/components/ui/button/Button'
import { Container } from '@/components/ui/container/Container'
import { Input } from '@/components/ui/input/Input'
import { Switcher, TypeProps } from '@/components/ui/switcher/Switcher'

import classes from './contacts.module.scss'

const switchers: Array<TypeProps> = [
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

export function Contacts() {
	return (
		<section className={classes.contacts}>
			<Container
				variant='xl'
				className={classes.contacts__container}
			>
				<div className={classes.contacts__content}>
					<h1 className={cn('site-title-3', classes.contacts__title)}>
						Контакты
					</h1>
					<p className={classes.contacts__time}>
						<IconComponent icon='tabler:clock' />
						Пн-Пт: 10:00-18:00
					</p>
					<div className={classes.contacts__contentInfo}>
						<div className={classes.contacts__contentInfoBox}>
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
						<div className={classes.contacts__contentInfoBox}>
							<Link
								target='_blank'
								href='mailto:mail@rband.pro'
							>
								mail@rband.pro
							</Link>
							<p className={classes.contacts__contentInfoAddress}>
								Россия, Брянск, ул. Осовиахима, 3г
							</p>
						</div>
					</div>
				</div>

				<div className={classes.formBlock}>
					<form
						action=''
						className={classes.form}
					>
						<h2 className={cn('site-title-3', classes.form__title)}>
							Написать в RBAND
						</h2>
						<p className={classes.form__text}>
							Расскажите о своём проекте или предложении. Сообщение сразу
							попадёт к нужному специалисту или руководителю.
						</p>
						<div className={classes.form__inputs}>
							<Input
								placeholder='Имя *'
								id='name'
								className={classes.form__input}
							/>
							<Input
								placeholder='Телефон *'
								id='phone'
								className={classes.form__input}
							/>
						</div>
						<div className={classes.form__theme}>
							<span className={classes.form__label}>Тип проекта</span>
							<div className={classes.form__themeTypes}>
								{switchers.map(switcher => (
									<Switcher
										key={switcher.id}
										{...switcher}
									/>
								))}
							</div>
						</div>
						<div className={classes.form__textarea}>
							<span className={classes.form__label}>Кратко о проекте</span>
							<textarea
								name='message'
								id='message'
							></textarea>
						</div>
						<div className={classes.upload}>
							<label
								htmlFor='file'
								className={classes.upload__label}
							>
								<IconComponent icon='ant-design:paper-clip-outlined' />
								<div className={classes.upload__text}>
									Прикрепить файл
									<span>0 из 20Мб (0 из 5 файлов: doc, pdf, zip)</span>
								</div>
								<input
									type='file'
									id='file'
									className={classes.upload__input}
									multiple
									hidden
									accept='image/*,.png,.jpg,.jpeg,.doc,.pdf,.zip,.rar'
								/>
							</label>
							<div className={classes.upload__content}>
								<div
									className={cn(
										classes.upload__contentItem,
										classes.upload__contentItem_loading
									)}
								>
									<div className={classes.upload__icon}>
										{/* <IconComponent icon='basil:cross-outline' /> */}
										<IconComponent icon='line-md:loading-twotone-loop' />
									</div>
									<span>Документ техническое задание о проекте.pdf</span>
								</div>
								<div className={classes.upload__contentItem}>
									<div className={classes.upload__icon}>
										<IconComponent icon='basil:cross-outline' />
										{/* <IconComponent icon='line-md:loading-twotone-loop' /> */}
									</div>
									<span>Документ техническое задание о проекте.pdf</span>
								</div>
							</div>
						</div>
						<div className={classes.form__actions}>
							<p className={classes.form__privacy}>
								Отправляя форму, я соглашаюсь c 
								<span>правилами обработки данных</span>
							</p>
							<Button className={classes.form__submit}>Отправить заявку</Button>
						</div>
					</form>
				</div>
			</Container>
		</section>
	)
}
