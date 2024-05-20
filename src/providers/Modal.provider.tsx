'use client'

import dynamic from 'next/dynamic'
import { PropsWithChildren, ReactElement, useState } from 'react'

import { ModalContext } from '@/contexts/Modal.context'

const ComponentModal = dynamic(() => import('../components/ui/modal/Modal'), {
	ssr: false
})

export default function ModalProvider({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [content, setContent] = useState<ReactElement>()

	const open = (children: ReactElement) => {
		setIsOpen(true)
		setContent(children)
	}

	const close = () => {
		setIsOpen(false)
	}

	const valueModalProvider = {
		open,
		close
	}

	return (
		<ModalContext.Provider value={valueModalProvider}>
			{children}
			<ComponentModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				{content}
			</ComponentModal>
		</ModalContext.Provider>
	)
}
