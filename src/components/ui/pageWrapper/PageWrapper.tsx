import { HTMLAttributes, PropsWithChildren } from 'react'

export function PageWrapper({
	children,
	...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
	// const contentRef = useRef(null)
	// const [isAnimate, setIsAnimate] = useState(false)
	// const { scroll } = useScroll()

	// useGSAP(() => {
	// 	if (scroll <= 0 && !isAnimate) {
	// 		gsap.to(contentRef.current, {
	// 			backgroundColor: '#fff',
	// 			delay: 1,
	// 			onComplete: () => {
	// 				setIsAnimate(true)
	// 			}
	// 		})
	// 	}
	// })
	return (
		<div
			style={{ backgroundColor: '#fff', position: 'relative' }}
			// style={
			// 	!isAnimate && scroll <= 0
			// 		? {
			// 				backgroundColor: '#000',
			// 				position: 'relative'
			// 			}
			// 		: { backgroundColor: '#fff', position: 'relative' }
			// }
			// ref={contentRef}
			{...rest}
		>
			{children}
		</div>
	)
}
