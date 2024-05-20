import { ILang } from '@/types/lang.types'

type Props = {
	params: ILang
}

export const revalidate = 3600

export default async function Home({ params }: Props) {
	return (
		<div>
			{/* <Image
				src={require('/public/about.jpg')}
				alt='123123'
				sizes='100vw'
			/> */}
		</div>
	)
}
