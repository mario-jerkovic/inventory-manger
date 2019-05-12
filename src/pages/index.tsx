import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'

const LoginPage = React.lazy(() => import('./Login'))
const ArticlesPage = React.lazy(() => import('./Articles'))

export const App: React.FunctionComponent<{}> = () => {
    return (
        <BrowserRouter >
            <React.Suspense fallback={<div >Loading...</div >} >
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
            </React.Suspense >
        </BrowserRouter >
    )
}
