import styles from "./AboutDescription.module.css";

const AboutDescription = () => {
  return (
    <div className={`${styles.aboutDescription} section`}>
      <h6>Tailored-Made Coffee</h6>
      <h2>
        We offer a unique coffee house environment unlike any other in N.Y.
      </h2>
      <hr />
    </div>
  );
};

export default AboutDescription;
