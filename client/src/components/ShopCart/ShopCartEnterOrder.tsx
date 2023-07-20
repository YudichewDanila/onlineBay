import React, { useState } from "react";
import style from './ShopCart.module.scss';
import { useAppSelector } from "@/hooks/redux";
import { postRequest } from "@/api/server/postRequest";

const ShopCartEnterOrder = ({props, fullPrice})=>{
    const shopingPoints = useAppSelector(state=> state.ShopPointSlice);
    const shopingCart = useAppSelector(state => state.ShopCartSlice);
    const [selectPoint, setSelectPoint] = useState('1');
    console.log(fullPrice);
    async function onCreateOrder(){
        
       const result = await postRequest('order-product', {
        IdShopingCart: props.shopingCart,
        IdPointOrders: Number(selectPoint),
        StatusOrder: false,
        shopingCart: shopingCart.shopCart,
        FullPrice: fullPrice,
       });
       console.log(result.data.confirmation.confirmation_url);
       window.location = result.data.confirmation.confirmation_url;
    }
    console.log(selectPoint);
    console.log(props);
    return(
        <div className={style.wrupperEnterOrders}>
        <select value={selectPoint} 
        onChange={(e)=> {
            setSelectPoint(e.target.value)
        }}>
            {shopingPoints.shopPoint.map(point=>
            <option  key={point.id} value={point.id}>
                {point.country} {point.city} {point.street} {point.numberHouse}
                </option>
            )}
        
        </select>
        <div className={style.priceBlock}>
        <h2>Итого: {fullPrice} руб</h2>
        <button
        onClick={()=>onCreateOrder()}
        className={style.enterOrders}>
        Заказать
        </button>
        </div>
       
    </div>
    )
}

export default React.memo(ShopCartEnterOrder);