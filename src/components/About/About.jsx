import styles from "./About.module.css";
import SectionTitle from "../Section Title/SectionTitle";
import Links from "../Links/Links";

const About = () => {
  return (
    <div className={`${styles.about} section`}>
      <div className={styles.aboutTop}>
        <SectionTitle title="about" align="center" />
        <p className={styles.aboutText1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,{" "}
          <span className={styles.aboutText2}>
            luctus nec ullamcorper mattis.
          </span>
        </p>
      </div>

      <div className={styles.aboutBottom}>
        <div className={styles.tailorMadeCoffee}>
          <h6>Tailored-Made Coffee</h6>
          <h3>
            <span className={styles.coffeeText1}>We offer a</span>
            <span className={styles.coffeeText2}>unique coffee</span>
            <span className={styles.coffeeText3}>house</span>
            <span className={styles.coffeeText4}>environment</span>
            <span className={styles.coffeeText5}>unlike any</span>
            <span className={styles.coffeeText6}>other in N.Y.</span>
          </h3>
        </div>

        <div className={styles.aboutDescription}>
          <h5>The perfect place to enjoy your coffee</h5>
          <p className={styles.aboutDescriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className={styles.aboutDescriptionText}>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <p className={styles.aboutDescriptionText}>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Links to="/about" name="read more" align="left" />
        </div>
      </div>
    </div>
  );
};

export default About;
