import React, { FC, useState } from "react";
import style from "./Product.module.scss";
import { postRequest } from "@/api/server/postRequest";
import Products from "@/types/Products";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const ProductCart:FC<Products> = (products)=>{
    const [countProduct, setCountProduct] = useState(1);
    const {User, AuthBoll} = useAppSelector(state=> state.UserReducers);
    const [btnClick, setBtnClick] = useState(false);
    function onFilter(e, state, setState, max): void {
        setState(state=Number(e.target.value.replace(/[^0-9]/g, "").substring(0, 2)));
        if(e.target.value == ''){setCountProduct(1)}
        if(Number(e.target.value) > max){
            setCountProduct(max);
        }
    }
    function onplusCount(max){
        setCountProduct(countProduct+1);
        if(countProduct+1>=max){
            setCountProduct(max);
        }
    }
    function onminusCount(){
        setCountProduct(countProduct-1);
        if(countProduct-1<=0){
            setCountProduct(1);
        }
    }

    function onAddProductShopCart(product){
        if(AuthBoll){
        postRequest('order-shopingcart', {
            IdShopingCart:User.shopingCart,
            IdProducts: product.id,
            CountProduct:countProduct,
        })
        setBtnClick(true);
    }
    }
    return(
        <>
        <div className={style.cartProducts}>
            <div className={style.cartProductImg}>
                <img  src={`/img/products/${products.products.ImgProducts}.webp`} />
            </div>
            <div className={style.cartProducts_Info}>
                <span className={style.cartProducts_TextName}>{products.products.NameProduct}</span>
                <span className={style.cartProducts_Price}>{products.products.PriceProducts}</span>
                <span>В наличие: {products.products.CountProducts}</span>
            </div>
            <div className={style.cartProducts_Bays}>
                <div className={style.cartProducts_CountSelector}>
                    <button onClick={onminusCount}>-</button>
                    <input value={countProduct} onChange={(e)=> onFilter(e, countProduct, setCountProduct, products.products.CountProducts)} />
                    <button onClick={()=>onplusCount(products.products.CountProducts)}>+</button>
                </div>
                <button 
                onClick={()=>onAddProductShopCart(products.products)} 
                className={!btnClick?style.cartProducts_BayButton:style.cartProducts_BayButtonActive}>
                    {!btnClick ? 'В корзину': 'Товар в корзине'}
                </button>
            </div>
        </div>
        </>
    )
}
export default ProductCart;