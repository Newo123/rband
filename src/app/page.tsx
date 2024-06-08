import { FC } from 'react'

import { ILang } from '@/types/lang.types'

import { Home } from './Home'

type Props = {
	params: ILang
}

export const revalidate = 3600

const Page: FC<Props> = async ({ params }) => {
	// const formData = new FormData()
	// const httpsAgent = new https.Agent({
	// 	rejectUnauthorized: false
	// })

	// formData.append(
	// 	'key',
	// 	'ZE3wh33dziCssxJvFZ3MZ6dhIqAt0dxt8knv84anlIQOhOoxFEKoWKDWQohNg55DFpxqkEhu5MX878AH8w0I1DmKbifibrD5JEKdnpXbhbCfY1otIUcEAX7xDyEIZyxmy75rh01ta3zukWUhdX5ONNHTffyJc1x28w6dKiuZjfhmD6q3AjpFIvVMOSylHLn5FdrmuuMlhgBQfsPzaAmMD5rfK4LmFFEd3YqhgNd4H3bwIGEoiqMe3cO0suzfFhMj'
	// )
	// formData.append('username', 'Default')

	// const response: {
	// 	success: string
	// 	api_token: string
	// } = await axios
	// 	.post('https://rbb.rband.pro/index.php?route=api/login', formData, {
	// 		httpsAgent: httpsAgent
	// 	})
	// 	.then(response => response.data)
	// 	.catch(error => console.log(error.message))

	// console.log(response)

	// formData.delete('key')
	// formData.delete('username')
	// formData.append('_route_', '/about')

	// const response2 = await axios
	// 	.post(
	// 		`https://rbb.rband.pro/index.php?route=api/route/getPageForLink&api_token=${response.api_token}`,
	// 		formData,
	// 		{
	// 			httpsAgent: httpsAgent
	// 		}
	// 	)
	// 	.then(response => response)
	// 	.catch(error => console.log(error.message))

	// console.log(response2)

	return <Home />
}
export default Page
