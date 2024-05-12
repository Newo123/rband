'use client';
import cn from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import classes from './styles.module.scss';

type TypeTextWrapVariant = 'reverse';

interface ITextWrap extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
	variant?: TypeTextWrapVariant;
}

export function TextWrap({ children, className, variant, ...rest }: ITextWrap) {
	return (
		<div
			className={cn(
				classes.textWrap,
				variant === 'reverse' ? classes.textWrap_reverse : '',
				className
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
