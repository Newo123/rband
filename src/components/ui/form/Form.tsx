import { TextField } from './TextField'
import classes from './styles.module.scss'

export function Form() {
	return (
		<form className={classes.form}>
			<TextField
				placeholder='Ваше имя'
				id='name'
			/>
			<TextField
				placeholder='Ваш телефон'
				id='phone'
			/>
			<p className={classes.form__privacy}>
				Отправляя форму, я соглашаюсь с <span>правилами</span>
			</p>
			<button className={classes.form__submit}>ОТПРАВИТЬ</button>
		</form>
	)
}
