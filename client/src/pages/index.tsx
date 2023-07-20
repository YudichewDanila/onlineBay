import React, { useEffect } from 'react';
import Header from '@/components/Header/Header';
import MainNuvbur from '@/components/MainNuvbur/MainNuvbur';
import MainSlider from '@/components/MainSlider/MainSlider';
import BannerBoxMain from '@/components/BannerBoxMain/BannerBoxMain';
import PopularCategorysMain from '@/components/PopularCategorysMain/PopularCategorysMain';
import Footer from '@/components/Footer/Footer';
import { getRequest } from '@/api/server/getRequest';


export async function getStaticProps() {
  const categorys = await getRequest('categorys');
  const underCategorys = await getRequest('undercategorys');
  return {
    props: { categorys, underCategorys }, 
  }
}



export default function Home(props) {
  return (
  <>
  <Header  
    categorys = {props.categorys} 
    undercategorys = {props.underCategorys} />
    <MainNuvbur 
    categorys = {props.categorys} 
    undercategorys = {props.underCategorys} />
    <MainSlider />
    <BannerBoxMain />
    <main>
      <PopularCategorysMain />
    </main>
    <Footer  categorys = {props.categorys}   /> 
  </>
  )
}
