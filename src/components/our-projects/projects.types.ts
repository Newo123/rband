export interface IProjectVideo {
	src: string
	type: string
}

export interface IProject {
	title: string
	text: string
	href: string
	textColor?: 'white' | 'black'
	shadow?: boolean
	image: string
	video?: Array<IProjectVideo>
}

export interface IProjectsSlides {
	title?: string
	projects: Array<IProject>
}

export type TypeProjects = Array<IProjectsSlides> | IProjectsSlides
