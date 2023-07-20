import React, { useState } from "react";
import style from "./PaginationsButton.module.scss";
import Link from "next/link";

function paginationsButtons(props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [paginationsColection, setPaginationsColection] = useState(0);
    const paginationsButtonsCount = Math.ceil(props.data / props.take);
    const paginationsColectionCount = Math.ceil(paginationsButtonsCount/10);
    const paginationsButtons = [];
    function onNextColection(){
        if(paginationsColection < paginationsColectionCount){
            setPaginationsColection(paginationsColection+1);
        }
        else{
            setPaginationsColection(0);
        }
    }
    let increment = 1;
    for(let i = 1; i <= paginationsColectionCount; i++ ){
        paginationsButtons.push([]);
    }

    for(let j = 0; j<= paginationsColectionCount; j++ ){
        while(increment <= paginationsButtonsCount && increment%10){
            paginationsButtons[j].push(increment);
            increment = increment+1;
        }
        if(increment <= paginationsButtonsCount ){
            paginationsButtons[j].push(increment);
        }
        increment = increment+1;
    }
    
    return(
        <>
        <div className={style.paginetionsBlock}>
            
            { paginationsButtons[paginationsColection] && paginationsButtons[paginationsColection].map((button)=>
                <Link href={`/products/${props.undercategory}?take=5&page=${button}`} key={button}>
                     <button>{button}</button>
                </Link>
            )}
        <button onClick={onNextColection}>...</button>
        </div>
        </>
    )
}
export default paginationsButtons;