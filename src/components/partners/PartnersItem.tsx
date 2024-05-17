import Link from 'next/link'

import classes from './styles.module.scss'

export function PartnersItem({ href, image }: { image: string; href: string }) {
	return (
		<Link
			href={href}
			className={classes.partners__item}
		>
			<img
				src={image}
				alt={image}
			/>
			{/* <Image
				src={image}
				alt={image}
				// fill
				width={160}
				height={52}
				quality={100}
			/> */}
		</Link>
	)
}
