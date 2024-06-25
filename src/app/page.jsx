import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Sider from "@/components/Slider";
import Button from "@/components/Button";
import Sliderbottom from "@/components/Sliderbottom";


const Home = () => {
  return (
    <div>
      <Sider />

      <section className={`${styles.section__numbers} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.numbers__items}>
            <div className={styles.numbers__item}>
              <p className={styles.numbers__number}>5,567</p>
              <p className={styles.numbers__text}>Счастливых клиентов</p>
            </div>

            <div className={styles.numbers__item}>
              <p className={styles.numbers__number}>1245</p>
              <p className={styles.numbers__text}>Продуктов на выбор</p>
            </div>

            <div className={styles.numbers__item}>
              <p className={styles.numbers__number}>372</p>
              <p className={styles.numbers__text}>Продаж в день</p>
            </div>

            <div className={styles.numbers__item}>
              <p className={styles.numbers__number}>20</p>
              <p className={styles.numbers__text}>Лет на рынке</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section__why} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.why}>
            <div className={`${styles.why__title} ${styles.section__title}`}>
              Почему GoldenService?
            </div>
            <div className={styles.why__items}>
              <div className={styles.why__item}>
                <Image
                  src="/who1.png"
                  alt="Previous"
                  width={82}
                  height={82}
                  layout="responsive" // Сделать изображение адаптивным
                  objectFit="cover" // Заполнение изображения по размеру контейнера
                />

                <p>
                  Возврат удвоенной стоимости каждого замка в случае брака.{" "}
                </p>
              </div>
              <div className={styles.why__item}>
                <Image
                  src="/who2.png"
                  alt="Previous"
                  width={82}
                  height={82}
                  layout="responsive" // Сделать изображение адаптивным
                  objectFit="cover" // Заполнение изображения по размеру контейнера
                />

                <p>Наносим ваш логотип компании на наш продукт. </p>
              </div>
              <div className={styles.why__item}>
                <Image
                  src="/who1.png"
                  alt="Previous"
                  width={82}
                  height={82}
                  layout="responsive" // Сделать изображение адаптивным
                  objectFit="cover" // Заполнение изображения по размеру контейнера
                />

                <p>
                  Возврат удвоенной стоимости каждого замка в случае брака.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section__categories} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.section__title}>Категории</div>
          <div className={styles.categories__items}>
            <div className={styles.categories__item}>
              <div className={styles.categories__item_pic}>
                <Image
                  src="/cat1.png"
                  alt="Previous"
                  width={470}
                  height={470}
                ></Image>
              </div>
              <div className={styles.categories__item__goover}>
                <p>Для отелей</p>
                <button>Перейти</button>
              </div>
            </div>

            <div className={styles.categories__item}>
              <div className={styles.categories__item_pic}>
                <Image
                  src="/cat2.png"
                  alt="Previous"
                  width={470}
                  height={470}
                ></Image>
              </div>
              <div className={styles.categories__item__goover}>
                <p>Для шкафчиков</p>
                <button>Перейти</button>
              </div>
            </div>

            <div className={styles.categories__item}>
              <div className={styles.categories__item_pic}>
                <Image
                  src="/cat3.png"
                  alt="Previous"
                  width={470}
                  height={470}
                ></Image>
              </div>
              <div className={styles.categories__item__goover}>
                <p>Для офисов</p>
                <button>Перейти</button>
              </div>
            </div>

            <div className={styles.categories__item}>
              <div className={styles.categories__item_pic}>
                <Image
                  src="/cat4.png"
                  alt="Previous"
                  width={470}
                  height={470}
                ></Image>
              </div>
              <div className={styles.categories__item__goover}>
                <p>Замки для дома</p>
                <button>Перейти</button>
              </div>
            </div>
          </div>
          <div className={styles.categories__footer}>
            <Button>Все категории</Button>
          </div>
        </div>
      </section>

      <Sliderbottom />
    </div>
  );
};

export default Home;
