import { TypeInput } from '../ui/input/input.types'
import { TypeSwitcher } from '../ui/switcher/switcher.types'

export interface ICallback {
	title: string
	text: string
	inputs?: Array<TypeInput>
	switchers?: Array<TypeSwitcher>
}
