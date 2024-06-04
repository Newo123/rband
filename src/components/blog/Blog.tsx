import { Container } from '../ui/container/Container'

import classes from './Blog.module.scss'
import { BlogItem } from './BlogItem'
import { IBlog } from './blog.types'

export function Blog(obj: Array<IBlog>) {
	const blogs = Object.values(obj)
	return (
		<section className={classes.blog}>
			<Container
				variant='xl'
				className={classes.blog__container}
			>
				<div className={classes.blog__grid}>
					{blogs.length > 0 &&
						blogs.map((blog, index) => (
							<BlogItem
								key={index}
								{...blog}
							/>
						))}
				</div>
			</Container>
		</section>
	)
}
