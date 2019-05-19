import React from 'react'
import {
    Redirect,
    RouteComponentProps,
    withRouter,
} from 'react-router-dom'

import {
    Firebase,
    FirebaseContext,
} from '../components/Firebase'
import {
    AuthContext,
} from '../components/Session/AuthContext'
import {
    Login,
    LoginForm,
} from '../components/LoginForm'

import './Login.css'

const LoginPage: React.FunctionComponent<RouteComponentProps> = (props) => {
    const {
        location,
    } = props

    const authContext = React.useContext(AuthContext)
    const firebaseContext: Firebase = React.useContext(FirebaseContext)

    const handleSubmit = React.useCallback((login: Login) => {
        firebaseContext.signInWithEmailAndPassword(login.email, login.password)
    }, [firebaseContext])

    if (authContext.isAuthenticated) {
        return (
            <Redirect
                to={location.state || { from: { pathname: '/' } }}
            />
        )
    }

    return (
        <LoginForm
            onSubmit={handleSubmit}
        />
    )
}

export default withRouter(LoginPage)
