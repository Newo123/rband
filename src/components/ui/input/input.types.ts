import { InputHTMLAttributes, PropsWithChildren } from 'react'

export type TypeInput = PropsWithChildren<
	InputHTMLAttributes<HTMLInputElement>
> & {
	placeholder: string
}
