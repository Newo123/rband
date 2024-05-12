import { usePrinciples } from '@/store/principles.store';
import { Container } from '../ui/container/Container';
import { Person } from './principles-person/Person';
import { PrinciplesContent } from './PrinciplesContent';
import classes from './styles.module.scss';

export function Principles() {
	const { content, person } = usePrinciples();
	return (
		<section className={classes.principles}>
			<Container variant='lg' className={classes.principles__container}>
				<PrinciplesContent {...content} />
				<Person {...person} />
			</Container>
		</section>
	);
}
