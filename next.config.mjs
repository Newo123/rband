/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		optimizePackageImports: ['gsap', '@iconify/react', 'swiper']
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				pathname: '/wikipedia/**'
			}
		]
	}
}
export default nextConfig
