import React from 'react'
import {
    Button,
} from '@rmwc/button'
import {
    TextField,
} from '@rmwc/textfield'
import {
    ListDivider,
} from '@rmwc/list'

import {
    NewQuantityFormProps,
} from './NewQuantityForm.types'
import {
    FormSpacer,
} from '../FormSpacer'
import {
    FormTitle,
} from '../FormTitle'

import './NewQuantityForm.css'

export const NewQuantityForm: React.FunctionComponent<NewQuantityFormProps> = (props) => {
    const formRef = React.useRef<HTMLFormElement>(null)

    const handleOnSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!formRef.current) {
            return
        }

        const formData = new FormData(formRef.current)

        formData.forEach((value, key) => {
            console.log(key, value)
        })

        formRef.current.reset()
    }, [formRef])


    return (
        <>
            <FormTitle >
                Nova količina
            </FormTitle >
            <ListDivider />
            <form
                className="new-quantity__form"
                onSubmit={handleOnSubmit}
                ref={formRef}
            >
                <TextField
                    disabled={true}
                    label="Trenutna količina"
                    name="currentQuantity"
                    outlined={true}
                />
                <FormSpacer />
                <TextField
                    label="Nova količina"
                    name="newQuantity"
                    outlined={true}
                    required={true}
                    step="any"
                    type="number"
                />
                <FormSpacer />
                <div className="new-quantity__action" >
                    <Button
                        label="Spremi"
                        outlined={true}
                        type="submit"
                    />
                </div >
            </form >
        </>
    )
}

NewQuantityForm.defaultProps = {}
