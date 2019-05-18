type State = {
    selectedArticleIds: string[],
}

type SelectAction = {
    type: 'select',
    payload: string,
}

type Deselect = {
    type: 'deselect',
    payload: string,
}

type DeselectAllAction = {
    type: 'deselect_all'
}

type Action =
    Deselect |
    DeselectAllAction |
    SelectAction

export function articlesTableReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'deselect':
            return {
                ...state,
                selectedArticleIds: state.selectedArticleIds.filter((selectedArticleId) => (
                    selectedArticleId !== action.payload
                )),
            }
        case 'deselect_all':
            return {
                ...state,
                selectedArticleIds: [],
            }
        case 'select':
            return {
                ...state,
                selectedArticleIds: (
                    state.selectedArticleIds.includes(action.payload) ? (
                        state.selectedArticleIds.filter((selectedArticleId) => (
                            selectedArticleId !== action.payload
                        ))
                    ) : [...state.selectedArticleIds, action.payload]
                ),
            }
        default:
            throw new Error(`Unknown action for articlesTableReducer: ${action}`)
    }
}
