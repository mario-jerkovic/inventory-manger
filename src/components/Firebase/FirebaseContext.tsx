import React from 'react'
import { FirebaseProviderProps } from './Firebase.types'

import { Firebase } from './Firebase'

// @ts-ignore
export const FirebaseContext = React.createContext<Firebase>(null)

export const FirebaseProvider: React.FunctionComponent<FirebaseProviderProps> = (props) => {
    const {
        authDomain,
        apiKey,
        children,
        databaseURL,
    } = props

    return (
        <FirebaseContext.Provider value={new Firebase(apiKey, authDomain, databaseURL)} >
            {children}
        </FirebaseContext.Provider >
    )
}
