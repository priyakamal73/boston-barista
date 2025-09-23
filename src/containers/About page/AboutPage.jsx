import { useEffect } from "react";
import styles from "./AboutPage.module.css";
import "../../index.css";
import Header from "../../components/Header/Header";
import AboutDescription from "../../components/About Description/AboutDescription";
import Magna from "../../components/Coffee Shop Magna/Magna";
import CoffeeOffering from "../../components/Coffee Offering/CoffeeOffering";
import AboutGallery from "../../components/About Gallery/AboutGallery";
import Footer from "../../components/Footer/Footer";

const About = () => {
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
      <div className={styles.aboutBg}>
        <div className={`${styles.hidden} container`}>
          <Header />
          <h1 className={styles.aboutPageTitle}>About</h1>
        </div>
      </div>

      <div className={`${styles.hidden} container`}>
        <AboutDescription />
      </div>

      <div className={styles.magnaBg}>
        <div className={`${styles.hidden} container`}>
          <Magna />
        </div>
      </div>

      <div className={`${styles.hidden} container`}>
        <CoffeeOffering />
      </div>

      <div className={styles.aboutGalleryBg}>
        <div className={`${styles.hidden} container`}>
          <AboutGallery />
        </div>
      </div>

      <div className={`${styles.hidden} container`}>
        <Footer />
      </div>
    </>
  );
};

export default About;
