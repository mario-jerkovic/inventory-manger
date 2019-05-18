import React from 'react'
import {
    Fab as MaterialFab,
} from '@rmwc/fab'
import {
    animated,
    useSpring,
} from 'react-spring'

import {
    FabProps,
} from './Fab.types'

import './Fab.css'

export const Fab = React.memo<FabProps>((props) => {
    const {
        onClick,
    } = props

    const springStyle = useSpring({
        from: {
            transform: 'scale(0)',
        },
        to: {
            transform: 'scale(1)',
        },
    })

    return (
        <animated.div
            className="fab"
            style={springStyle}
        >
            <MaterialFab
                icon="add"
                label="Kreiraj"
                onClick={onClick}
            />
        </ animated.div >
    )
})
