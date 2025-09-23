import styles from "./GalleryImages.module.css";
import galleryImage1 from "../../assets/galleryPage1.jpg";
import galleryImage2 from "../../assets/galleryPage2.jpg";
import galleryImage3 from "../../assets/galleryPage3.jpg";
import galleryImage4 from "../../assets/galleryPage4.jpg";
import galleryImage5 from "../../assets/galleryPage5.jpg";
import galleryImage6 from "../../assets/galleryPage6.jpg";
import galleryImage7 from "../../assets/galleryPage7.jpg";
import galleryImage8 from "../../assets/galleryPage8.jpg";
import galleryImage9 from "../../assets/galleryPage9.jpg";
import React from "react";
import { Image } from "antd";

const GalleryImages = () => {
  return (
    <div className={`${styles.galleryImages} section`}>
      <div className={`${styles.galleryTop} ${styles.galleryBg}`}>
        <Image
          src={galleryImage1}
          alt="galleryImage"
          className={styles.image1}
        />
        <Image
          src={galleryImage2}
          alt="galleryImage"
          className={styles.image2}
        />
        <Image
          src={galleryImage3}
          alt="galleryImage"
          className={styles.image3}
        />
      </div>

      <div className={styles.galleryBottom}>
        <div className={styles.galleryBottom1}>
          <Image
            src={galleryImage4}
            alt="galleryImage"
            className={styles.image4}
          />
          <Image
            src={galleryImage5}
            alt="galleryImage"
            className={styles.image5}
          />
          <Image
            src={galleryImage8}
            alt="galleryImage"
            className={styles.image8}
          />
        </div>

        <div className={styles.galleryBottom2}>
          <Image
            src={galleryImage6}
            alt="galleryImage"
            className={styles.image6}
          />
          <Image
            src={galleryImage9}
            alt="galleryImage"
            className={styles.image9}
          />
          <Image
            src={galleryImage7}
            alt="galleryImage"
            className={styles.image7}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
