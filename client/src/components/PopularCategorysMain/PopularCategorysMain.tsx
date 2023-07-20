import React from "react";
import style from "./PopularCategorysMain.module.scss";

const PopularCategorysMain = () => {
    return (
        <div className="container">
            <section className={style.popularCategorys}>
                <h2>Новые разделы</h2>
                <div className={style.popularCategorys_collections}>
                    <div className={style.categoryCard}>
                        <div className={style.categoryCard_image }>
                            <img src="/img/closet.jpeg" alt="Мебель" />
                        </div>
                        <div className={style.category_card_title}>Мебель</div>
                    </div>
                    <div className={style.categoryCard}>
                        <div className={style.categoryCard_image }>
                            <img src="/img/closet.jpeg" alt="Мебель" />
                        </div>
                        <div className={style.category_card_title}>Мебель</div>
                    </div>
                    <div className={style.categoryCard}>
                        <div className={style.categoryCard_image }>
                            <img src="/img/closet.jpeg" alt="Мебель" />
                        </div>
                        <div className={style.category_card_title}>Мебель</div>
                    </div>
                    <div className={style.categoryCard}>
                        <div className={style.categoryCard_image }>
                            <img src="/img/closet.jpeg" alt="Мебель" />
                        </div>
                        <div className={style.category_card_title}>Мебель</div>
                    </div>
                    <div className={style.categoryCard}>
                        <div className={style.categoryCard_image }>
                            <img src="/img/closet.jpeg" alt="Мебель" />
                        </div>
                        <div className={style.category_card_title}>Мебель</div>
                    </div>
                </div>
                  
            </section>
        </div>
    )
}
export default PopularCategorysMain;