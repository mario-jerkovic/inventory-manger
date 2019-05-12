export type ArticlesTableProps = {}

export type ArticlesTableRowProps = {
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
