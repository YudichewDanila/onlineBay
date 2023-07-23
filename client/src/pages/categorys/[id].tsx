import React from "react";
import Header from '@/components/Header/Header';
import MainNuvbur from '@/components/MainNuvbur/MainNuvbur';
import Footer from '@/components/Footer/Footer';
import { getRequest } from "@/api/server/getRequest";
import Link from "next/link";

export const getServerSideProps = async (context)=>{
    const categorys = await getRequest('categorys');
    const underCategorys = await getRequest('undercategorys');
    const data = await getRequest(`undercategorys/${context.params.id}`);
    return{
        props:{data:data, categorys:categorys, underCategorys:underCategorys}
    }
};

export default function Category(props) {
    return(
        <>
        <Header
                categorys={props.categorys}
                undercategorys={props.underCategorys}/>
            <MainNuvbur
                categorys={props.categorys}
                undercategorys={props.underCategorys} />
                <div className="container">
                    <div className='ListCategorys'>
                        {props.data.map(category=>
                        <Link key={category.id} className='CartCategorys' href={`/products/${category.id}/?take=10&page=1`} title={category.id.NameUnderCategory}>
                            <span>{category.NameUnderCategory}</span>
                        </Link>
                    )}
                    </div>
                </div>
                <Footer  categorys={props.categorys}/>
        </>
    )
}