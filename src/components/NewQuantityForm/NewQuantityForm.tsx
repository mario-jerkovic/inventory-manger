import React from 'react'
import {
    Button,
} from '@rmwc/button'
import {
    TextField,
} from '@rmwc/textfield'
import {
    CollapsibleList,
    List,
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
    const {
        currentQuantity,
        onSubmit,
    } = props

    const formRef = React.useRef<HTMLFormElement>(null)

    const handleOnSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!formRef.current) {
            return
        }

        const formData = new FormData(formRef.current)

        onSubmit({
            quantity: currentQuantity + Number(formData.get('newQuantity')),
        })

        formRef.current.reset()
    }, [formRef, currentQuantity, onSubmit])


    return (
        <List >
            <CollapsibleList
                handle={
                    <FormTitle metaIcon="chevron_right" >
                        Nova količina
                    </FormTitle >
                }
            >
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
                        value={currentQuantity}
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
            </CollapsibleList >
        </List >
    )
}

NewQuantityForm.defaultProps = {}
