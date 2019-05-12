import React from 'react'
import {
    Icon,
} from '@rmwc/icon'
import {
    Theme,
} from '@rmwc/theme'
import {
    animated,
    useSpring,
    useChain,
} from 'react-spring'

import {
    AvatarProps,
} from './Avatar.types'

import './Avatar.css'

export const Avatar = React.memo<AvatarProps>((props) => {
    const {
        isActive,
    } = props

    const avatarSpringRef = React.useRef<any>(null)
    const checkSpringRef = React.useRef<any>(null)

    const avatarSpringStyles = {
        transform: `rotateY(${isActive ? '180deg' : '0deg'})`,
    }

    const checkSpringStyles = {
        opacity: isActive ? 1 : 0,
    }

    const avatarStyles = useSpring({
        ref: avatarSpringRef,
        from: avatarSpringStyles,
        to: avatarSpringStyles,
    })

    const checkStyles = useSpring({
        ref: checkSpringRef,
        from: checkSpringStyles,
        to: checkSpringStyles,
    })

    useChain(
        isActive ? [avatarSpringRef, checkSpringRef] : [checkSpringRef, avatarSpringRef],
        [0, 0.25],
    )

    return (
        <animated.div
            className="avatar"
            style={avatarStyles}
        >
            <Theme
                use={['primaryBg', 'onPrimary']}
                wrap={true}
            >
                <div className="avatar__item avatar__item--front" />
            </Theme >
            <Theme
                use={['secondaryBg', 'onSecondary']}
                wrap={true}
            >
                <div className="avatar__item avatar__item--back" >
                    <animated.div
                        className="avatar__icon"
                        style={checkStyles}
                    >
                        <Icon icon="check" />
                    </animated.div >
                </div >
            </Theme >
        </animated.div >
    )
})
