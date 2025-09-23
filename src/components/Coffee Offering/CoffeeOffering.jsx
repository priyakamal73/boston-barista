import styles from "./CoffeeOffering.module.css";
import Links from "../Links/Links";

const CoffeeOffering = () => {
  return (
    <div className={`${styles.coffeeOffering} section`}>
      <h3>Our coffee offering include a wide variety of lorem ipusm dolor.</h3>
      <hr />
      <p className={styles.coffeeofferingText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris. Consectetur
        adipisicing elit.
      </p>
      <div className={styles.galleryLink}>
        <Links to="/gallery" name="our gallery" align="left" />
      </div>
    </div>
  );
};

export default CoffeeOffering;
