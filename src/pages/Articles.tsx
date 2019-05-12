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
    NewQuantityForm,
} from '../components/NewQuantityForm'
import {
    UpdateQuantityForm,
} from '../components/UpdateQuantityForm'

import './Articles.css'
import { Fab } from '@rmwc/fab'
import { NewArticleForm } from '../components/NewArticleForm'
import { RemoveToolbar } from '../components/RemoveToolbar'

const Articles: React.FunctionComponent<{}> = () => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [forRemoval, setForRemoval] = React.useState<string[]>([])
    const firebaseContext: Firebase = React.useContext(FirebaseContext)

    const {
        error,
        loading,
        value,
    } = useObject(firebaseContext.articlesRef())

    const handleOpenDrawer = React.useCallback(() => {
        setIsDrawerOpen(true)
    }, [])

    const handleCloseDrawer = React.useCallback(() => {
        setIsDrawerOpen(false)
    }, [])

    const handleDialogOpen = React.useCallback(() => {
        setIsDialogOpen(true)
    }, [])

    const handleDialogClose = React.useCallback(() => {
        setIsDialogOpen(false)
    }, [])

    const handleRowSelection = React.useCallback((key: string) => (
        () => {
            if (forRemoval.includes(key)) {
                setForRemoval(forRemoval.filter((forRemovalKey) => (
                    forRemovalKey !== key
                )))
            } else {
                setForRemoval([...forRemoval, key])
            }
        }
    ), [forRemoval])

    if (loading) {
        return (
            <div >
                Loading data...
            </div >
        )
    }

    if (error) {
        return (
            <div >
                {error.code}
                {error.name}
                {error.message}
            </div >
        )
    }

    if (!value) {
        return (
            <div >
                No data...
            </div >
        )
    }

    return (
        <>
            <AppBar
            />
            <RemoveToolbar
                count={forRemoval.length}
                show={forRemoval.length > 0}
            />
            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                title="ToDo"
            >
                <UpdateQuantityForm
                />
                <NewQuantityForm
                />
            </Drawer >
            <div className="articles__layout" >
                <ArticlesTable >
                    {Object.entries<Article>(value.val()).map(([key, article]) => (
                        <ArticlesTableRow
                            key={key}
                            modifiedDate={article.modifiedDate}
                            name={article.name}
                            onClick={handleOpenDrawer}
                            onSelection={handleRowSelection(key)}
                            selected={forRemoval.includes(key)}
                            quantity={article.quantity}
                        />
                    ))}
                </ArticlesTable >
            </div >
            <NewArticleForm
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
            />
            <Fab
                className="articles__fab"
                icon="add"
                label="Kreiraj"
                onClick={handleDialogOpen}
            />
        </>
    )
}

export default Articles
