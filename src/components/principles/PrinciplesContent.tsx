import cn from 'clsx'

import { TypePrinciplesContent } from '@/store/principles.store'

import classes from './styles.module.scss'

export function PrinciplesContent({ title, items }: TypePrinciplesContent) {
	return (
		<div className={classes.principles__content}>
			<h2 className={cn(classes.principles__title, 'site-title-2')}>{title}</h2>
			{items.length > 0 &&
				items.map((item, index) => (
					<div
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
					</div>
				))}
		</div>
	)
}
