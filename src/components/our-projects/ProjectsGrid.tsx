'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useProjectStore } from '@/store/our-project.store'

import { ProjectsItem } from './ProjectsItem'
import classes from './styles.module.scss'

export function ProjectsGrid() {
	const projects = useProjectStore(state => state.projects)
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
	})
	return (
		<div className={classes.ourProjects__grid}>
			{projects?.map((item, index) => {
				return (
					<ProjectsItem
						{...item}
						key={index}
					/>
				)
			})}
		</div>
	)
}
