'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { createElement, useRef } from 'react'

import { TypeHeading, TypeRef } from './Heading.types'

const Heading = ({ tag, children, ...rest }: TypeHeading & TypeRef) => {
	const headingRef = useRef(null)
	const Tag = (props: any) =>
		createElement(tag, { ref: headingRef, ...props }, children)

	useGSAP(() => {
		gsap.to(headingRef.current, {
			scrollTrigger: {
				trigger: headingRef.current
			},
			translateY: 0,
			opacity: 1
		})
	})

	return (
		<Tag
			{...rest}
			style={{ transform: 'translateY(100%)', opacity: '0' }}
		>
			{children}
		</Tag>
	)
}

export default Heading
