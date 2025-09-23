import { useEffect } from "react";
import styles from "./ContactPage.module.css";
import "../../index.css";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
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
      <div className={styles.contactBg}>
        <div className={`${styles.hidden} container`}>
          <Header />
          <h1 className={styles.contactPageTitle}>Contact</h1>
        </div>
      </div>

      <div className={`${styles.contactContent} ${styles.hidden} container`}>
        <Contact />
      </div>

      <div className={`${styles.hidden} container`}>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
