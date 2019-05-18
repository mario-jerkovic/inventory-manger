type State = {
    isDialogOpen: boolean,
}

type CloseModal = {
    type: 'close'
}

type OpenModal = {
    type: 'open'
}

type Action =
    CloseModal |
    OpenModal

export function articleDialogReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'close':
            return {
                ...state,
                isDialogOpen: false,
            }
        case 'open':
            return {
                ...state,
                isDialogOpen: true,
            }
        default:
            throw new Error(`Unknown action for articleDialogReducer: ${action}`)

    }
}
