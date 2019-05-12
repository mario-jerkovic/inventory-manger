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
    UpdateQuantityFormProps,
} from './UpdateQuantityForm.types'
import {
    FormSpacer,
} from '../FormSpacer'
import {
    FormTitle,
} from '../FormTitle'

import './UpdateQuantityForm.css'

export const UpdateQuantityForm: React.FunctionComponent<UpdateQuantityFormProps> = (props) => {
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
                Uređivanje stanja
            </FormTitle >
            <ListDivider />
            <form
                className="update-quantity__form"
                onSubmit={handleOnSubmit}
                ref={formRef}
            >
                <TextField
                    label="Cijena artikla"
                    name="price"
                    outlined={true}
                    required={true}
                    step="any"
                    type="number"
                />
                <FormSpacer />
                <TextField
                    label="Ukupan iznos"
                    name="totalAmount"
                    outlined={true}
                    required={true}
                    step="any"
                    type="number"
                />
                <FormSpacer />
                <TextField
                    disabled={true}
                    label="Preostala količina"
                    name="remainingQuantity"
                    outlined={true}
                />
                <FormSpacer />
                <div className="update-quantity__action" >
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

UpdateQuantityForm.defaultProps = {}
