import { create } from 'zustand'

interface IModal {
	modals: Array<{ id: string; isOpen: boolean }>
	setActiveModal: (id: string, isOpen: boolean) => void
}

export const useModal = create<IModal>()(set => ({
	modals: [
		{
			id: 'country',
			isOpen: false
		},
		{
			id: 'city',
			isOpen: false
		}
	],

	setActiveModal: (id: string, isOpen) =>
		set(state => ({
			modals: [
				...state.modals.map(modal => {
					if (modal?.id === id) {
						modal.isOpen = isOpen
					}
					return modal
				})
			]
		}))
}))
