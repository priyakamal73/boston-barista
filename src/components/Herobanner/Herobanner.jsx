import styles from "./Herobanner.module.css";
import "../../index.css";
import coffee from "../../assets/herobannerCoffee.png";

const Herobanner = () => {
  return (
    <div className={styles.herobanner}>
      <div className={styles.heroLeft}>
        <h4>Welcome!</h4>
        <h1> We serve the richest coffee in the city!</h1>
        <div className={styles.tagline}>
          <i className="fas fa-play-circle" />
          <h5>
            High quality in every cup of <br />
            coffee we serve...
          </h5>
        </div>
      </div>

      <div className={styles.heroRight}>
        <img src={coffee} alt="coffee" />
      </div>
    </div>
  );
};

export default Herobanner;
