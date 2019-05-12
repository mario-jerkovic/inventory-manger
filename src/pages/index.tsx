import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'

import LoginPage from './Login'
import ArticlesPage from './Articles'

export const App: React.FunctionComponent<{}> = () => {

    return (
        <Switch >
            <Route
                path="/"
                exact={true}
                component={LoginPage}
            />
            <Route
                path="/articles"
                component={ArticlesPage}
            />
        </Switch >
    )
}
