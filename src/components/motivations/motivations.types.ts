import { TypeImages } from '../text-wrap/TextWrap'

export interface IMotivations {
	motivations: IMotivation[]
	textWrap: TypeImages[]
}
export interface IMotivation {
	image: string
	title: string
	texts: string[]
}
