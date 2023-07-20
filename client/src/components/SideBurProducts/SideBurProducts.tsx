import React, { useEffect, useState} from "react";
import style from "./SideBurProducts.module.scss";
import { useRouter } from 'next/router';
import {priceFilter, ManifactursFilter} from './SideBurProductsFunctions';
import SideBurProductsManifacturs from "./modules/SideBurProductsManifacturs";
import { useAppSelector } from "@/hooks/redux";

const SideBurProducts = (props)=>{
    useEffect(()=>{
        props.manifacturs.map(manifactur => manifactur.checked = false);
    }, [props.manifacturs])
    const router = useRouter();
    const [fromValuePrice, setFromValuePrice] = useState<number | string>('');
    const [beforeValuePrice, setBeforeValuePrice] = useState<number | string>('');
    const [manifacturs, setManifacturs] = useState(props.manifacturs);
    function onFilter(e, state, setState): void {
        setState(state=Number(e.target.value.replace(/[^0-9]/g, "").substring(0, 6)));
    }
  
    function onSubmitFilter(){
        const price = priceFilter({fromValuePrice, setFromValuePrice, beforeValuePrice, setBeforeValuePrice});
        const manifactur = ManifactursFilter(manifacturs);
        router.push(`/products/${props.undercategory}?take=100&page=1&price=${price}&manifacturs=${manifactur}`);
    }
    
    return(
        <>
        <div className={style.sideBurBox}>
        <div className={style.sideBurFilter}>
            <p>Цена</p>
            <div className={style.FilterPrice_Inputs}>
            <input placeholder="От" value={fromValuePrice} onChange={e=>onFilter(e, fromValuePrice, setFromValuePrice)} />
            <input placeholder="До" value={beforeValuePrice} onChange={e=>onFilter(e, beforeValuePrice, setBeforeValuePrice)}  />
            </div>
        </div>
        <div className={style.sideBurFilter}>
           <p>Производители</p>
           <SideBurProductsManifacturs manifacturs={manifacturs} setManifacturs = {setManifacturs}  />
        </div>
        </div>
         
        <button onClick={onSubmitFilter} className={style.sideBurFilter_ApplyFilterBtn}>
            Применить фильтрацию
        </button>
        </>
    )
}
export default SideBurProducts;