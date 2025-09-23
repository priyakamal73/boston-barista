import styles from "./AboutGallery.module.css";
import image1 from "../../assets/gallery1.jpg";
import image2 from "../../assets/gallery2.jpg";
import image3 from "../../assets/gallery3.jpg";
import image4 from "../../assets/gallery4.jpg";
import image5 from "../../assets/gallery5.jpg";
import image6 from "../../assets/gallery6.jpg";

const AboutGallery = () => {
  return (
    <div className={`${styles.aboutGallery} section`}>
      <div className={styles.galleryLeft}>
        <div className={styles.galleryLeftTop}>
          <img src={image1} alt="image" className={styles.image1}/>
        </div>

        <div className={styles.galleryLeftBottom}>
          <img src={image2} alt="image" className={styles.image2}/>
          <img src={image3} alt="image" className={styles.image3}/>
        </div>
      </div>

      <div className={styles.galleryCenter}>
        <img src={image4} alt="image" className={styles.image4}/>
        <img src={image3} alt="image" className={styles.duplicateImage}/>
      </div>

      <div className={styles.galleryRight}>
        <div className={styles.galleryRightTop}>
          <img src={image5} alt="image" className={styles.image5}/>
        </div>

        <div className={styles.galleryRightBottom}>
          <img src={image6} alt="image" className={styles.image6}/>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
