import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../app/api'

export interface ProductState {
    products: { [id: string]: Product }
}
const initialState: ProductState = {
    products: {}
}
const ProductState = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default ProductState.reducer