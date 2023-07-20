import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShopPoint{
    id: number,
    city: string,
    country: string,
    numberHouse: string,
    street: string,
}

interface shopPointState {
    shopPoint: ShopPoint[],
    isLoading: boolean,
}

const initialState: shopPointState = {
    shopPoint: [],
    isLoading: false,
}

export const ShopPointSlice = createSlice({
    name: 'ShopPointSlice',
    initialState,
    reducers: {
        cheked(state, action: PayloadAction<[]>) {
            state.shopPoint = action.payload;
        },

    }
})

export default ShopPointSlice.reducer;