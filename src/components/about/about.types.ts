import { TypeImages } from '../text-wrap/TextWrap'

export interface IAbout {
	images?: Array<TypeImages>
	info: Array<IAboutStickyBlock>
	projects: Array<IAboutPartnersProject>
	head: IAboutHead
	reviews: IAboutPartnersReviews
}

export interface IAboutStickyBlock {
	texts: Array<string>
	button: {
		text: string
		href: string
	}
}
export interface IAboutSticky {
	info: Array<IAboutStickyBlock>
}
export interface IAboutPartnersReviews {
	title: string
	text: string
}

export interface IAboutPartnersProject {
	image: string
	name: string
	text: string
	href: string
}
export interface IAboutPartners {
	projects: Array<IAboutPartnersProject>
	reviews: IAboutPartnersReviews
}

export interface IAboutHeadReputation {
	numbers: string
	text: string
}
export interface IAboutHead {
	reputations: Array<IAboutHeadReputation>
	image: string
	video: string
}
