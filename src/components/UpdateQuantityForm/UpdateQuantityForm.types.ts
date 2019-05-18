export type UpdatedQuantity = {
    quantity: number,
}

export type UpdateQuantityFormProps = {
    /**
     *
     * @default ""
     */
    currentQuantity: number,
    /**
     *
     * @default ""
     */
    onSubmit: (updatedQuantity: UpdatedQuantity) => void,
}
