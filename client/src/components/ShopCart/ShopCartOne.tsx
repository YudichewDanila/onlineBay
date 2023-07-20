import React from "react";
import style from "./ShopCart.module.scss";
import { useAppDispatch } from "@/hooks/redux";
import { ShopCartSlice } from "@/store/redusers/ShopCart";
import { deleteRequest } from "@/api/server/deleteRequest";

const ShopCartOne = ({props})=>{
    const dispatch = useAppDispatch();
    console.log(props);
    function deleteProduct(id){
        deleteRequest(`order-shopingcart/${id}_${props.IdShopingCart.id}`)
        .then((data)=> dispatch(ShopCartSlice.actions.cheked(data.data)));
    }
    return(
    <>
     <div className={style.ShopCart}>
        <div className={style.MainInfoBlock}>
        <div className={style.ShopCart_image}>
            <img  src={`/img/products/${props.IdProducts.ImgProducts}.webp`} />
        </div>
            <div className={style.ShopCart_InfoBlock}>
                <h2>{props.IdProducts.NameProduct}</h2>
                <p>Всего товаров: {props.IdProducts.CountProducts}</p>
                <p>Цена: {props.IdProducts.PriceProducts}</p>
            </div>
        </div>
            <div className={style.DopInfoBlock}>
                <div className={style.ShopCart_PriceBlock}>
                <p>Колличество: {props.CountProduct}</p>
                <div className={style.CountSelector}>
                    <button
                     onClick={()=>{
                        dispatch(ShopCartSlice.actions.plusCount({id:props.id, countProducts:props.CountProduct-1, maxCount:props.IdProducts.CountProducts}))
                    }}
                    >-</button>
                    <button
                    onClick={()=>{
                        dispatch(ShopCartSlice.actions.plusCount({id:props.id, countProducts:props.CountProduct+1, maxCount:props.IdProducts.CountProducts}))
                    }}
                    >+</button>
                </div>
                </div>
                <div className={style.ShopCart_SummBlock}>
                    <h2>Cумма: {props.IdProducts.PriceProducts*props.CountProduct}</h2>
                </div>
                <button onClick={()=>deleteProduct(props.id)} className={style.onDelete}>
                </button>
            </div>
        </div>
    </>
    )
}

export default ShopCartOne;