import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";

const links = [
  { id: 1, title: "Главная", url: "/" },
  {
    id: 2,
    title: "Каталог",
    url: "#", // Замените на фактический URL
    dropdown: [
      { id: 1, title: "Item 1", url: "/catalog/item1" },
      { id: 2, title: "Item 2", url: "/catalog/item2" },
      { id: 3, title: "Item 3", url: "/catalog/item2" },
      { id: 4, title: "Item 4", url: "/catalog/item2" },
      { id: 5, title: "Item 5", url: "/catalog/item2" },
    ],
  },
  { id: 3, title: "Оптовая продажа", url: "/wholesale" },
  { id: 4, title: "О нас", url: "/about" },
];

const Header = () => {
  return (
    <header>
      <div className={styles.topLine}>
        <div className={styles.container}>
          <div className={styles.promo}>
            <p className={styles.promo__text}>
              Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
            </p>
            <Link href="/" className={styles.promo__link}>
              Обратный звонок
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomLine}>
        <div className={styles.container}>
          <div className={styles.bottomLine__content}>
            <div className={styles.bottomLine__left}>
              <Link href="/" className={styles.logo}>
                <Image src="/Logo.png" alt="Logo" width={51} height={42} />
              </Link>
              <nav className={styles.links}>
                {links.map((link) => (
                  <div
                    key={link.id}
                    className={`${styles.link} ${
                      link.dropdown ? styles.catalog : ""
                    }`}
                  >
                    <Link
                      href={link.url}
                      className={
                        link.title === "Каталог" ? styles.catalog_link : ""
                      }
                    >
                      {link.title}
                      {link.title === "Каталог" && (
                        <span className={styles.checkmark}></span>
                      )}
                    </Link>
                    {link.dropdown && (
                      <div className={styles.dropdown}>
                        {link.dropdown.map((item) => (
                          <Link key={item.id} href={item.url}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className={styles.bottomLine__right}>
              <Image className={styles.phoneNumberImg}
                src="/phone-call 1.png"
                alt="like"
                width={20}
                height={20}
              />
              <a href="tel:+79665588499" className={styles.phoneNumber}>
                +7 (966) 55 88 499
              </a>
              <Link href="/favorites" className={styles.icon}>
                <Image src="/like.png" alt="like" width={32} height={32} />
              </Link>
              <Link href="/cart" className={styles.icon}>
                <Image src="/shop.png" alt="shop" width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
