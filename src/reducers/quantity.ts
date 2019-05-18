type State = {
    price: number,
    totalAmount: number,
    remainingQuantity: number,
}

type UpdatePriceAction = {
    type: 'update_price',
    payload: {
        price: number,
        quantity: number,
    },
}

type UpdateTotalAmount = {
    type: 'update_total_amount',
    payload: {
        totalAmount: number,
        quantity: number,
    },
}

type Action =
    UpdatePriceAction |
    UpdateTotalAmount

function calculate(price: number, totalPrice: number, quantity: number) {
    return Math.round((quantity - (totalPrice / price)) * 100) / 100
}

export function quantityReducer(state: State, action: Action): State {
    let remainingQuantity: number

    switch (action.type) {
        case 'update_price':
            remainingQuantity = calculate(action.payload.price, state.totalAmount, action.payload.quantity)

            return {
                ...state,
                price: action.payload.price,
                remainingQuantity: Number.isFinite(remainingQuantity) ? remainingQuantity : action.payload.quantity,
            }
        case 'update_total_amount':
            remainingQuantity = calculate(state.price, action.payload.totalAmount, action.payload.quantity)

            return {
                ...state,
                totalAmount: action.payload.totalAmount,
                remainingQuantity: Number.isFinite(remainingQuantity) ? remainingQuantity : action.payload.quantity,
            }
        default:
            throw new Error(`Unknown action for quantityReducer: ${action}`)
    }
}
