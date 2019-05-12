import React from 'react'
import {
    DataTableCell,
    DataTableRow,
} from '@rmwc/data-table'

import {
    ArticlesTableRowProps,
} from './ArticlesTable.types'
import {
    Avatar,
} from '../Avatar'

export const ArticlesTableRow = React.memo<ArticlesTableRowProps>((props) => {
    const {
        modifiedDate,
        name,
        onClick,
        onSelection,
        selected,
        quantity,
    } = props

    const handleSelection = React.useCallback((event: React.MouseEvent<any, MouseEvent>) => {
        event.stopPropagation()

        onSelection && onSelection()
    }, [onSelection])


    return (
        <DataTableRow onClick={selected ? undefined : onClick} >
            <DataTableCell
                alignMiddle={true}
                className="table-body__cell"
                onClick={handleSelection}
            >
                <Avatar
                    isActive={selected}
                />
            </DataTableCell >
            <DataTableCell
                alignStart={true}
                className="table-body__cell"
            >
                {name}
            </DataTableCell >
            <DataTableCell
                alignEnd={true}
                className="table-body__cell"
            >
                {quantity}
            </DataTableCell >
            <DataTableCell
                alignEnd={true}
                className="table-body__cell"
            >
                {new Date(modifiedDate).toLocaleString()}
            </DataTableCell >
        </DataTableRow >
    )
})
