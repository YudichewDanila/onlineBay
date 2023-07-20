import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import Categorys from "@/types/Categorys";
import style from "./MainNuvbur.module.scss";
import Link from "next/link";

const MainNuvbur: string | FC<Categorys> = (categorys) => {
  const [dopMeny, setDopMeny] = useState(false);
  const [numberCategory, setNumberCategory] = useState(1);
  const router = useRouter();
  return (
    <>
      <div className="container">
        <nav className={style.mainNavBur}>
          <ul>
            <li className={style.mainNavburButtons}>
              <span
                onClick={() => router.push("/categorys")}
                className={style.containerButton}
              >
                <i>
                  <svg
                    className={style.containerButton_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <path
                      data-name="Rounded Rectangle 969 copy 7"
                      d="M644,76a1,1,0,1,1-1,1A1,1,0,0,1,644,76Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,76Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,76Zm-8,4a1,1,0,1,1-1,1A1,1,0,0,1,644,80Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,80Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,80Zm-8,4a1,1,0,1,1-1,1A1,1,0,0,1,644,84Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,648,84Zm4,0a1,1,0,1,1-1,1A1,1,0,0,1,652,84Z"
                      transform="translate(-643 -76)"
                    ></path>
                  </svg>
                </i>
                <span>Каталог</span>
              </span>
              <ul className={style.mainNavBur_CatalogMeny}>
                {categorys.categorys.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => {
                      setDopMeny(true);
                      setNumberCategory(() => item.id);
                    }}
                    onMouseLeave={() => setDopMeny(false)}
                    className={style.CatalogMeny_item}
                  >
                    <Link
                      className={style.CatalogMeny_item}
                      href={`/categorys/${item.id}`}
                    >
                      <span>{item.NameCategory}</span>
                    </Link>

                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3"
                        height="5"
                        viewBox="0 0 3 5"
                      >
                        <path
                          data-name="Rectangle 4 copy"
                          className="cls-1"
                          d="M203,84V79l3,2.5Z"
                          transform="translate(-203 -79)"
                        ></path>
                      </svg>
                    </i>
                  </li>
                ))}
              </ul>

              <div
                onMouseEnter={() => setDopMeny(true)}
                onMouseLeave={() => setDopMeny(false)}
                className={style.mainNavBur_DopCatalogMeny}
                style={{ display: dopMeny ? "inline-block" : "none" }}
              >
                <ul className={style.clearfix}>
                  {categorys.undercategorys
                    .filter((item) => item.idCategory.id == numberCategory)
                    .map((item) => (
                      <li key={item.id} className={style.sub_category}>
                        <Link href={`/products/${item.id}/?take=10&page=1`} title={item.NameUnderCategory}>
                          <span className="category-name">
                            {item.NameUnderCategory}
                          </span>
                        </Link > 
                      </li>
                    ))}
                </ul>
              </div>
            </li>

            <li className={style.mainNavburButtons}>
              <span className={style.containerButton}>
                <span>Новости магазина</span>
              </span>
            </li>
            <li className={style.mainNavburButtons}>
              <span className={style.containerButton}>
                <span>Оплата и доставка</span>
              </span>
            </li>
            <li className={style.mainNavburButtons}>
              <span className={style.containerButton}>
                <span>О магазине</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default MainNuvbur;
