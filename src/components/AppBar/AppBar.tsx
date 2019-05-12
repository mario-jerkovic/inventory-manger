import React from 'react'
import {
    TopAppBar,
    TopAppBarFixedAdjust,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@rmwc/top-app-bar'
import {
    animated,
    useSpring,
} from 'react-spring'

import {
    AppBarProps,
} from './AppBar.types'

import './AppBar.css'

export const AppBar = React.memo<AppBarProps>(() => {

    const springStyle = useSpring({
        from: {
            transform: 'translate3d(0, -100%, 0)',
        },
        to: {
            transform: 'translate3d(0, 0%, 0)',
        },
    })

    return (
        <>
            <animated.div
                className="app-bar"
                style={springStyle}
            >
                <TopAppBar
                    fixed={false}
                    className="app-bar__item"
                >
                    <TopAppBarRow >
                        <TopAppBarSection >
                            <TopAppBarTitle >
                                Inventory manager
                            </TopAppBarTitle >
                        </TopAppBarSection >
                    </TopAppBarRow >
                </TopAppBar >
            </animated.div >
            <TopAppBarFixedAdjust />
        </>
    )
})
