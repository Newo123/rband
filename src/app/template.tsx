'use client'

import { useEffect } from 'react'

import { Container } from '@/components/ui/container/Container'

import { animationPageIn } from '@/utils/animation'

export default function Template({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		animationPageIn()
	}, [])
	return (
		<>
			{children}
			<div
				id='banner'
				className='min-h-screen bg-[#1a1717] z-[999] fixed top-0 w-full left-0'
			>
				<span
					className='loader'
					id='loader'
				></span>
				<Container
					variant='xl'
					className='flex items-center h-screen'
				>
					<h6
						id='text-logo'
						className=''
					>
						RBAND
					</h6>
				</Container>
			</div>
		</>
	)
}
