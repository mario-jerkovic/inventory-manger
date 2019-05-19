import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'

import {
    AuthRoute,
} from '../components/Session/AuthRoute'

import LoginPage from './Login'
import ArticlesPage from './Articles'

export const App: React.FunctionComponent<{}> = () => {

    return (
        <Switch >
            <AuthRoute
                path="/"
                exact={true}
                component={ArticlesPage}
            />
            <Route
                path="/login"
                component={LoginPage}
            />
        </Switch >
    )
}
