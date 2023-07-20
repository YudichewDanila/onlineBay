import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Products{
id: number,
CountProducts: number,
DescriptionProduct: string,
ImgProducts: string,
NameProduct: string,
PriceProducts: number,
}

interface serch {
    products: Products[],
    isLoading: boolean,
}

const initialState: serch = {
    products: [],
    isLoading: false,
}

export const SerchSlice = createSlice({
    name: 'SerchSlice',
    initialState,
    reducers: {
        cheked(state, action: PayloadAction<[]>) {
            state.products = action.payload;
        },

    }
})

export default SerchSlice.reducer;