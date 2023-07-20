import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShopCartData {
    CountProduct: any;
    IdProducts: any;
    id: number,
    CartData: {
        CountProduct: number
        IdProducts: {
            CountProducts: number,
            DescriptionProduct: string,
            ImgProducts: string,
            NameProduct: string,
            PriceProducts: number,
            id: number
        },
        IdShopingCart: { id: number },
    }
}

interface shopCartState {
    shopCart: ShopCartData[],
    isLoading: boolean,
}

const initialState: shopCartState = {
    shopCart: [],
    isLoading: false,
}



export const ShopCartSlice = createSlice({
    name: 'ShopCartSlice',
    initialState,
    reducers: {
        cheked(state, action: PayloadAction<[]>) {
            state.isLoading = true;
            state.shopCart = action.payload;
            state.isLoading = false;
        },
        isLoad(state){
            state.isLoading = true; 
        },
        plusCount(state, action: PayloadAction<{ id, countProducts, maxCount }>) {
            state.shopCart = state.shopCart.map(item => {
                if (item.id == action.payload.id) {
                    if(action.payload.countProducts <= 1){
                        return {...item, CountProduct:1 }
                    }
                    if(action.payload.countProducts >= action.payload.maxCount){
                        return {...item, CountProduct:action.payload.maxCount }
                    }
                    return {...item, CountProduct:action.payload.countProducts }
                }
                return item;
            });
        },
    }
})

export default ShopCartSlice.reducer;