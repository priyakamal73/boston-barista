import styles from "./Homepage.module.css";
import "../../index.css";
import Header from "../../components/Header/Header";
import Herobanner from "../../components/Herobanner/Herobanner";
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

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
