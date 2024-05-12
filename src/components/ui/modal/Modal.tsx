'use client'

import { Icon } from '@iconify/react'
import cn from 'clsx'
import {
	HTMLAttributes,
	PropsWithChildren,
	useEffect,
	useRef,
	useState
} from 'react'

import { useModal } from '@/store/modal.store'

import classes from './styles.module.scss'

export function Modal({
	className,
	children,
	id,
	...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>> & { id: string }) {
	const { modals, setActiveModal } = useModal()
	const modalRef = useRef(null)
	const [modal, setModal] = useState(modals.find(m => m.id === id))

	useEffect(() => {
		setModal(modals.find(m => m.id === id))
	}, [modals])

	return (
		<div
			className={cn(
				classes.modal,
				modal?.isOpen && classes.modal_active,
				className
			)}
			ref={modalRef}
			{...rest}
		>
			<button
				className={classes.modal__close}
				onClick={() => setActiveModal(modal?.id!, false)}
			>
				<Icon icon='iconamoon:close-thin' />
			</button>
			{children}
		</div>
	)
}
