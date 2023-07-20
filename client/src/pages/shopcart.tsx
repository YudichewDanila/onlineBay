import React from "react";
import Header from '@/components/Header/Header';
import MainNuvbur from "@/components/MainNuvbur/MainNuvbur";
import ShopCartModule from "@/components/ShopCart/ShopCart";
import { getRequest } from '@/api/server/getRequest';



export async function getStaticProps() {
  const categorys = await getRequest('categorys');
  const underCategorys = await getRequest('undercategorys');
  return {
    props: { categorys, underCategorys }, 
  }
}

export default function ShopCart(props){
    return(
        <>
        <Header
        categorys = {props.categorys} 
        undercategorys = {props.underCategorys} />
        <MainNuvbur
        categorys = {props.categorys}
        undercategorys = {props.underCategorys} />
        <ShopCartModule />
        </>
    )
}