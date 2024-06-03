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

// export interface IProjects {
// 	projects: Array<IProjectsSlides>
// }

export interface IProjects {
	title?: string
	projects: Array<IProjectsSlides> | IProjectsSlides
}
