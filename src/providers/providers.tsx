'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { YandexMetricaProvider } from 'next-yandex-metrica'
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
		<YandexMetricaProvider
			tagID={32609040}
			initParameters={{
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true
			}}
		>
			<QueryClientProvider client={client}>
				<SmoothScrollProvider>
					<ModalProvider>{children}</ModalProvider>
				</SmoothScrollProvider>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
		</YandexMetricaProvider>
	)
}
