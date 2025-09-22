import { useEffect } from "react";
import styles from "./Menu.module.css";
import "../../index.css";
import Header from "../../components/Header/Header";
import AllDrinks from "../../components/All Drinks/AllDrinks";
import CoffeeForHome from "../../components/Coffee For Home/CoffeeForHome";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
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
      <div className={styles.menuBg}>
        <div className={`${styles.hidden} container`}>
          <Header />
          <h2 className={styles.menuPageTitle}>
            Our Menu
          </h2>
        </div>
      </div>

      <div className={styles.menuDrinksBg}>
        <div className={`${styles.hidden} container`}>
          <AllDrinks />
        </div>
      </div>

      <div className={styles.coffeeForHomeBg}>
        <div className={`${styles.hidden} container`}>
          <CoffeeForHome />
        </div>
      </div>

      <div className={`${styles.hidden} container`}>
        <Footer />
      </div>
    </>
  );
};

export default Menu;
