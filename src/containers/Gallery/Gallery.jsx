import styles from "./Gallery.module.css";
import { useEffect } from "react";
import "../../index.css";
import Header from "../../components/Header/Header";
import GalleryImages from "../../components/Gallery Images/GalleryImages";
import Footer from "../../components/Footer/Footer";

const Gallery = () => {
  useEffect(() => {
    const hiddenSections = document.querySelectorAll(`.${styles.hidden}`);
    if (!hiddenSections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    hiddenSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.galleryBg}>
        <div className={`${styles.hidden} container`}>
          <Header />
          <h1 className={styles.galleryPageTitle}>Gallery</h1>
        </div>
      </div>

      <div className={`${styles.hidden} container`}>
        <GalleryImages />
      </div>

      <div className={`${styles.hidden} container`}>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
