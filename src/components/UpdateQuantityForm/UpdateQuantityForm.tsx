import React from 'react'
import {
    Button,
} from '@rmwc/button'
import {
    TextField,
} from '@rmwc/textfield'

import {
    UpdateQuantityFormProps,
} from './UpdateQuantityForm.types'
import {
    FormSpacer,
} from '../FormSpacer'
import {
    FormTitle,
} from '../FormTitle'

import {
    quantityReducer,
} from '../../reducers/quantity'

import './UpdateQuantityForm.css'

export const UpdateQuantityForm: React.FunctionComponent<UpdateQuantityFormProps> = (props) => {
    const {
        currentQuantity,
        onSubmit,
    } = props

    const [state, dispatch] = React.useReducer(quantityReducer, {
        price: 0,
        totalAmount: 0,
        remainingQuantity: currentQuantity,
    })

    const formRef = React.useRef<HTMLFormElement>(null)

    const handleOnSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!formRef.current) {
            return
        }

        onSubmit({
            quantity: state.remainingQuantity,
        })

        formRef.current.reset()
    }, [formRef, state.remainingQuantity, onSubmit])

    const handlePriceChange = React.useCallback((event: React.FormEvent<any>) => {
        dispatch({
            type: 'update_price',
            payload: {
                quantity: currentQuantity,
                // @ts-ignore
                price: Number(event.target.value),
            },
        })
    }, [currentQuantity])

    const handleTotalAmountChange = React.useCallback((event: React.FormEvent<any>) => {
        dispatch({
            type: 'update_total_amount',
            payload: {
                quantity: currentQuantity,
                // @ts-ignore
                totalAmount: Number(event.target.value),
            },
        })
    }, [currentQuantity])

    return (
        <>
            <FormTitle >
                Uređivanje stanja
            </FormTitle >
            <form
                className="update-quantity__form"
                onSubmit={handleOnSubmit}
                ref={formRef}
            >
                <TextField
                    label="Cijena artikla"
                    name="price"
                    outlined={true}
                    onChange={handlePriceChange}
                    required={true}
                    step="any"
                    type="number"
                />
                <FormSpacer />
                <TextField
                    label="Ukupan iznos"
                    name="totalAmount"
                    outlined={true}
                    onChange={handleTotalAmountChange}
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
                    value={state.remainingQuantity}
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
