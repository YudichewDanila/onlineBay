import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";

type UserInterface = {
    id: number,
    Surname: string,
    Name: string,
    EmailUsers: string,
    NumberPhoneUsers: string,
    shopingCart: number,
}

interface UserState {
    User: UserInterface | null,
    AuthBoll: boolean,
}

const initialState: UserState = {
    User: null,
    AuthBoll: false,
}

export const UserReducers = createSlice({
    name: 'UserReducers',
    initialState,
    reducers: {
        cheked(state, action: PayloadAction<UserInterface>) {
            state.User = action.payload;
            state.AuthBoll = true;
        }
    }
})

export default UserReducers.reducer;