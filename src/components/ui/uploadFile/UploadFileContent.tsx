import { PropsWithChildren } from 'react'

import classes from './UploadFile.module.scss'

export function UploadFileContent({ children }: PropsWithChildren) {
	return <div className={classes.upload__content}>{children}</div>
}
