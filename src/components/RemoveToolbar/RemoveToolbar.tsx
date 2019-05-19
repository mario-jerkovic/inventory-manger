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
        onBackClick,
        onDeleteClick,
        show,
    } = props

    const transitions = useTransition(show, null, {
        from: {
            opacity: 0,
            transform: 'translate3d(0, -15px, 0)',
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0, 0px, 0)',
        },
        leave: {
            opacity: 0,
            transform: 'translate3d(0, -15px, 0)',
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
                        >
                            <TopAppBarRow >
                                <TopAppBarSection >
                                    <TopAppBarNavigationIcon
                                        icon="arrow_back"
                                        onClick={onBackClick}
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
                                        onClick={onDeleteClick}
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
