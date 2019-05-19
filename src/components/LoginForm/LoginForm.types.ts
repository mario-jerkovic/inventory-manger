export type Login = {
    email: string,
    password: string,
}

export type LoginFormProps = {
    /**
     *
     * @default
     */
    onSubmit: (login: Login) => void,
}
