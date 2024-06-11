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
				className='min-h-screen bg-[#121111] z-[999] fixed top-0 w-full left-0 flex items-center justify-center'
			>
				<h6 className='text-[24px] font-semibold leading-120 tracking-[0.04em] text-white'>
					RBAND
					<span className='opacity-[0.15]'>.</span>
					<span className='opacity-[0.30]'>.</span>
					<span className='opacity-[1]'>.</span>
				</h6>
			</div>
		</>
	)
}
