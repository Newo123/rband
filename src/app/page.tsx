import { ILang } from '@/types/lang.types'

import { Home } from './Home'

type Props = {
	params: ILang
}

export const revalidate = 3600

export default async function HomePage({ params }: Props) {
	return <Home />
}
