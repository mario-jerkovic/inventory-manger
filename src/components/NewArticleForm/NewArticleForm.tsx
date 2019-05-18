import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogButton,
    DialogContent,
    DialogTitle,
} from '@rmwc/dialog'
import {
    TextField,
} from '@rmwc/textfield'

import {
    NewArticleFormProps,
} from './NewArticleForm.types'
import { FormSpacer } from '../FormSpacer'

import './NewArticleForm.css'

export const NewArticleForm: React.FunctionComponent<NewArticleFormProps> = (props) => {
    const {
        isOpen,
        onClose,
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
            name: String(formData.get('name')),
            quantity: Number(formData.get('quantity')),
        })

        formRef.current.reset()
    }, [formRef, onSubmit])

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
        >
            {isOpen ? (
                <form
                    ref={formRef}
                    onSubmit={handleOnSubmit}
                >
                    <DialogTitle >
                        Novi artikl
                    </DialogTitle >
                    <DialogContent >
                        <div className="new-article__container" >
                            <TextField
                                label="Naziv artikla"
                                name="name"
                                outlined={true}
                                required={true}
                                type="text"
                            />
                            <FormSpacer />
                            <TextField
                                label="Količina"
                                name="quantity"
                                outlined={true}
                                required={true}
                                step="any"
                                type="number"
                            />
                        </div >
                    </DialogContent >
                    <DialogActions >
                        <DialogButton
                            action="close"
                            type="button"
                        >
                            Odustani
                        </DialogButton >
                        <DialogButton
                            type="submit"
                            isDefaultAction={true}
                        >
                            Spremi
                        </DialogButton >
                    </DialogActions >
                </form >
            ) : null}
        </Dialog >
    )
}

NewArticleForm.defaultProps = {}
