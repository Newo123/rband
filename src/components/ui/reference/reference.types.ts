import { LinkProps } from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

export interface IReference
	extends LinkProps,
		HTMLAttributes<HTMLAnchorElement> {
	children: ReactNode
}
