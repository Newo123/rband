import Image from 'next/image'
import Link from 'next/link'

import classes from './styles.module.scss'

export function PartnersItem({ href, image }: { image: string; href: string }) {
	return (
		<Link
			href={href}
			className={classes.partners__item}
		>
			<Image
				src={image}
				alt={image}
				fill
			/>
		</Link>
	)
}
