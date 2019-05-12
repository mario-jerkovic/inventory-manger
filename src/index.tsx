import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@rmwc/theme'

import { App } from './pages'
import { register } from './serviceWorker'
import { FirebaseProvider } from './components/Firebase'

import './index.css'

ReactDOM.render(
    <FirebaseProvider
        authDomain={process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}
        apiKey={process.env.REACT_APP_FIREBASE_API_KEY}
        databaseURL={process.env.REACT_APP_FIREBASE_DATABASE_URL}
    >
        <ThemeProvider
            className="app-root"
            options={{}}
            tag="div"
        >
            <App />
        </ThemeProvider >
    </FirebaseProvider >,
    document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register()
