interface ILinkProps {
	text: string
	href: string
}
interface IAdvantageItem {
	title: string
	text: Array<string>
	labels?: Array<string>
	links?: Array<ILinkProps>
}

export interface IAdvantage {
	id: string
	image: string
	alt: string
	blocks: Array<IAdvantageItem>
	isActive: boolean
}

export interface IProps {
	advantages: Array<IAdvantage>
	setIsActive: (value: string) => void
}
