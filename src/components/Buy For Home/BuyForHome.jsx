import styles from "./BuyForHome.module.css";
import buyForHome from "../../assets/buyForHome.png";
import SectionTitle from "../Section Title/SectionTitle";
import Links from "../Links/Links";

const BuyForHome = () => {
  return (
    <div className={`${styles.buyForHome} section`}>
      <div className={styles.buyForHomeLeft}>
        <img src={buyForHome} alt="buyforhome" />
      </div>

      <div className={styles.buyForHomeRight}>
        <h5>From $19.50</h5>

        <SectionTitle title="buy for home" align="left" />

        <h4>Totam rem aperiam</h4>

        <p className={styles.buyForHometext1}>
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className={styles.buyForHometext2}>
            adipiscing elit. Ut elit tellus.
          </span>
        </p>

        <Links to="/menu" name="all coffee" align="left" />
      </div>
    </div>
  );
};

export default BuyForHome;
