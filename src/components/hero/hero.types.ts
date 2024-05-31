export type TypeInners = {
	text: string
	href: string
}
export type TypeReview = {
	icon: string
	alt: string
	rating: string
}
export interface IHero {
	title: string
	text: string
	inners?: Array<TypeInners>
	reviews?: Array<TypeReview>
}
