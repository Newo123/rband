import cn from 'clsx'
import Link from 'next/link'

import { ILocalization } from './localization.types'
import classes from './styles.module.scss'

export function Localization({ regions, country }: ILocalization) {
	console.log(regions, country)
	return (
		<div className={classes.localization}>
			<div className={classes.localization__container}>
				{regions && regions.length > 0 && (
					<>
						<div className={classes.localization__label}>Выберите город</div>
						<div className={classes.localization__locales}>
							{regions.length &&
								regions.map((locale, index) => {
									return (
										<div
											className={classes.localization__localesItem}
											key={index}
										>
											{locale && (
												<Link
													className={classes.localization__localesItemCountry}
													href={locale.href}
												>
													{locale.country}
												</Link>
											)}
											{locale.cities.length > 0 &&
												locale.cities.map(city => (
													<Link
														key={city.title}
														href={city.href}
														className={classes.localization__localesItemCity}
													>
														{city.title}
													</Link>
												))}
										</div>
									)
								})}
						</div>
						<Link
							href='#'
							className={classes.localization__anotherСity}
						>
							Drugi grad
						</Link>
					</>
				)}

				{country && country.length > 0 && (
					<div
						className={cn(
							classes.localization__locales,
							classes.localization__locales_centered
						)}
					>
						{country.map(count => (
							<div
								className={classes.localization__localesItem}
								key={count.title}
							>
								<Link
									href={count.href}
									className={classes.localization__localesItemState}
								>
									{count.title}
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
