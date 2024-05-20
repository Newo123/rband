'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'

import ModalProvider from './Modal.provider'
import SmoothScrollProvider from './SmoothScroll.provider'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	return (
		<QueryClientProvider client={client}>
			<SmoothScrollProvider>
				<ModalProvider>{children}</ModalProvider>
			</SmoothScrollProvider>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	)
}
