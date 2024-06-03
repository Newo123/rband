export type TypeInners = {
	text: string
	href: string
}
export type TypeReview = {
	icon: string
	alt: string
	rating: string
}
export type TypeProjects = {
	image: string
	count: string
	text: string
}
export interface IHero {
	title: string
	text: string
	inners?: Array<TypeInners>
	reviews?: Array<TypeReview>
	projects?: TypeProjects
}
