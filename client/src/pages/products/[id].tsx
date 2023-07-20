import React from "react";
import Header from '@/components/Header/Header';
import MainNuvbur from '@/components/MainNuvbur/MainNuvbur';
import SideBurProducts from "@/components/SideBurProducts/SideBurProducts";
import Footer from '@/components/Footer/Footer';
import { getRequest } from "@/api/server/getRequest";
import ProductCart from "@/components/ProductsCart/ProductCart";
import PaginationsButtons from "@/components/PaginationsButton/PaginationsButton";
import { useAppSelector } from "@/hooks/redux";

export const getServerSideProps = async (context)=>{
    const categorys = await getRequest('categorys');
    const underCategorys = await getRequest('undercategorys');
    const manifacturs = await getRequest('manufacturers');
    const data = await getRequest(`products/category/?take=${context.query.take}&page=${context.query.page}&price=${context.query.price}&undercategory=${context.params.id}&manifacturs=${context.query.manifacturs}`);
    return{
        props:{ 
            data:data, 
            categorys:categorys, 
            underCategorys:underCategorys, 
            take:(context.query.take == undefined) ? 5 : context.query.take, 
            undercategory:context.params.id,
            manifacturs:manifacturs,
        }
    }
};

export default function Products(props) {
return(
    <>
      <Header
            categorys={props.categorys}
            undercategorys={props.underCategorys}/>
        <MainNuvbur
            categorys={props.categorys}
            undercategorys={props.underCategorys} />
   
        <div className='ListProducts'>
        <div className="sideBurProducts">
            <SideBurProducts manifacturs={props.manifacturs} undercategory={props.undercategory} />
        </div>
        {props.data[0].length != 0 ?
            <div className="products">
                {props.data[0].map((item, index)=>
                   <ProductCart products={props.data[0][index]} key={item.id}/>
                )}
            <PaginationsButtons data={props.data[1]} take={props.take} undercategory={props.undercategory}  />
            </div>
        : <div className="notProductsText">Товары отсутствуют</div>
        }
        </div>
        <Footer  categorys={props.categorys} />
    </>
)
}