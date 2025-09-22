import styles from "./CoffeeForHome.module.css";
import SectionTitle from "../Section Title/SectionTitle";
import DisplayCard from "../Display Card/DisplayCard";
import product1 from "../../assets/coffee1.png";
import product2 from "../../assets/coffee2.png";
import product3 from "../../assets/coffee3.png";
import product4 from "../../assets/coffee4.png";

const CoffeeForHome = () => {
  return (
    <>
      <div className={`${styles.coffeeForHome} section`}>
        <div className={styles.coffeeForHomeLeft}>
          <SectionTitle title="Coffee For Home" align="center" />
          <p className={styles.coffeeForHomeText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec{" "}
            <span className={styles.coffeeForHomeText2}>
              ullamcorper mattis.
            </span>
          </p>
          <div className={styles.coffeeCards}>
            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #4C8D81 0%, #C39868 100%)"}
              hoverBgColor={"linear-gradient(45deg, #4C9588 0%, #C39868 100%)"}
              image={product1}
              imageWidth="100%"
              imageHeight="100%"
              price="$ 19.90"
              name="liberica"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />
            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
              hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
              image={product2}
              imageWidth="100%"
              imageHeight="100%"
              price="$ 24.20"
              name="arabica"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />

            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #211B1A 0%, #3F3735 100%)"}
              hoverBgColor={"linear-gradient(45deg, #261F1D 0%, #463D3B 100%)"}
              image={product3}
              imageWidth="100%"
              imageHeight="100%"
              price="$ 29.50"
              name="robusta"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />

            <DisplayCard
              menuCard={true}
              bgColor={"linear-gradient(45deg, #A77443 0%, #C39868 100%)"}
              hoverBgColor={"linear-gradient(45deg, #996335 0%, #CAA57A 100%)"}
              image={product4}
              imageWidth="100%"
              imageHeight="100%"
              price="$ 34.90"
              name="excelsa"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeForHome;
