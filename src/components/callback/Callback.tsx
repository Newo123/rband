import cn from 'clsx'

import { Button } from '../ui/button/Button'
import { Input } from '../ui/input/Input'
import { Switcher } from '../ui/switcher/Switcher'
import { UploadFile } from '../ui/uploadFile/UploadFile'

import classes from './Callback.module.scss'
import { ICallback } from './callback.types'

export function Callback({ switchers, inputs, title, text }: ICallback) {
	return (
		<form
			action=''
			className={cn(classes.form)}
		>
			<h3 className={cn('site-title-3', classes.form__title)}>{title}</h3>
			<p className={classes.form__text}>{text}</p>
			{inputs?.length && (
				<div className={classes.form__inputs}>
					{inputs.map(input => (
						<Input
							key={input.name}
							type={input.type}
							name={input.name}
							placeholder={input.placeholder}
							id={input.id}
							className={classes.form__input}
						/>
					))}
				</div>
			)}

			{switchers?.length && (
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
			)}

			<div className={classes.form__textarea}>
				<span className={classes.form__label}>Кратко о проекте</span>
				<textarea
					name='message'
					id='message'
				></textarea>
			</div>
			<UploadFile />
			<div className={classes.form__actions}>
				<p className={classes.form__privacy}>
					Отправляя форму, я соглашаюсь c 
					<span>правилами обработки данных</span>
				</p>
				<Button className={classes.form__submit}>Отправить заявку</Button>
			</div>
		</form>
	)
}
