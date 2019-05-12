import React from 'react'
import {
    TopAppBar,
    TopAppBarFixedAdjust,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@rmwc/top-app-bar'

import {
    AppBarProps,
} from './AppBar.types'

import './AppBar.css'

export const AppBar = React.memo<AppBarProps>(() => {

    return (
        <>
            <TopAppBar fixed={false} >
                <TopAppBarRow >
                    <TopAppBarSection >
                        <TopAppBarTitle >
                            Inventory manager
                        </TopAppBarTitle >
                    </TopAppBarSection >
                </TopAppBarRow >
            </TopAppBar >
            <TopAppBarFixedAdjust />
        </>
    )
})
