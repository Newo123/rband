'use client'

import { useGSAP } from '@gsap/react'
import { Icon } from '@iconify/react'
import cn from 'clsx'
import gsap from 'gsap/all'
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
	const shadowRef = useRef(null)
	const shadowSmallRef = useRef(null)
	const [modal, setModal] = useState(modals.find(m => m.id === id))

	useEffect(() => {
		setModal(modals.find(m => m.id === id))
	}, [modals])

	useGSAP(
		() => {
			const timeline = gsap.timeline()

			if (modal?.isOpen) {
				timeline
					.to(shadowSmallRef.current, {
						translateY: '-100%',
						duration: 0.4
					})
					.to(modalRef.current, {
						maxHeight: '100%',
						duration: 0.3,
						delay: -0.7
					})
					.to(shadowRef.current, {
						translateY: '-100%',
						duration: 0.3,
						delay: 0.6
					})
			} else if (!modal?.isOpen) {
				timeline
					.to(shadowRef.current, {
						translateY: 0,
						duration: 0.3
					})
					.to(modalRef.current, {
						maxHeight: 0,
						duration: 0.2
					})
					.to(shadowSmallRef.current, {
						translateY: 0,
						duration: 0.4,
						delay: 0.4
					})
			}
		},
		{ scope: modalRef, dependencies: [modals] }
	)

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
			<div
				className={classes.modal__shadow}
				ref={shadowRef}
			></div>
			<div
				className={cn(classes.modal__shadow, classes.modal__shadow_small)}
				ref={shadowSmallRef}
			></div>
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
