import React from 'react'
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom'

import {
    AuthContext,
} from './AuthContext'

export const AuthRoute: React.FunctionComponent<RouteProps> = (props) => {
    const {
        component: Component,
        ...other
    } = props

    const authContext = React.useContext(AuthContext)

    return (
        <Route
            {...other}
            render={props =>
                authContext.isAuthenticated && Component ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                )
            }
        />
    )
}
