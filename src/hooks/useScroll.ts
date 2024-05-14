import { useEffect, useState } from 'react'

export function useScroll() {
	const [scroll, setScroll] = useState<number>(0)

	const handleScroll = (e: Event) => {
		setScroll((e.currentTarget as Window).scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		setScroll(window.scrollY)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return { scroll, setScroll }
}
