type State = {
    articleId: null | string,
    isDrawerOpen: boolean,
}

type CloseDrawer = {
    type: 'close'
}

type OpenDrawer = {
    type: 'open',
    payload: string,
}

type Action =
    CloseDrawer |
    OpenDrawer

export function articleDrawerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'close':
            return {
                ...state,
                articleId: null,
                isDrawerOpen: false,
            }
        case 'open':
            return {
                ...state,
                articleId: action.payload,
                isDrawerOpen: true,
            }
        default:
            throw new Error(`Unknown action for articleDrawerReducer: ${action}`)
    }
}
