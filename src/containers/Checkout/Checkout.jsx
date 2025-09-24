import styles from "./Checkout.module.css";
import { useEffect } from "react";
import "../../index.css";
import Header from "../../components/Header/Header";
import CheckoutForm from "../../components/Checkout Form/CheckoutForm";
import Footer from "../../components/Footer/Footer";

const Checkout = () => {
  useEffect(() => {
    const hiddenSections = document.querySelectorAll(`.${styles.hidden}`);
    if (!hiddenSections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    hiddenSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.checkoutBg}>
        <div className={`${styles.hidden} container`}>
          <Header />
          <h1 className={styles.checkoutPageTitle}>Checkout</h1>
        </div>
      </div>

      <div className={`${styles.hidden} container`}>
        <CheckoutForm />
      </div>

      <div className={`${styles.hidden} container`}>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
