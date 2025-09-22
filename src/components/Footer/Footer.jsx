import styles from "./Footer.module.css";
import ClickSpark from "../Click Spark/ClickSpark";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className={`${styles.footer} section`}>
        <div className={styles.footerContent}>
          <div className={styles.aboutUs}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className={styles.socialIcons}>
              <SocialIcon
                url="www.facebook.com"
                bgColor="#A67D62"
                borderRadius="0%"
                style={{ width: "35px", borderRadius: "2px" }}
              />
              <SocialIcon
                url="www.twitter.com"
                bgColor="#A67D62"
                borderRadius="0%"
                style={{ width: "35px", borderRadius: "2px" }}
              />
              <SocialIcon
                url="www.youtube.com"
                bgColor="#A67D62"
                borderRadius="0%"
                style={{ width: "35px", borderRadius: "2px" }}
              />
            </div>
          </div>

          <div className={styles.contact}>
            <h5>Contact Us</h5>
            <p>13 Fifth Avenue, New York, NY 10160</p>
            <p>929-242-6868</p>
            <p>contact@info.com</p>
          </div>

          <div className={styles.openingHours}>
            <h5>Opening Hours</h5>
            <p>Mon - Fri: 8AM to 8PM</p>
            <p>Sat: 8AM to 4PM</p>
            <p>Sun: 8AM to 2PM</p>
          </div>
        </div>

        <div className={styles.copyrights}>
          <p>Copyright © 2025 Coffee Shop | Powered by Coffee Shop</p>
        </div>
      </div>
    </ClickSpark>
  );
};

export default Footer;