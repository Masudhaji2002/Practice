import Image from "next/image";
import styles from "./about.module.css";

const CompanyInfo = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <nav>
            <ul className={styles.navigationList}>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.wrapper}>
        <section className={styles.infoSection}>
          <div className={styles.mediaContainer}>
            <div className={styles.mediaWrapper}>
              <iframe
                width="605"
                height="425"
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameBorder="0"
                allowFullScreen
                className={styles.mediaFrame}
              ></iframe>
            </div>

            <div className={styles.overlayImages}>
              <div className={styles.overlayImage1}>
                <Image
                  src="/bg-video.png"
                  alt="Image 1"
                  width={95}
                  height={112}
                />
              </div>
              <div className={styles.overlayImage2}>
                <Image
                  src="/bg-video.png"
                  alt="Previous"
                  width={95}
                  height={112}
                />
              </div>
            </div>
          </div>

          <div className={styles.textContent}>
            <div>
              <h2>О НАС</h2>
              <div className={styles.brandBlock}>
                <p className={styles.brandName}>Компания</p>
                <div className={styles.brandTitle}>
                  G<span>olden Soft</span>
                </div>
              </div>
              <p className={styles.textDescription}>
                Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
                <br />
                posuere et risus non. Id et ut pellentesque consequat, amet
                <br /> erat gravida euismod pharetra.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyInfo;

