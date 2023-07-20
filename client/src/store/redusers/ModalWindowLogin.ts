import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalWindowLogin {
    modalShow: boolean;
}

const initialState: ModalWindowLogin = {
    modalShow: false,
}

export const ModalWindowLogin = createSlice({
    name: 'ModalWindowLogin',
    initialState,
    reducers: {
        cheked(state) {
            state.modalShow = !state.modalShow;
        }
    }
})

export default ModalWindowLogin.reducer;