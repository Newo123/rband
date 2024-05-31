type TypeLink = {
	text: string
	href: string
}

export interface IReviews {
	title: string
	text: string
	image: string
	author: string
	links: Array<TypeLink>
}
