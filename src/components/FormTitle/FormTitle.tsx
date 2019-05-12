import React from 'react'
import {
    Typography,
} from '@rmwc/typography'

import {
    FormTitleProps,
} from './FormTitle.types'

import './FormTitle.css'

export const FormTitle = React.memo<FormTitleProps>((props) => {
    const {
        children,
    } = props

    return (
        <Typography
            className="form-title"
            use="subtitle1"
            tag="div"
            theme="textSecondaryOnBackground"
        >
            {children}
        </Typography >
    )
})
