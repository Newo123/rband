import { Metadata } from 'next'

import { Service } from './Service'

// export const metadata: Metadata = {
// 	title: 'Services',
// 	description: 'RBAND Services',
// 	openGraph: {
// 		title: 'Services',
// 		description: 'RBAND Services'
// 	}
// }
type Props = {
	params: { services: Array<string> }
	searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({
	params,
	searchParams
}: Props): Promise<Metadata> {
	return {
		title: params.services[params.services.length - 1]
	}
}

const getData = async (url: string) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/${url}`)

	// if (!res.ok) {
	// 	notFound()
	// }
	return res.json()
}

type TypeProps = {
	params: { services: Array<string> }
}

export default async function Page({ params }: TypeProps) {
	const data = await getData(params.services.join('/'))
	console.log(data)

	return <Service />
}
