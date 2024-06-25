import Image from 'next/image';
import styles from './page.module.css'; 

const Sliderbottom = () => {
  return (
    <section className={`${styles.sectionPopular} ${styles.section}`}>
    <div className={styles.container}>
      <div className={styles.popular}>
        <div className={styles.popularTop}>
          <p className={styles.popularTitle}>Наши популярные продукты</p>
          <div className={styles.popularButton}>
            <div className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}>
              <Image
                src="/right-arrow-p.png"
                alt="Previous"
                width={40}
                height={40}
              />
            </div>
            <div className={`${styles.sliderButton} ${styles.sliderButtonNext} ${styles.active}`}>
              <Image
                src="/right-arrow-p.png"
                alt="Next"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className={styles.popularBottom}>
          <div className={styles.popularSlider}>
            <div className={styles.popularItems}>
              <div className={styles.popularItem}>
                <div className={styles.popularItemHeader}>
                  <div className={styles.popularItemPic}>
                    <Image
                      src="/slider-p-1.png"
                      width={288}
                      height={320}
                      alt="Product Image"
                         layout="responsive"
                    />
                  </div>

                  <div className={styles.popularItemTop}>
                    <div className={styles.popularItemFree}>
                      <div className={styles.popularItemHave}>
                        <span>
                          <Image
                            src="/have.png"
                            width={10}
                            height={8}
                            alt="In Stock"
                          />
                        </span>
                        <p>В наличии</p>
                      </div>
                      <div className={styles.popularItemGif}>
                        <p className={styles.popularItemTextGif}>Подарок</p>
                      </div>
                    </div>
                    <div className={styles.popularItemSale}>SALE</div>
                  </div>
                </div>
                <div className={styles.popularItemBottom}>
                  <p className={styles.popularItemBottomText}>
                    Дверной Замок Golden Soft для отеля
                  </p>
                  <div className={styles.bottomBuyPrice}>
                    <p className={styles.bottomNewPrice}>33 000₽</p>
                    <p className={styles.bottomOldPrice}>37 000₽</p>
                  </div>
                </div>
              </div>

              <div className={styles.popularItem}>
                <div className={styles.popularItemHeader}>
                  <div className={styles.popularItemPic}>
                    <Image
                      src="/slider-p-2.png"
                      width={288}
                      height={320}
                      alt="Product Image"
                         layout="responsive"
                    />
                  </div>

                  <div className={styles.popularItemTop}>
                    <div className={styles.popularItemFree}>
                      <div className={styles.popularItemHave}>
                        <span>
                          <Image
                            src="/dontHave.png"
                            width={10}
                            height={10}
                            alt="In Stock"
                          />
                        </span>
                        <p>Нет в наличии</p>
                      </div>
                      <div className={styles.popularItemGif}>
                        <p className={styles.popularItemTextGif}>Подарок</p>
                      </div>
                    </div>
                    <div className={styles.popularItemSale}>SALE</div>
                  </div>
                </div>
                <div className={styles.popularItemBottom}>
                  <p className={styles.popularItemBottomText}>
                  Вариативный замок Golden Soft для отеля
                  </p>
                  <div className={styles.bottomBuyPrice}>
                    <p className={styles.bottomNewPrice}>7 000₽</p>
                    <p className={styles.bottomOldPrice}>8 000₽</p>
                  </div>
                </div>
              </div>

              <div className={styles.popularItem}>
                <div className={styles.popularItemHeader}>
                  <div className={styles.popularItemPic}>
                    <Image
                      src="/slider-p-3.png"
                      width={288}
                      height={320}
                      alt="Product Image"
                         layout="responsive"
                    />
                  </div>

                  <div className={styles.popularItemTop}>
                    <div className={styles.popularItemFree}>
                      <div className={styles.popularItemHave}>
                        <span>
                          <Image
                            src="/have.png"
                            width={10}
                            height={8}
                            alt="In Stock"
                          />
                        </span>
                        <p>В наличии</p>
                      </div>
                      <div className={styles.popularItemGif}>
                        <p className={styles.popularItemTextGif}>Подарок</p>
                      </div>
                    </div>
                    <div className={styles.popularItemSale}>SALE</div>
                  </div>
                </div>
                <div className={styles.popularItemBottom}>
                  <p className={styles.popularItemBottomText}>
                  Дверной Замок Golden Soft для офиса
                  </p>
                  <div className={styles.bottomBuyPrice}>
                    <p className={styles.bottomNewPrice}>33 000₽</p>
                    <p className={styles.bottomOldPrice}>39 000₽</p>
                  </div>
                </div>
              </div>

              <div className={styles.popularItem}>
                <div className={styles.popularItemHeader}>
                  <div className={styles.popularItemPic}>
                    <Image
                      src="/slider-p-4.png"
                      width={288}
                      height={320}
                      alt="Product Image"
                      layout="responsive"
                    />
                  </div>

                  <div className={styles.popularItemTop}>
                    <div className={styles.popularItemFree}>
                      <div className={styles.popularItemHave}>
                        <span>
                          <Image
                            src="/have.png"
                            width={10}
                            height={8}
                            alt="In Stock"
                          />
                        </span>
                        <p>В наличии</p>
                      </div>
                      <div className={styles.popularItemGif}>
                        <p className={styles.popularItemTextGif}>Подарок</p>
                      </div>
                    </div>
                    <div className={styles.popularItemSale}>SALE</div>
                  </div>
                </div>
                <div className={styles.popularItemBottom}>
                  <p className={styles.popularItemBottomText}>
                    Дверной Замок Golden Soft для отеля
                  </p>
                  <div className={styles.bottomBuyPrice}>
                    <p className={styles.bottomNewPrice}>9 000₽</p>
                    <p className={styles.bottomOldPrice}>12 000₽</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Sliderbottom;