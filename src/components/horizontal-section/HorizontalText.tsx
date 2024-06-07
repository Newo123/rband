import cn from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import classes from './HorizontalSection.module.scss'

interface IHorizontalText {}

export function HorizontalText({}: IHorizontalText) {
	const textRef = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress: scrollProgress } = useScroll({
		target: textRef,
		offset: ['start end', 'end start']
	})
	const x = useTransform(scrollProgress, [0, 1], ['-50%', '50%'])

	return (
		<motion.div
			ref={textRef}
			className={cn(classes.section__logo, classes.section__logo_mobile)}
			style={{ x }}
		>
			<svg
				width='3595'
				height='431'
				viewBox='0 0 3595 431'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<motion.path
					d='M997.091 430C1060.02 430 1113.51 408.179 1151.27 370.418C1189.03 332.656 1211 279.018 1211 215.5C1211 143.674 1184.57 90.0216 1144.8 54.335C1105.04 18.6644 1052.01 1 998.864 1C944.837 1 891.215 18.662 851.086 54.3319C810.939 90.0182 784.364 143.672 784.364 215.5C784.364 287.612 810.043 341.267 849.529 376.885C888.997 412.488 942.18 430 997.091 430ZM997.682 325.686C971.298 325.686 945.533 316.452 926.37 298.093C907.219 279.746 894.594 252.221 894.594 215.5C894.594 177.891 907.367 150.521 926.728 132.548C946.104 114.561 972.164 105.906 998.864 105.906C1024.36 105.906 1049.83 114.99 1068.92 133.204C1088 151.405 1100.77 178.783 1100.77 215.5C1100.77 252.21 1087.71 279.737 1068.33 298.089C1048.94 316.455 1023.17 325.686 997.682 325.686Z'
					stroke='white'
					stroke-width='2'
					style={{ opacity: '1' }}
				/>
				<motion.path
					d='M732.871 8.50391V7.50391H731.871H473.423H472.423V8.50391V422.493V423.493H473.423H737.193H738.193V422.493V323.727V322.727H737.193H582.651V257.306H720.042H721.042V256.306V161.68V160.68H720.042H582.651V103.539H731.871H732.871V102.539V8.50391Z'
					stroke='white'
					stroke-width='2'
					style={{ opacity: '1' }}
				/>
				<motion.path
					d='M409.101 159.724H410.255L410.09 158.581C394.028 47.331 299.999 1 214.525 1C161.376 1 108.198 18.9625 68.295 54.8533C28.3744 90.7598 1.80005 144.558 1.80005 216.091C1.80005 356.312 108.21 430 214.525 430C258.751 430 303.918 418.277 340.053 391.734C376.209 365.175 403.255 323.825 411.274 264.722L411.428 263.587H410.283H306.195H305.414L305.225 264.345C299.661 286.598 288.115 302.794 272.439 313.439C256.749 324.093 236.85 329.234 214.525 329.234C151.945 329.234 112.028 274.843 112.028 215.5C112.028 181.393 122.17 152.665 140.017 132.477C157.853 112.302 183.448 100.583 214.525 100.583C236.586 100.583 255.309 104.702 270.329 114.035C285.333 123.358 296.736 137.941 304.066 159.052L304.299 159.724H305.011H409.101Z'
					stroke='white'
					stroke-width='2'
					style={{ opacity: '1' }}
				/>
				<motion.path
					d='M1767.58 411.535V411.251L1767.43 411.01L1685.55 278.119C1726.82 249.552 1747.13 203.131 1747.73 154.986V154.973C1747.73 117.719 1735.18 80.1322 1709.82 51.8467C1684.44 23.5438 1646.28 4.61473 1595.21 4.61353C1554 4.21289 1513.32 4.34531 1472.3 4.47885C1451.66 4.54605 1430.93 4.61353 1410 4.61353H1409V5.61353V427.193V428.193H1410H1520.04H1521.04V427.193V296.299H1577.17L1649.04 427.673L1649.33 428.193H1649.92H1766.58H1767.58V427.193V411.535ZM1857.75 425.386V426.386H1858.75H2061.39C2104.91 426.386 2138.55 412.306 2161.32 389.047C2184.08 365.794 2195.88 333.457 2195.88 297.106C2195.88 258.753 2178.15 224.448 2144.38 206.58C2165 189.357 2178.44 159.598 2178.44 133.894C2178.44 94.5041 2164.67 62.3104 2141 39.9677C2117.33 17.6312 2083.85 5.21578 2044.55 5.21578H1858.75H1857.75V6.21578V425.386ZM2351.82 428.795H2352.46L2352.73 428.213L2376.51 376.399H2532.78L2557.16 428.221L2557.43 428.795H2558.07H2671.71H2672.71V427.795V412.739V412.518L2672.62 412.317L2481.4 1.57795L2481.14 1H2480.5H2429.99H2429.35L2429.08 1.57469L2236.06 412.314L2235.97 412.516V412.739V427.795V428.795H2236.97H2351.82ZM3071 429.711L3071.29 430H3071.7H3104.17H3105.17V429V6.21578V5.21578H3104.17H2994.13H2993.13V6.21578V209.864L2775.34 3.68284L2775.05 3.40903H2774.66H2740.38H2739.38V4.40903V427.795V428.795H2740.38H2850.42H2851.42V427.795V212.774L3071 429.711ZM3224.96 5.21578H3223.96V6.21578V427.795V428.795H3224.96H3385.51C3455.54 428.795 3508.14 402.029 3542.99 361.902C3577.81 321.797 3594.87 268.406 3593.97 215.196C3593.97 163.186 3576.31 110.698 3541.4 71.1996C3506.48 31.6817 3454.34 5.21578 3385.51 5.21578H3224.96ZM1594.6 204.563H1519.24V102.372H1594.6C1609.94 102.372 1621.07 108.414 1628.39 117.652C1635.74 126.92 1639.3 139.482 1639.3 152.564C1639.3 165.64 1635.59 178.664 1628.16 188.394C1620.75 198.095 1609.61 204.563 1594.6 204.563ZM1969.79 169.632V101.168H2036.74C2047.55 101.168 2055.53 105.689 2060.75 112.448C2066 119.234 2068.5 128.33 2068.21 137.476C2067.91 145.714 2065.12 153.762 2059.89 159.734C2054.67 165.687 2046.98 169.632 2036.74 169.632H1969.79ZM1969.79 328.628V260.766H2052.97C2073.91 260.766 2086.21 278.204 2085.05 297.021C2084.16 305.305 2081.36 313.212 2076.27 319.032C2071.21 324.829 2063.82 328.628 2053.57 328.628H1969.79ZM2497.02 282.254H2412.86L2454.65 184.012L2497.02 282.254ZM3384.31 327.423H3336V106.588H3384.31C3416.46 106.588 3440.84 120.291 3457.19 140.841C3473.56 161.415 3481.93 188.889 3481.93 216.403C3481.93 244.234 3474.01 272.01 3457.86 292.804C3441.73 313.569 3417.37 327.423 3384.31 327.423Z'
					stroke='white'
					stroke-width='2'
					style={{ opacity: '1' }}
				/>
			</svg>
		</motion.div>
	)
}
