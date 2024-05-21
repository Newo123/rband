import { Button } from '../button/Button'
import { Input } from '../input/Input'

import classes from './styles.module.scss'

export function Form() {
	return (
		<form className={classes.form}>
			<Input
				placeholder='Ваше имя'
				id='name'
				className={classes.form__input}
			/>
			<Input
				placeholder='Ваш телефон'
				id='phone'
				className={classes.form__input}
			/>
			<p className={classes.form__privacy}>
				Отправляя форму, я соглашаюсь с <span>правилами</span>
			</p>
			<Button className={classes.form__submit}>ОТПРАВИТЬ</Button>
		</form>
	)
}
