import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import Categorys from "@/types/Categorys";
import style from "./Header.module.scss";
import Link from "next/link";
import dynamic from 'next/dynamic'
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {ModalWindowLogin} from "@/store/redusers/ModalWindowLogin";
import { postAuthRequest } from "@/api/server/postRequest";
import { UserReducers } from "@/store/redusers/User";
import { useGetCooke } from "@/hooks/getcookie";
import Serch from "@/components/Serch/Serch";


const ModalWindowLogins = dynamic(()=> import('../ModalWindowLogin/ModalWindowLogin'), {
    ssr:false
})

const Header: FC<Categorys> = (categorys) => {
    const [dopMeny, setDopMeny] = useState(false);
    const [mobyleCategory, setMobyleCategory] = useState(false);
    const [serchShow, setSerchShow] = useState(false);
    const category = categorys.categorys || [];
      const user = async(token)=>{ 
        const data = await postAuthRequest('users/user', token);
        return data.data;
      };
    useEffect(()=>{
        let tokenCookie = useGetCooke(document.cookie, 'token');
        if(tokenCookie != undefined){
            tokenCookie = tokenCookie.slice(12, tokenCookie.length-2);
            user(tokenCookie).then((data) => dispatch(UserReducers.actions.cheked(data)));
        }
    }, [])
    const dispatch = useAppDispatch();
    const { AuthBoll } = useAppSelector(state => state.UserReducers);

    return (
        <header className={style.header}>
            <nav data-testid="dopMeny" className={(dopMeny)?style.mainNavBurMobyle:style.noneMainNavBurMobyle}>
                <button onClick={()=>setDopMeny(false)} className={style.mainNavBurMobyle_CloaseButton}>
                    <span>Закрыть</span>
                </button>
                <ul  className={style.mainNavBurMobyle_meny}>
                    <li onClick={()=>setMobyleCategory(!mobyleCategory)}>
                        Каталог
                    </li>
                    <ul style={{display:(mobyleCategory)?"block":"none"}} className={style.mainNavBurMobyle_categorys}>
                    {category.map(category=>
                    <li key={category.id}  onClick={()=>setDopMeny(false)}>
                        <Link className={style.mainNavBurMobyle_categorys} key={category.id} href={`/categorys/${category.id}`} >
                        {category.NameCategory}
                        </Link>   
                    </li> 
                     
                    )}
                        
                    </ul>
                    <li>
                        Новости магазина
                    </li>
                    <li>
                        Оплата и доставка
                    </li>
                    <li>
                        О компании                    
                    </li>
                </ul>
                
            </nav>
            <div className="container">
                <div className={style.header_tolbur}>
                    <div className={style.header_MobileButtonWrapper}>
                        <div data-testid="mobileButtonMeny"  onClick={()=>setDopMeny(true)} className={style.header_mobileButtonMeny}>
                            <i><svg width="16" height="12" viewBox="0 0 16 12">
                                <path data-name="Rounded Rectangle 81 copy 4" className="cls-1"
                                    d="M872,958h-8a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1h0A1,1,0,0,1,872,958Zm6-5H864a1,1,0,0,1,0-2h14A1,1,0,0,1,878,953Zm0-5H864a1,1,0,0,1,0-2h14A1,1,0,0,1,878,948Z"
                                    transform="translate(-863 -946)"></path>
                            </svg></i>
                        </div>
                        <div className={style.header_logoWrapper}>
                            <img src="/logo.gif" alt="Логотип онлайн магазина"/>
                        </div>
                    </div>

                    <div  className={style.header_ListButtons}>
                    {!AuthBoll ?
                    <div onClick={()=>{
                        dispatch(ModalWindowLogin.actions.cheked())  
                        document.querySelector('body').style.overflowY = 'hidden';}} className={style.header_ListButton}>
                         <i className="svg"><svg className="" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
                                <path className="cls-1"
                                    d="M16.709,16.719a1,1,0,0,1-1.412,0l-3.256-3.287A7.475,7.475,0,1,1,15,7.5a7.433,7.433,0,0,1-1.549,4.518l3.258,3.289A1,1,0,0,1,16.709,16.719ZM7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Z">
                                </path>
                        </svg></i>
                        <span>Поиск</span>
                    </div>
                        :
                        <div onClick={()=>setSerchShow(true)} className={style.header_ListButton}>
                            <i className="svg"><svg className="" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
                                <path className="cls-1"
                                    d="M16.709,16.719a1,1,0,0,1-1.412,0l-3.256-3.287A7.475,7.475,0,1,1,15,7.5a7.433,7.433,0,0,1-1.549,4.518l3.258,3.289A1,1,0,0,1,16.709,16.719ZM7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Z">
                                </path>
                            </svg></i>
                            <span>Поиск</span>
                        </div>
                        }
                        {!AuthBoll ?
                        <div onClick={()=>{
                            dispatch(ModalWindowLogin.actions.cheked())  
                            document.querySelector('body').style.overflowY = 'hidden';}} className={style.header_ListButton}>
                            <i className="svg"><svg className="" width="18" height="18" viewBox="0 0 18 18">
                                <path data-name="Ellipse 206 copy 4" className="cls-1"
                                    d="M909,961a9,9,0,1,1,9-9A9,9,0,0,1,909,961Zm2.571-2.5a6.825,6.825,0,0,0-5.126,0A6.825,6.825,0,0,0,911.571,958.5ZM909,945a6.973,6.973,0,0,0-4.556,12.275,8.787,8.787,0,0,1,9.114,0A6.973,6.973,0,0,0,909,945Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,909,955Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,909,949Z"
                                    transform="translate(-900 -943)"></path>
                            </svg></i>
                            <span>Вход</span>
                        </div>
                        : 
                        <div className={style.header_ListButton}>
                        <Link className={style.link}  href='/shopcart' title='shopcart'>
                        <i className="svg"><svg className="" width="18" height="18" viewBox="0 0 18 18">
                            <path data-name="Ellipse 206 copy 4" className="cls-1"
                                d="M909,961a9,9,0,1,1,9-9A9,9,0,0,1,909,961Zm2.571-2.5a6.825,6.825,0,0,0-5.126,0A6.825,6.825,0,0,0,911.571,958.5ZM909,945a6.973,6.973,0,0,0-4.556,12.275,8.787,8.787,0,0,1,9.114,0A6.973,6.973,0,0,0,909,945Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,909,955Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,909,949Z"
                                transform="translate(-900 -943)"></path>
                        </svg></i>
                        </Link>
                       
                        <Link className={style.link}  href='/shopcart' title='shopcart'>
                            <span>Корзина</span>   
                        </Link > 
                        </div>
                    }
                    </div>
                </div>
            </div>
          
            <ModalWindowLogins />
        {serchShow &&
            <Serch props={setSerchShow} />
        }
        </header>
    )
}
export default Header;