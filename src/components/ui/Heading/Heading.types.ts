import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

export type TypeHeading = {
	tag: string
	children: PropsWithChildren<ReactNode>
}

export type TypeRef = HTMLAttributes<HTMLHeadingElement>
