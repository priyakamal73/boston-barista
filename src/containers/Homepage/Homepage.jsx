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
  return (
    <>
      <div className={styles.background}>
        <div className="container">
          <Header />
          <Herobanner />
        </div>
      </div>

      <div className={styles.drinksBg}>
        <div className="container">
          <Drinks />
        </div>
      </div>

      <div className={styles.croissantBg}>
        <div className="container">
          <Croissants />
        </div>
      </div>

      <div className={styles.buyForHome}>
        <div className="container">
          <BuyForHome />
        </div>
      </div>

      <div className={styles.aboutBg}>
        <div className="container">
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
