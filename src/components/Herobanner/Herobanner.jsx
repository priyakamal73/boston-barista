import styles from "./Herobanner.module.css";
import "../../index.css";
import coffee from "../../assets/herobannerCoffee.png";

const Herobanner = () => {
  return (
    <div className={`${styles.herobanner} section`}>
      <h4>Welcome!</h4>
      <h1 className={styles.herotext1}>
        We serve the <span className={styles.herotext2}>richest coffee in</span>{" "}
        <span className={styles.herotext3}>the city!</span>
      </h1>
      <div className={styles.tagline}>
        <i className="fas fa-play-circle" />
        <h5>
          High quality in every cup of {" "}
          <span className={styles.tagtext2}>coffee we serve...</span>
        </h5>
        <div className={styles.heroImage}>
          <img src={coffee} alt="coffee" />
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
