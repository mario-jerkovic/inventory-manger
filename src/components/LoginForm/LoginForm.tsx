import React from 'react'
import {
    Card,
    CardActionButton,
    CardActionButtons,
    CardActions,
    CardMedia,
} from '@rmwc/card'
import {
    TextField,
} from '@rmwc/textfield'

import {
    LoginFormProps,
} from './LoginForm.types'

import './LoginForm.css'
import {
    animated,
    useSpring,
} from 'react-spring'

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
    const {
        onSubmit,
    } = props

    const springStyles = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0, 15px, 0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0, 0px, 0)'
        }
    })

    const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)

        onSubmit({
            email: String(formData.get('email')),
            password: String(formData.get('password')),
        })
    }, [onSubmit])

    return (
        <animated.form
            className="login-form"
            onSubmit={handleSubmit}
            style={springStyles}
        >
            <Card className="login-form__card" >
                <CardMedia
                    sixteenByNine
                    style={{
                        backgroundImage: 'url(https://rmwc.io/images/backgrounds/mb-bg-fb-16.png)',
                    }}
                />
                <div className="login-form__content" >
                    <TextField
                        autoComplete="username"
                        className="login-form__textField"
                        fullwidth={true}
                        placeholder="Email"
                        name="email"
                        required={true}
                        type="email"
                    />
                    <TextField
                        autoComplete="current-password"
                        className="login-form__textField"
                        fullwidth={true}
                        placeholder="Lozinka"
                        name="password"
                        required={true}
                        type="password"
                    />
                </div >
                <CardActions >
                    <CardActionButtons >
                        <CardActionButton
                            type="submit"
                        >
                            Prijava
                        </CardActionButton >
                    </CardActionButtons >
                </CardActions >
            </Card >
        </animated.form >
    )
}
