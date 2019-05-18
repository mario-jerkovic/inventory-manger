export type ArticlesTableProps = {}

export type ArticlesTableRowProps = {
    /**
     *
     * @default {
     *  day: 'numeric',
     *  month: 'numeric',
     *  year: 'numeric',
     *  hour: 'numeric',
     *  minute: 'numeric',
     * }
     */
    dateTimeOptions?: Intl.DateTimeFormatOptions,
    /**
     *
     * @default ""
     */
    modifiedDate: string,
    /**
     *
     * @default ""
     */
    name: string,
    /**
     *
     */
    onClick?: () => void,
    /**
     *
     * @default ""
     */
    onSelection?: () => void,
    /**
     *
     * @default "false"
     */
    selected?: boolean,
    /**
     *
     * @default ""
     */
    quantity: number,
}
