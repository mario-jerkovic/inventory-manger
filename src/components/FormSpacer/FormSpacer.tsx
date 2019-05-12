import React from 'react'

import {
    FormSpacerProps,
} from './FormSpacer.types'

import './FormSpacer.css'

export const FormSpacer = React.memo<FormSpacerProps>(() => {

    return (
        <span className="form-spacer" />
    )
})
