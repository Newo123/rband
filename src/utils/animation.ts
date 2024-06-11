import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const animationPageIn = () => {
	const banner = document.getElementById('banner')
	const logo = document.getElementById('logo')
	const loader = document.getElementById('loader')

	if (banner && logo && loader) {
		const tl = gsap.timeline()

		tl.set([banner], {
			yPercent: 0
		})
			.to([logo, loader], {
				opacity: 0,
				yPercent: -100,
				ease: 'power3.inOut'
			})
			.to(banner, {
				yPercent: -100,
				ease: 'power3.inOut'
			})
	}
}
export const animationPageOut = (href: string, router: AppRouterInstance) => {
	const banner = document.getElementById('banner')
	const logo = document.getElementById('logo')
	const loader = document.getElementById('loader')

	if (banner && logo && loader) {
		const tl = gsap.timeline()
		tl.set([banner, logo, loader], {
			yPercent: 100
		})
			.set([logo, loader], {
				opacity: 0
			})
			.to([banner], {
				yPercent: 0,
				ease: 'power3.inOut',
				onComplete: () => {
					setTimeout(() => {
						router.push(href)
					}, 500)
				}
			})
			.to([logo, loader], {
				opacity: 1,
				yPercent: 0,
				ease: 'power3.inOut'
			})
	}
}
