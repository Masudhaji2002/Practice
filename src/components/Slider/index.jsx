"use client"; // Указываем, что это клиентский компонентpopularItem

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../Button";

const Sider = () => {
  return (
   

<div className={styles.slider}>
      <div className={styles.slides}>
        <div className={styles.slide}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src="/slidere6.png"
              alt="Slide 1"
              width={518}
              height={513}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.textWrapper}>
              <p className={styles.title}>
                Golden Soft <br /> GS-200Z-5 для офиса
              </p>
              <div className={styles.description}>
                <p>
                  Замок дверной электронный Golden Soft GS-200Z-5 имеет
                  роскошный глянцевый блеск, четкие линии, красивые формы.
                </p>
                <p>
                  Подходит для установки <br />на деревянную/межкомнатную дверь.
                </p>
              </div>
              <div className={styles.buySection}>
                <p className={styles.priceTitle}>Цена</p>
                <div className={styles.price}>
                  <p className={styles.newPrice}>33 000₽</p>
                  <p className={styles.oldPrice}>37 000₽</p>
                </div>
                <Button>Добавить в корзину</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.indicators}>
        <div className={`${styles.button} ${styles.prevButton}`}>
          <Image
            src="/left-arrow.png"
            alt="Previous"
            width={32}
            height={32}
          />
        </div>
        <span className={styles.indicator}></span>
        <span className={`${styles.indicator} ${styles.active}`}></span>
        <span className={styles.indicator}></span>
        <div className={`${styles.button} ${styles.nextButton}`}>
          <Image
            src="/right-arrow.png"
            alt="Next"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>



  );
};

export default Sider;
