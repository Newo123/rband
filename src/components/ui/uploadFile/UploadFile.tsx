import { fileAccept } from '@/constants/fileAccept.constants'

import { IconComponent } from '../IconComponent/IconComponent'

import classes from './UploadFile.module.scss'
import { UploadFileContent } from './UploadFileContent'
import { UploadFileContentItem } from './UploadFileContentItem'

const items = [
	{
		isPending: false,
		text: 'Документ техническое задание о проекте.pdf'
	},
	{
		isPending: true,
		text: 'Документ техническое задание о проекте.pdf'
	}
]

export function UploadFile() {
	return (
		<div className={classes.upload}>
			<label
				htmlFor='file'
				className={classes.upload__label}
			>
				<IconComponent icon='ant-design:paper-clip-outlined' />
				<div className={classes.upload__text}>
					Прикрепить файл
					<span>0 из 20Мб (0 из 5 файлов: doc, pdf, zip)</span>
				</div>
				<input
					type='file'
					id='file'
					className={classes.upload__input}
					multiple
					hidden
					accept={fileAccept}
				/>
			</label>
			{items.length && (
				<UploadFileContent>
					{items.map((item, index) => (
						<UploadFileContentItem
							key={index}
							{...item}
						/>
					))}
				</UploadFileContent>
			)}
		</div>
	)
}
