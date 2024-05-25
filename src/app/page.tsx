import { FC } from 'react'

import { ILang } from '@/types/lang.types'

import { Home } from './Home'

type Props = {
	params: ILang
}

export const revalidate = 3600

const Page: FC<Props> = ({ params }) => {
	return <Home />
}
export default Page
