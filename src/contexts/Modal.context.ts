import { ReactElement, createContext } from 'react'

export const ModalContext = createContext({
	open: (children: ReactElement) => {},
	close: () => {}
})
