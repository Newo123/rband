'use client'

import { useEffect } from 'react'

import { animationPageIn } from '@/utils/animation'

export default function Template({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		animationPageIn()
	}, [])
	return (
		<>
			{children}
			<div
				id='banner1'
				className='min-h-screen bg-[#3c3c3c] z-[999] fixed top-0 w-full left-0'
			></div>
		</>
	)
}
