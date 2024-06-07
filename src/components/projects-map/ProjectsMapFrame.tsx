import cn from 'clsx'
import Image from 'next/image'

import classes from './ProjectsMap.module.scss'

interface IProjectsMapFrame {}

const dots = [
	{
		id: '1',
		number: '2'
	},
	{
		id: '2',
		number: '8'
	},
	{
		id: '3',
		number: '20'
	},
	{
		id: '4',
		number: '7'
	},
	{
		id: '5',
		number: '3'
	},
	{
		id: '6',
		number: '20'
	},
	{
		id: '7',
		number: '2'
	},
	{
		id: '8',
		number: '120'
	},
	{
		id: '9',
		number: '7'
	},
	{
		id: '10',
		number: '2'
	},
	{
		id: '11',
		number: '2'
	}
]

export function ProjectsMapFrame({}: IProjectsMapFrame) {
	return (
		<>
			<div className={classes.projectsMap__planet}></div>
			<div className={classes.projectsMap__frame}>
				<Image
					src='/about/map.svg'
					alt='map'
					fill
				/>
			</div>
			<div className={classes.projectsMap__dotsContainer}>
				<ul className={classes.projectsMap__dots}>
					{dots.length > 0 &&
						dots.map(dot => (
							<li
								key={dot.id}
								className={cn(classes.projectsMap__dot, `dot_${dot.id}`)}
							>
								{dot.number}
							</li>
						))}
				</ul>
			</div>
		</>
	)
}
