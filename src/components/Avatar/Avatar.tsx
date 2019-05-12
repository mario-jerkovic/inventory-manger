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

    const avatarSlide = {
        transform: `rotateY(${isActive ? '180deg' : '0deg'})`,
    }

    const checkFade = {
        opacity: isActive ? 1 : 0,
    }

    const avatarSpringStyle = useSpring({
        ref: avatarSpringRef,
        from: avatarSlide,
        to: avatarSlide,
    })

    const checkSpringStyle = useSpring({
        ref: checkSpringRef,
        from: checkFade,
        to: checkFade,
    })

    useChain(
        isActive ? [avatarSpringRef, checkSpringRef] : [checkSpringRef, avatarSpringRef],
        isActive ? [0, 0.25] : [0, 0.10],
    )

    return (
        <animated.div
            className="avatar"
            style={avatarSpringStyle}
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
                        style={checkSpringStyle}
                    >
                        <Icon icon="check" />
                    </animated.div >
                </div >
            </Theme >
        </animated.div >
    )
})
