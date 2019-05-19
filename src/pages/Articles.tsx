import React from 'react'
import {
    useObject,
} from 'react-firebase-hooks/database'

import {
    Article,
} from '../@types/Article'
import {
    Firebase,
    FirebaseContext,
} from '../components/Firebase'
import {
    AppBar,
} from '../components/AppBar'
import {
    ArticlesTable,
    ArticlesTableRow,
} from '../components/ArticlesTable'
import {
    Drawer,
} from '../components/Drawer'
import {
    Fab,
} from '../components/Fab'
import {
    NewQuantity,
    NewQuantityForm,
} from '../components/NewQuantityForm'
import {
    UpdatedQuantity,
    UpdateQuantityForm,
} from '../components/UpdateQuantityForm'
import {
    NewArticle,
    NewArticleForm,
} from '../components/NewArticleForm'
import {
    RemoveToolbar,
} from '../components/RemoveToolbar'
import {
    Loading,
} from '../components/Loading'
import {
    articleDrawerReducer,
} from '../reducers/articleDrawer'
import {
    articleDialogReducer,
} from '../reducers/articleDialog'
import {
    articlesTableReducer,
} from '../reducers/articlesTable'

import './Articles.css'

const Articles: React.FunctionComponent<{}> = () => {

    const [articleDialogState, articleDialogDispatch] = React.useReducer(articleDialogReducer, {
        isDialogOpen: false,
    })

    const [articleDrawerState, articleDrawerDispatch] = React.useReducer(articleDrawerReducer, {
        articleId: null,
        isDrawerOpen: false,
    })

    const [articlesTableState, articlesTableDispatch] = React.useReducer(articlesTableReducer, {
        selectedArticleIds: [],
    })

    const {
        isDialogOpen,
    } = articleDialogState

    const {
        articleId,
        isDrawerOpen,
    } = articleDrawerState

    const {
        selectedArticleIds,
    } = articlesTableState

    const firebaseContext: Firebase = React.useContext(FirebaseContext)

    const {
        error,
        loading,
        value,
    } = useObject(firebaseContext.articlesRef())

    const handleDrawerOpen = React.useCallback((articleId: string) => () => {
        articleDrawerDispatch({
            type: 'open',
            payload: articleId,
        })
    }, [])

    const handleDrawerClose = React.useCallback(() => {
        articleDrawerDispatch({ type: 'close' })
    }, [])

    const handleDialogOpen = React.useCallback(() => {
        articleDialogDispatch({ type: 'open' })
    }, [])

    const handleDialogClose = React.useCallback(() => {
        articleDialogDispatch({ type: 'close' })
    }, [])

    const handleBackClick = React.useCallback(() => {
        articlesTableDispatch({ type: 'deselect_all' })
    }, [])

    const handleDeleteClick = React.useCallback(() => {
        selectedArticleIds.map((selectedArticleId) => (
            firebaseContext.removeArticle(selectedArticleId).then(() => (
                articlesTableDispatch({
                    type: 'deselect',
                    payload: selectedArticleId,
                })
            ))
        ))
    }, [selectedArticleIds, firebaseContext])

    const handleRowSelection = React.useCallback((articleId: string) => () => {
        articlesTableDispatch({
            type: 'select',
            payload: articleId,
        })
    }, [])

    /**
     * Handler for creation of new article
     *
     * after article is created we are closing the form dialog
     */
    const handleNewArticleSubmit = React.useCallback(async (newArticle: NewArticle) => {
        await firebaseContext.createArticle(
            newArticle.name,
            newArticle.quantity,
        )

        handleDialogClose()
    }, [firebaseContext, handleDialogClose])

    /**
     * Handler for updating currently selected article
     *
     * after article quantity is updated we are closing the drawer
     */
    const handleArticleQuantity = React.useCallback(async (quantityResult: NewQuantity | UpdatedQuantity) => {
        if (!articleId) {
            return
        }

        await firebaseContext.updateArticleQuantity(articleId, quantityResult.quantity)

        handleDrawerClose()
    }, [articleId, firebaseContext, handleDrawerClose])

    if (error) {
        return (
            <div >
                {error.code}
                {error.name}
                {error.message}
            </div >
        )
    }

    let articleCollections: null | { [key: string]: Article } = null

    if (value) {
        articleCollections = value.val() || {}
    }

    let selectedArticle: null | Article = null

    if (articleId && articleCollections) {
        selectedArticle = articleCollections[articleId]
    }

    return (
        <>
            <AppBar />
            <RemoveToolbar
                count={selectedArticleIds.length}
                onBackClick={handleBackClick}
                onDeleteClick={handleDeleteClick}
                show={selectedArticleIds.length > 0}
            />
            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleDrawerClose}
                title={selectedArticle ? selectedArticle.name : ''}
            >
                <UpdateQuantityForm
                    currentQuantity={selectedArticle ? selectedArticle.quantity : 0}
                    onSubmit={handleArticleQuantity}
                />
                <NewQuantityForm
                    currentQuantity={selectedArticle ? selectedArticle.quantity : 0}
                    onSubmit={handleArticleQuantity}
                />
            </Drawer >
            <div className="articles__layout" >
                <Loading show={loading} />
                {(!loading && articleCollections) && (
                    <ArticlesTable >
                        {Object.entries<Article>(articleCollections)
                            .map(([key, { name, modifiedDate, quantity }]) => (
                                <ArticlesTableRow
                                    key={key}
                                    modifiedDate={modifiedDate}
                                    name={name}
                                    onClick={handleDrawerOpen(key)}
                                    onSelection={handleRowSelection(key)}
                                    selected={selectedArticleIds.includes(key)}
                                    quantity={quantity}
                                />
                            ))}
                    </ArticlesTable >
                )}
            </div >
            <NewArticleForm
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                onSubmit={handleNewArticleSubmit}
            />
            <Fab
                onClick={handleDialogOpen}
            />
        </>
    )
}

export default Articles
