import cn from 'clsx';
import './Styles.scss';
import { IContainer } from './container.types';

export function Container({
	variant,
	children,
	className,
	...rest
}: IContainer) {
	return (
		<div
			className={cn(variant ? 'container-' + variant : 'container', className)}
			{...rest}
		>
			{children}
		</div>
	);
}
