import { TypeVariant } from '@/types/variant.types';
import type { HTMLAttributes, PropsWithChildren } from 'react';

export type TypeVariantContainer = Omit<TypeVariant, 'xs' | 'sm'>;

export interface IContainer
	extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
	variant: TypeVariantContainer;
}
