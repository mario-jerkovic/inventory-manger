import React from 'react'
import {
    DataTable,
    DataTableBody,
    DataTableContent,
    DataTableHead,
    DataTableHeadCell,
    DataTableRow,
} from '@rmwc/data-table'
import {
    animated,
    useSpring,
} from 'react-spring'

import {
    ArticlesTableProps,
} from './ArticlesTable.types'

import './ArticlesTable.css'

export const ArticlesTable: React.FunctionComponent<ArticlesTableProps> = (props) => {
    const {
        children,
    } = props

    const springStyle = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0, 5%, 0)',
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0, 0%, 0)',
        },
    })

    return (
        <animated.div
            className="article-table__container"
            style={springStyle}
        >
            <DataTable
                stickyRows={1}
                stickyColumns={1}
                className="article-table"
            >
                <DataTableContent className="article-table__content" >
                    <DataTableHead >
                        <DataTableRow >
                            <DataTableHeadCell
                                alignMiddle={true}
                                className="article-table-head-image__cell article-table-head__cell"
                            />
                            <DataTableHeadCell
                                alignStart={true}
                                className="article-table-head__cell"
                            >
                                Naziv artikla
                            </DataTableHeadCell >
                            <DataTableHeadCell
                                alignEnd={true}
                                className="article-table-head__cell"
                            >
                                Stanje (kg)
                            </DataTableHeadCell >
                            <DataTableHeadCell
                                alignEnd={true}
                                className="article-table-head__cell"
                            >
                                Datum izmjenje
                            </DataTableHeadCell >
                        </DataTableRow >
                    </DataTableHead >
                    <DataTableBody >
                        {children}
                    </DataTableBody >
                </DataTableContent >
            </DataTable >
        </animated.div >
    )
}

ArticlesTable.defaultProps = {}
