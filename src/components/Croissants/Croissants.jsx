import styles from "./Croissants.module.css";
import SectionTitle from "../Section Title/SectionTitle";
import Links from "../Links/Links";
import croissant from "../../assets/croissant.png";

const Croissants = () => {
  return (
    <div className={`${styles.croissants} section`}>
      <div className={styles.croissantsLeft}>
        <h5>From $2.50</h5>
        <SectionTitle title="Croissants" align="left" />
        <h4>Duis aute irure quasi</h4>
        <p className={styles.croissantText1}>
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className={styles.croissantText2}>
            adipiscing elit. Ut elit tellus.
          </span>
        </p>
        <Links to="/menu" name="all croissants" align="left" />
      </div>

      <div className={styles.croissantsRight}>
        <img src={croissant} alt="croissant" />
      </div>
    </div>
  );
};

export default Croissants;
