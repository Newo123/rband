// 'use client'

// import { useGSAP } from '@gsap/react'
// import gsap, { Observer } from 'gsap/all'
// import { PropsWithChildren } from 'react'

// export default function CursorProvider({ children }: PropsWithChildren) {
// 	useGSAP(() => {
// 		Observer.create({
// 			type: 'pointer',
// 			onMove: self => {
// 				// @ts-ignore
// 				if (self.event.target.localName === 'button') {
// 					// @ts-ignore
// 					gsap.to(self.event.target.querySelector('div'), {
// 						translateX:
// 							// @ts-ignore
// 							(self.event.target.layerX / self.event.target.clientWidth) * 100 +
// 							'%',
// 						translateY:
// 							// @ts-ignore
// 							(self.event.target.layerY / self.event.target.clientHeight) *
// 								100 +
// 							'%',
// 						scale: 1
// 					})
// 				}
// 			}
// 		})
// 	})
// 	return <>{children}</>
// }
