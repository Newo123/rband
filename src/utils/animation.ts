import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const animationPageIn = () => {
	const banner = document.getElementById('banner')
	const text = document.getElementById('text-logo')
	const loader = document.getElementById('loader')

	if (banner && text && loader) {
		const tl = gsap.timeline()

		tl.set([banner], {
			yPercent: 0
		}).to(banner, {
			yPercent: -100,
			ease: 'power3.inOut'
		})
	}
}
export const animationPageOut = (href: string, router: AppRouterInstance) => {
	const banner = document.getElementById('banner')
	const text = document.getElementById('text-logo')
	const loader = document.getElementById('loader')

	if (banner && text && loader) {
		const tl = gsap.timeline()
		tl.set([banner], {
			yPercent: 100
		}).to([banner], {
			yPercent: 0,
			ease: 'power3.inOut',
			onComplete: () => {
				router.push(href)
			}
		})
	}
}
