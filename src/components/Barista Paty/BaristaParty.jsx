import styles from "./BaristaParty.module.css";
import Links from "../Links/Links";
import party from "../../assets/party.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import ClickSpark from "../Click Spark/ClickSpark";

const BaristaParty = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className={`${styles.BaristaParty} section`}>
        <div className={styles.partyLeft}>
          <div className={styles.partyDetails}>
            <div className={styles.partyText}>
              <h2>Barista Party</h2>
              <hr />
              <h4>Every Friday & Saturday</h4>
              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt {" "}
                <span className={styles.partyDesc2}>
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </span>
              </p>
              <div className={styles.contactLink}>
                <Links to="/contact" name="make reservation" />
              </div>
            </div>

            <div className={styles.partyImage}>
              <img src={party} alt="party" />
            </div>
          </div>
        </div>

        <div className={styles.partyRight}>
          <h3>Location</h3>
          <hr />
          <p>
            You can find us consectetur elit, sed do eiusmod tempor incididun.
          </p>

          <div className={styles.address}>
            <div className={styles.addressLeft}>
              <i className="bi bi-geo-alt-fill" />
            </div>

            <div className={styles.addressRight}>
              <h5>Address</h5>
              <p>123 Fifth Avenue, New York, NY 10160</p>
            </div>
          </div>

          <Links to="/contact" name="see on google maps" />
        </div>
      </div>
    </ClickSpark>
  );
};

export default BaristaParty;
