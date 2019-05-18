import clsx from 'clsx'
import React from 'react'
import {
    Typography,
} from '@rmwc/typography'
import {
    ListDivider,
    ListItemMeta,
} from '@rmwc/list'

import {
    FormTitleProps,
} from './FormTitle.types'

import './FormTitle.css'

export const FormTitle = React.memo<FormTitleProps>((props) => {
    const {
        children,
        metaIcon,
        onClick,
    } = props

    return (
        <>
            <Typography
                className={clsx('form-title', {
                    'form-title--clickable': Boolean(onClick),
                    'form-title--icon': Boolean(metaIcon),
                })}
                onClick={onClick}
                use="subtitle1"
                tag="div"
                theme="textSecondaryOnBackground"
            >
                {children}
                {metaIcon ? <ListItemMeta icon={metaIcon} /> : null}
            </Typography >
            <ListDivider />
        </>
    )
})
