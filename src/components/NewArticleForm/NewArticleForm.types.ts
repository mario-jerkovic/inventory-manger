export type NewArticle = {
    name: string,
    quantity: number,
}

export type NewArticleFormProps = {
    /**
     *
     * @default "false"
     */
    isOpen?: boolean,
    /**
     *
     * @default ""
     */
    onClose: () => void,
    /**
     *
     * @default ""
     */
    onSubmit: (newArticle: NewArticle) => void,
}
