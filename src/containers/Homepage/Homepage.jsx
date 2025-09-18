import { useEffect } from "react";
import styles from "./Homepage.module.css";
import "../../index.css";
import Header from "../../components/Header/Header";
import Herobanner from "../../components/Herobanner/Herobanner";
import Drinks from "../../components/Drinks/Drinks";
import Croissants from "../../components/Croissants/Croissants";
import BuyForHome from "../../components/Buy For Home/BuyForHome";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  useEffect(() => {
    const hiddenSections = document.querySelectorAll(".hidden");
    if (!hiddenSections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
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
      <div className={styles.background}>
        <div className={`hidden container`}>
          <Header />
          <Herobanner />
        </div>
      </div>

      <div className={styles.drinksBg}>
        <div className={`hidden container`}>
          <Drinks />
        </div>
      </div>

      <div className={styles.croissantBg}>
        <div className={`hidden container`}>
          <Croissants />
        </div>
      </div>

      <div className={styles.buyForHome}>
        <div className={`hidden container`}>
          <BuyForHome />
        </div>
      </div>

      <div className={styles.aboutBg}>
        <div className={`hidden container`}>
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
