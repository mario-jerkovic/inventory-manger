export type NewQuantity = {
    quantity: number,
}

export type NewQuantityFormProps = {
    /**
     *
     * @default ""
     */
    currentQuantity: number,
    /**
     *
     * @default ""
     */
    onSubmit: (newQuantity: NewQuantity) => void
}
