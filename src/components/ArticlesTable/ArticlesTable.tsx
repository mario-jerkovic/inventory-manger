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
    ArticlesTableProps,
} from './ArticlesTable.types'

import './ArticlesTable.css'

export const ArticlesTable: React.FunctionComponent<ArticlesTableProps> = (props) => {
    const {
        children,
    } = props

    return (
        <DataTable
            stickyRows={1}
            stickyColumns={1}
            className="table"
        >
            <DataTableContent className="table__content" >
                <DataTableHead >
                    <DataTableRow >
                        <DataTableHeadCell
                            alignMiddle={true}
                            className="table-head-image__cell table-head__cell"
                        />
                        <DataTableHeadCell
                            alignStart={true}
                            className="table-head__cell"
                        >
                            Naziv artikla
                        </DataTableHeadCell >
                        <DataTableHeadCell
                            alignEnd={true}
                            className="table-head__cell"
                        >
                            Stanje (kg)
                        </DataTableHeadCell >
                        <DataTableHeadCell
                            alignEnd={true}
                            className="table-head__cell"
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
    )
}

ArticlesTable.defaultProps = {}
