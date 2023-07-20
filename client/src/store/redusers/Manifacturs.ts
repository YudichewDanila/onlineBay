import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Manifacturs {
    manifacturs: {
        id: number,
        NameManufacturers: string,
        checked: boolean
    }
}

interface ManifactursState {
    manifacturs: Manifacturs[];
    isLoading: boolean;
    error: string;
}

const initialState: ManifactursState = {
    manifacturs: [],
    isLoading: false,
    error: ''
}

export const ManifactursSlice = createSlice({
    name: 'ManifactursSlice',
    initialState,
    reducers: {
        cheked(state, action: PayloadAction<[]>) {
            state.manifacturs = action.payload;
        }
    }
})

export default ManifactursSlice.reducer;