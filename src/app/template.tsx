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
				className='min-h-screen bg-black z-[999] fixed top-0 w-full left-0'
			></div>
			{/* <div
				id='banner2'
				className=' min-h-screen bg-black z-[999] fixed top-0 w-1/4 left-1/4'
			></div>
			<div
				id='banner3'
				className=' min-h-screen bg-black z-[999] fixed top-0 w-1/4 left-2/4'
			></div>
			<div
				id='banner4'
				className=' min-h-screen bg-black z-[999] fixed top-0 w-1/4 left-3/4'
			></div> */}
		</>
	)
}
