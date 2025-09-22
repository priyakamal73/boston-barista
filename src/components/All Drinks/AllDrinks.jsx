import { Link } from "react-router-dom";
import SectionTitle from "../Section Title/SectionTitle";
import styles from "./AllDrinks.module.css";
import DisplayCard from "../Display Card/DisplayCard";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

const AllDrinks = () => {
  return (
    <>
      <div className={`${styles.menuDrinks}`}>
        <div className={styles.menuDrinksTop}>
          <SectionTitle title="Drinks" align="center" />
          <p className={styles.menuDescriptionText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,{" "}
            <span className={styles.menuDescriptionText2}>
              luctus nec ullamcorper mattis.
            </span>
          </p>
        </div>

        <div className={styles.menuDrinksBottom}>
          <div className={styles.menuDrinksRow1}>
            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
              hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
              image={product1}
              imageWidth="75%"
              imageHeight="100%"
              price="$ 4.20"
              name="cappuccino"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />
            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #4C8D81 0%, #C39868 100%)"}
              hoverBgColor={"linear-gradient(45deg, #4C9588 0%, #C39868 100%)"}
              image={product2}
              imageWidth="75%"
              imageHeight="100%"
              price="$ 3.15"
              name="cafe latte"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />
            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
              hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
              image={product1}
              imageWidth="75%"
              imageHeight="100%"
              price="$ 4.20"
              name="cappuccino"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />
            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #211B1A 0%, #3F3735 100%)"}
              hoverBgColor={"linear-gradient(45deg, #261F1D 0%, #463D3B 100%)"}
              image={product3}
              imageWidth="75%"
              imageHeight="100%"
              price="$ 2.75"
              name="dark coffee"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />
          </div>
        </div>

        <div className={styles.menuDrinksRow2}>
          <DisplayCard
            menuCard={true}
            bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
            hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
            image={product1}
            imageWidth="75%"
            imageHeight="100%"
            price="$ 4.20"
            name="cappuccino"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing."
          />
          <DisplayCard
            menuCard={true}
            bgColor={"linear-gradient(45deg, #211B1A 0%, #3F3735 100%)"}
            hoverBgColor={"linear-gradient(45deg, #261F1D 0%, #463D3B 100%)"}
            image={product3}
            imageWidth="75%"
            imageHeight="100%"
            price="$ 2.75"
            name="dark coffee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing."
          />
          <DisplayCard
            menuCard={true}
            bgColor={"linear-gradient(45deg, #4C8D81 0%, #C39868 100%)"}
            hoverBgColor={"linear-gradient(45deg, #4C9588 0%, #C39868 100%)"}
            image={product2}
            imageWidth="75%"
            imageHeight="100%"
            price="$ 3.15"
            name="cafe latte"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing."
          />
          <DisplayCard
            menuCard={true}
            bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
            hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
            image={product1}
            imageWidth="75%"
            imageHeight="100%"
            price="$ 4.20"
            name="cappuccino"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing."
          />
        </div>
      </div>
    </>
  );
};

export default AllDrinks;
