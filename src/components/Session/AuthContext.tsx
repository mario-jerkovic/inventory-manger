import React from 'react'

import {
    AuthContextProps,
} from './Session.types'
import {
    Firebase,
    FirebaseContext,
} from '../Firebase'
import {
    Loading,
} from '../Loading'

export const AuthContext = React.createContext<AuthContextProps>({ isAuthenticated: false })

export const AuthProvider: React.FunctionComponent<{}> = (props) => {
    const {
        children,
    } = props

    const [isLoading, setLoading] = React.useState<boolean>(true)
    const [authContext, setAuthContext] = React.useState<AuthContextProps>({ isAuthenticated: false })

    const firebaseContext: Firebase = React.useContext(FirebaseContext)

    React.useEffect(() => {
        const listener = firebaseContext.onAuthUserListener(
            () => {
                setAuthContext({ isAuthenticated: true })
                setLoading(false)
            },
            () => {
                setAuthContext({ isAuthenticated: false })
                setLoading(false)
            },
        )

        return () => {
            listener()
        }
    }, [firebaseContext])

    return (
        <AuthContext.Provider value={authContext} >
            <Loading show={isLoading} />
            {!isLoading ? children : null}
        </AuthContext.Provider >
    )
}
