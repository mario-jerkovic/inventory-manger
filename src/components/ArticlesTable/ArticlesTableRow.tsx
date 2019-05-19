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

export const ArticlesTableRow: React.FunctionComponent<ArticlesTableRowProps> = React.memo((props) => {
    const {
        dateTimeOptions,
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
        <DataTableRow
            className="article-table-body__row"
            onClick={selected ? undefined : onClick}
        >
            <DataTableCell
                alignMiddle={true}
                className="article-table-body__cell"
                onClick={handleSelection}
            >
                <Avatar
                    isActive={selected}
                    isError={quantity < 0}
                />
            </DataTableCell >
            <DataTableCell
                alignStart={true}
                className="article-table-body__cell"
            >
                {name}
            </DataTableCell >
            <DataTableCell
                alignEnd={true}
                className="article-table-body__cell"
            >
                {quantity}
            </DataTableCell >
            <DataTableCell
                alignEnd={true}
                className="article-table-body__cell"
            >
                {new Intl.DateTimeFormat(
                    'hr-HR',
                    dateTimeOptions,
                ).format(new Date(modifiedDate))}
            </DataTableCell >
        </DataTableRow >
    )
})

ArticlesTableRow.defaultProps = {
    dateTimeOptions: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    },
}
