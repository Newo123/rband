export type TypeLink = {
	title: string
	href: string
}
export type TypeRegions = {
	country: string
	href: string
	cities: Array<TypeLink>
}

export interface ILocalization {
	country?: Array<TypeLink>
	regions?: Array<TypeRegions>
}
