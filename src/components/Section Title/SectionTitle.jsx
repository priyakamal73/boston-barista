import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {

  const align = props.align || "center";
  
  return (
    <div className={`${styles.SectionTitle} ${styles[align]}`}>
      <h2>{props.title}</h2>
      <hr />
    </div>
  );
};

export default SectionTitle;
