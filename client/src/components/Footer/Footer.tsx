import React, { FC } from "react";
import Categorys from "@/types/Categorys";
import style from './Footer.module.scss';

const Footer: FC<Categorys> = (categorys)  => {
    const ulClass = style.ok_list+' '+style.column_2+' '+style.clearfix; 
    return (
        <footer className={style.footer}>
            <section className={style.contactBlock}>
                <div className={style.contactBlock_Form}>
                    <h2>Хочешь узнавать про акции и скидки первым?</h2>
                    <input placeholder="Имя" />
                    <input placeholder="E-Mail" />
                    <button>Хочу много скидок</button>
                </div>
                <div className={style.terms_block}>
                    <input type="checkbox" className={style.terms_of_use} data-target="terms_btn_subscribe"  />
                    <span className={style.terms_agree}>Я согласен с условиями</span>
                </div>
            </section>
            <section className={style.bottomBlock}>
                <div className={style.bottomBlock_Catalog}>
                    <div className={style.col_md_6}>
                        <h2>Каталог</h2>
                        <ul className={ulClass}>
                            {categorys.categorys.map(category=>
                                <li key={category.id}>{category.NameCategory}</li>
                            )}
                        </ul>
                    </div>
                    <div className={style.footer_info}>
                        Данный сайт является учебным проектом.<br />
                        Сайт разработчика: <a href="https://webdaer.github.io/">https://webdaer.github.io/</a><br />
                        Дизайн данного сайта взят с платформы beseller.by .
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer;