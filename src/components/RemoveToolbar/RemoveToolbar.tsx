import React from 'react'
import {
    TopAppBar,
    TopAppBarActionItem,
    TopAppBarNavigationIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@rmwc/top-app-bar'
import {
    animated,
    useTransition,
} from 'react-spring'

import {
    RemoveToolbarProps,
} from './RemoveToolbar.types'

import './RemoveToolbar.css'

export const RemoveToolbar: React.FunctionComponent<RemoveToolbarProps> = (props) => {
    const {
        count,
        show,
    } = props

    const transitions = useTransition(show, null, {
        from: {
            position: 'absolute',
            opacity: 0,
            transform: 'translateY(-15px)',
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
        leave: {
            opacity: 0,
            transform: 'translateY(-15px)',
        },
    })

    return (
        <>
            {transitions.map(({ item, key, props: style }) => (
                item && (
                    <animated.div
                        className="remove-toolbar"
                        key={key}
                        style={style}
                    >
                        <TopAppBar
                            fixed={false}
                            theme={['secondaryBg', 'onSecondary']}
                        >
                            <TopAppBarRow >
                                <TopAppBarSection >
                                    <TopAppBarNavigationIcon
                                        icon="arrow_back"
                                    />
                                    <TopAppBarTitle >
                                        {count}
                                    </TopAppBarTitle >
                                </TopAppBarSection >
                                <TopAppBarSection
                                    alignEnd={true}
                                >
                                    <TopAppBarActionItem
                                        icon="delete"
                                    />
                                </TopAppBarSection >
                            </TopAppBarRow >
                        </TopAppBar >
                    </animated.div >
                )
            ))}
        </>
    )
}

RemoveToolbar.defaultProps = {
    count: 0,
}
