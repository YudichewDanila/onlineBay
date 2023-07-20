import React, { useState } from "react";
import style from './Serch.module.scss';
import { getRequest } from "@/api/server/getRequest";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SerchSlice } from "@/store/redusers/Serches";
import { postRequest } from "@/api/server/postRequest";
import { useRouter } from 'next/router'
import { ShopCartSlice } from "@/store/redusers/ShopCart";

const Serch = ({props})=>{
    const [serchInput, setSerchInput] = useState('');
    const router = useRouter();
    const products = useAppSelector(state => state.Serches);
    const {User, AuthBoll} = useAppSelector(state=> state.UserReducers);
    const dispatch = useAppDispatch();
    function onAddProductShopCart(product){
        if(AuthBoll){
        postRequest('order-shopingcart', {
            IdShopingCart:User.shopingCart,
            IdProducts: product.id,
            CountProduct:1,
        })
    }
    }
    async function getSerch(serch){
        await getRequest(`products/serch/?serch=${serch}`).then((data)=>dispatch(SerchSlice.actions.cheked(data)));
        if(serch.length == ''){
            dispatch(SerchSlice.actions.cheked([]));
        } 
    }

    return(
        <>
        <div className={style.serchBlock}>
            <div className={style.inputBlock}>
            <input
            value={serchInput}
            onChange={e=>{
                setSerchInput(e.target.value);
                getSerch(e.target.value);
            }}
            type="text"
            placeholder='Поиск...'
            className={style.serch}/>
            <button onClick={()=>props(false)}>X</button>
            </div>
            
            <div className={style.serchinfoblock}>
                {products.products.map(product=>
                <div key={product.id} className={style.ShopCart}>
                <div className={style.MainInfoBlock}>
                <div className={style.ShopCart_image}>
                    <img src={`/img/products/${product.ImgProducts}.webp`} /> 
                </div>
                    <div className={style.ShopCart_InfoBlock}>
                        <h2>{product.NameProduct}</h2>
                        <p>Всего товаров: {product.CountProducts}</p>
                        <p>Цена: {product.PriceProducts}</p>
                    </div>
                </div>
                <div className={style.DopInfoBlock}>
                <button 
                onClick={(e)=>{
                    onAddProductShopCart(product);
                    const target = e.target as HTMLTextAreaElement;
                    target.style.backgroundColor = 'white';
                    target.style.color = 'purple';
                    dispatch(ShopCartSlice.actions.isLoad());
                   
                }} 
                className={style.cartProducts_BayButton}>В корзину</button>
                </div>
                </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Serch;