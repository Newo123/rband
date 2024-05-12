import Link from 'next/link'

import classes from './styles.module.scss'

const locales = {
	country: [
		{
			title: 'Русский',
			href: '/'
		},
		{
			title: 'English',
			href: '/'
		},
		{
			title: 'Srpski',
			href: '/'
		}
	],
	regions: [
		{
			country: 'Srbija',
			href: '/',
			cities: [
				{
					title: 'Beograd',
					href: '/'
				},
				{
					title: 'Novi Sad',
					href: '/'
				},
				{
					title: 'Niš',
					href: '/'
				},
				{
					title: 'Kragujevac',
					href: '/'
				},
				{
					title: 'Subotica',
					href: '/'
				}
			]
		},
		{
			country: 'Montenegro',
			href: '/',
			cities: [
				{
					title: 'Bar',
					href: '/'
				},
				{
					title: 'Podgorica',
					href: '/'
				},
				{
					title: 'Tivat',
					href: '/'
				},
				{
					title: 'Budva',
					href: '/'
				},
				{
					title: 'Kotor',
					href: '/'
				},
				{
					title: 'Herceg Novi',
					href: '/'
				},
				{
					title: 'Nikšić',
					href: '/'
				}
			]
		},
		{
			country: 'Hrvatska',
			href: '/',
			cities: [
				{
					title: 'Zagreb',
					href: '/'
				},
				{
					title: 'Dubrovnik',
					href: '/'
				},
				{
					title: 'Split',
					href: '/'
				},
				{
					title: 'Rijeka',
					href: '/'
				},
				{
					title: 'Zadar',
					href: '/'
				}
			]
		}
	]
}

export function Localization() {
	return (
		<div className={classes.localization}>
			<div className={classes.localization__container}>
				{locales.regions.length > 0 && (
					<>
						<div className={classes.localization__label}>Выберите город</div>
						<div className={classes.localization__locales}>
							{locales.regions.length &&
								locales.regions.map((locale, index) => {
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

				{/* {locales.country.length > 0 && (
					<div
						className={cn(
							classes.localization__locales,
							classes.localization__locales_centered
						)}
					>
						{locales.country.map(count => (
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
				)} */}
			</div>
		</div>
	)
}
