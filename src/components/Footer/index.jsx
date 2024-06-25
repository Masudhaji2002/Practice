"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../Button";

const Footer = () => {
  return (
    <div>
      <div className={styles.callback}>
        <div className={styles.container}>
          <div className={styles.callback__content}>
            <p className={styles.callback__title}>Мы Вам перезвоним</p>
            <p className={styles.callback__text}>
              Если у вас возникли какие-то вопросы или проблемы, заполните{" "}
              <br /> форму и мы Вам перезвоним.
            </p>

            <form className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш Email"
                className={styles.input}
              />
              <Button>Отправить</Button>
            </form>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.gridContainer}>
            <div className={styles.logoSection}>
              <Image
                src="/Logo-footer.png"
                alt="Company Logo"
                width={106}
                height={88}
              />

              <div className={styles.socialIcons}>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/vk.png" alt="Facebook" width={26} height={26} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={26}
                    height={26}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={26}
                    height={26}
                  />
                </a>
              </div>
            </div>

            <div className={styles.columns}>
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Навигация</h4>
                <ul className={styles.navList}>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>
                    <a href="/contact">Каталог</a>
                  </li>
                  <li>
                    <a href="/services">Оптовая продажа</a>
                  </li>
                  <li>
                    <a href="/about">О нас</a>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Наши контакты</h4>
                <div>
                  <p className={styles.columnSubTitle}>Телефоны</p>
                  <div className={styles.columnContact}>
                    <p>+7 (988) 565 00 38</p>
                    <p>+7 (988) 565 00 38</p>
                  </div>
                </div>
                <div>
                  <p className={styles.columnSubTitle}>Email</p>
                  <div className={styles.columnContact}>
                    <p>vladpertcev@mail.ru</p>
                    <p>vladpertcev@mail.ru</p>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Наш Адрес</h4>
                <p>
                  Россия,
                  <br /> Ростов-на-Дону ул. <br /> Богачева, 16
                </p>
              </div>

              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Информация</h4>
                <ul className={styles.navList}>
                  <li>
                    <a href="/">Доставка и оплата</a>
                  </li>
                  <li>
                    <a href="/">Гарантии</a>
                  </li>
                  <li>
                    <a href="/">Возврат товара</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className={styles.footerText}>
            © 2021 Golden Soft All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
