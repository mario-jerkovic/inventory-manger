import React from 'react'
import {
    Link,
} from 'react-router-dom'

import './Login.css'

const Login: React.FunctionComponent<{}> = () => {

    return (
        <>
            Login page
            <Link to="/articles" >
                Articles
            </Link >
        </>
    )
}

export default Login
