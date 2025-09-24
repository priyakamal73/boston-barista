import { Link } from "react-router-dom";
import SectionTitle from "../Section Title/SectionTitle";
import Links from "../Links/Links";
import styles from "./Drinks.module.css";
import DisplayCard from "../Display Card/DisplayCard";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

const Drinks = () => {
  return (
    <>
      <div className={`${styles.drinks}`}>
        <div className={styles.drinksTop}>
          <SectionTitle title="Drinks" align="center" />
          <p className={styles.descriptionText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,{" "}
            <span className={styles.descriptionText2}>
              luctus nec ullamcorper mattis.
            </span>
          </p>

          <Links to="/menu" name="all drinks" />
        </div>

        <div className={styles.drinksBottom}>
          <DisplayCard
            menuCard={false}
            bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
            hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
            image={product1}
            price="$ 4.25"
            name="cappuccino"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
          />
          <DisplayCard
            menuCard={false}
            bgColor={"linear-gradient(45deg, #4C8D81 0%, #C39868 100%)"}
            hoverBgColor={"linear-gradient(45deg, #4C9588 0%, #C39868 100%)"}
            image={product2}
            price="$ 3.15"
            name="cafe latte"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
          />
          <DisplayCard
            menuCard={false}
            bgColor={"linear-gradient(45deg, #211B1A 0%, #3F3735 100%)"}
            hoverBgColor={"linear-gradient(45deg, #261F1D 0%, #463D3B 100%)"}
            image={product3}
            price="$ 2.75"
            name="dark coffee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
          />
        </div>
      </div>
    </>
  );
};

export default Drinks;
