import Image from 'next/image'

import classes from './Motivations.module.scss'

interface IMotivationsItem {
	image: string
	title: string
	texts: Array<string>
}

export function MotivationsItem({ image, texts, title }: IMotivationsItem) {
	return (
		<div className={classes.motivations__item}>
			<div className={classes.motivations__itemContent}>
				<div className={classes.motivations__itemContentImage}>
					<Image
						src={image}
						alt={title}
						width={107}
						height={90}
					/>
				</div>
				<h6 className={classes.motivations__itemContentTitle}>{title}</h6>
			</div>
			{texts.length > 0 && (
				<div className={classes.motivations__itemText}>
					{texts.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			)}
		</div>
	)
}
