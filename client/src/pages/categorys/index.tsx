import React, { useEffect } from 'react';
import Header from '@/components/Header/Header';
import MainNuvbur from '@/components/MainNuvbur/MainNuvbur';
import Footer from '@/components/Footer/Footer';
import { getRequest } from '@/api/server/getRequest';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux';

export async function getStaticProps() {
    const categorys = await getRequest('categorys');
    const underCategorys = await getRequest('undercategorys');
    return {
        props: { categorys, underCategorys },
    }
}

export default function Categorys(props) {
    return (
        <>
            <Header
                categorys={props.categorys}
                undercategorys={props.underCategorys} />
            <MainNuvbur
                categorys={props.categorys}
                undercategorys={props.underCategorys} />
            <div className='container'>
                <div className='ListCategorys'>
                    {props.categorys.map(category=>
                         <div key={category.id} className='CartCategorys'>
                            <Link className='CartCategorys' href={`/categorys/${category.id}`}>
                                <span>{category.NameCategory}</span>
                            </Link> 
                         </div>
                    )}
                </div>
            </div> 
            <Footer  categorys={props.categorys} />
        </>
    )
}
