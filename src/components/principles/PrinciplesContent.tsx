import cn from 'clsx'

import { TypePrinciplesContent } from '@/store/principles.store'

import Heading from '../ui/Heading/Heading'

import classes from './styles.module.scss'

export function PrinciplesContent({ title, items }: TypePrinciplesContent) {
	return (
		<div className={classes.principles__content}>
			<Heading
				tag='h2'
				className={cn(classes.principles__title, 'site-title-2')}
			>
				{title}
			</Heading>
			{items.length > 0 &&
				items.map((item, index) => (
					<Heading
						tag='div'
						className={classes.principles__contentItem}
						key={index}
					>
						<h6 className={classes.principles__contentItemTitle}>
							{item.title}
						</h6>
						{item.text.length > 0 &&
							item.text.map((t, i) => (
								<p
									className={classes.principles__contentItemText}
									key={i}
								>
									{t}
								</p>
							))}
					</Heading>
				))}
		</div>
	)
}
