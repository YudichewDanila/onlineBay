import React, { useEffect, useMemo, useState } from "react";
import style from "./ShopCart.module.scss";
import ShopCartOne from "./ShopCartOne";
import ShopCartEnterOrder from "./ShopCartEnterOrder";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getRequest } from "@/api/server/getRequest";
import { ShopCartSlice } from "@/store/redusers/ShopCart";
import { ShopPointSlice } from "@/store/redusers/ShopPoints";

const ShopCartModule = ()=>{
    const dispatch = useAppDispatch();
    let shopingCart = useAppSelector(state => state.ShopCartSlice);
    const {User, AuthBoll} = useAppSelector(state=> state.UserReducers);
    let fullPrice = 0;
    
    shopingCart.shopCart.map(item=>{
        fullPrice += item.IdProducts.PriceProducts * item.CountProduct;
    })
   
    useEffect(()=>{
        if(AuthBoll){
        getRequest('order-shopingcart', `${User.shopingCart}`)
        .then(data=>dispatch(ShopCartSlice.actions.cheked(data)));
        getRequest('point-orders').then(data=>dispatch(ShopPointSlice.actions.cheked(data)));
    }
    }, [AuthBoll, shopingCart.isLoading]);

    return(
        <>
        <div className={style.ShopCartModule}> 
            {!shopingCart.isLoading ?
            shopingCart.shopCart.map(Cart=>
                <ShopCartOne key={Cart.id} props={Cart} />
            ):<div>Загрузка...</div>}
        </div>   

        <div className={style.headerPointer}>
            <h2>Оформление заказа:</h2>
            <p>Пункт выдачи:</p>
        </div>

            {shopingCart.shopCart.length > 0 ?
            <ShopCartEnterOrder props={User} fullPrice={fullPrice}  />
            :
            <h1>В корзине нет товаров</h1>
            }
        </>  
    )
}

export default ShopCartModule;