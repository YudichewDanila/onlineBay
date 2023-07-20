
import React, { useEffect, useRef } from "react";
import style from "./MainSlider.module.scss";


const MainSlider = () => {
    const [slideNumber, setSlideNumber] = React.useState(0);
    const slide = useRef(0);
    const slider = useRef(null);
    const Xevent = useRef(0);
    const banerImgs = [
        {id:1, src:'/img/central_banner1.png'},
        {id:2, src:'/img/central_banner2.png'},
        {id:3, src:'/img/central_banner3.png'},
    ]
  
    function onrightslide(){
        slide.current = slide.current+1;
        setSlideNumber(slide.current);
        if(slide.current >= banerImgs.length){
            slide.current = 0;
            setSlideNumber(slide.current);
        }
    }

    function onleftslide(){
        slide.current = slide.current-1;
        setSlideNumber(slide.current);
        if(slide.current < 0){
            slide.current = banerImgs.length-1;
            setSlideNumber(slide.current);
        }
    }
    
    function toucMove(e){
        if(Xevent.current<e.changedTouches[0].clientX){
            onleftslide();
        }
        else if (Xevent.current>e.changedTouches[0].clientX){
            onrightslide();
        }
    }
  
    useEffect(()=>{
        const slid = slider.current;
        slid.addEventListener("touchstart", (e)=>{ Xevent.current = e.changedTouches[0].clientX });
        slid.addEventListener("touchend", toucMove);
        return ()=>{
            slid.removeEventListener("touchmove", (e)=>{ Xevent.current = e.changedTouches[0].clientX });
            slid.removeEventListener("touchend", toucMove);
        }
    }, [])
   
     useEffect(()=>{
        setInterval(()=>{
            onrightslide();
        }, 10000);
     }, [])

    return (
        <>
        <div className="container">
            <div ref={slider} className={style.baners}>
                <div className={style.BanersButtons}>
                    <button onClick={()=>onleftslide()} className={style.BanersButton}>
                        <span>‹</span>
                    </button>
                    <button onClick={()=>onrightslide()} className={style.BanersButton}>
                        <span>›</span>
                    </button>
                </div>
                <div className={style.baners_slider} style={{marginLeft: slideNumber*-100+'%'}}>
                    {banerImgs.map(img=>
                         <img key={img.id} src={img.src} />
                    )}
                </div>
               
                <div className={style.owl_dots}>
                {banerImgs.map(item=>
                        <button 
                        key={item.id}
                        role="button"
                        className={style.owl_dot}
                        style={{backgroundColor:(slideNumber != item.id-1)?"silver":"#7a4cd9"}}
                        onClick={()=>setSlideNumber(item.id-1)}
                        >
                        <span></span>
                        </button>
                    )}
                </div>
            </div>
        </div>
        </>
        
    )
}
export default MainSlider;