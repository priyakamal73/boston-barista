import styles from "./Magna.module.css";

const Magna = () => {
  return (
    <div className={`${styles.magna} section`}>
      <div className={styles.magnaCoffee}>
        <h3 className={styles.magnaCoffeeDescription1}>
          We are excited to introduce our{" "}
          <span className={styles.magnaCoffeeDescription2}></span> Coffee Shop
          magna{" "}
          <span className={styles.magnaCoffeeDescription3}>
            aliqua. Ut enim ad
          </span>{" "}
          <span className={styles.magnaCoffeeDescription4}>
            {" "}
            minim veniam, quis nostrud.
          </span>
        </h3>

        <h6>Tailored-Made Coffee</h6>
      </div>

      <div className={styles.magnaDescription}>
        <h5>The perfect place to enjoy your coffee</h5>
        <p className={styles.magnaDescriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p className={styles.magnaDescriptionText}>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p className={styles.magnaDescriptionText}>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  );
};

export default Magna;
