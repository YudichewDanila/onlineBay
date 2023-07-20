import { combineReducers, configureStore } from '@reduxjs/toolkit';
import manifacturs from './redusers/Manifacturs';
import ModalWindowLogin from './redusers/ModalWindowLogin';
import UserReducers from './redusers/User';
import  ShopCartSlice from './redusers/ShopCart';
import ShopPointSlice from './redusers/ShopPoints';
import Serches from './redusers/Serches';

const rootReducer = combineReducers({
    manifacturs,
    ModalWindowLogin,
    UserReducers,
    ShopCartSlice,
    ShopPointSlice,
    Serches,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

