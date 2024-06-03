import { ITransitionLink } from './transitionLink.types'

export function TransitionLink({
	children,
	href,
	className,

	...rest
}: ITransitionLink) {
	return (
		<a
			href={href}
			className={className}
			onClick={e => e.preventDefault()}
		>
			{children}
		</a>
	)
}
