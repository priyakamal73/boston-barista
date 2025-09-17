import { Link } from "react-router-dom";
import styles from "./Links.module.css";

const Links = (props) => {

  const align = props.align || "center";

  return (
    <Link to={props.to} className={`${styles.links} ${styles[align]}`}>
      <span>{props.name}</span>
      <i aria-hidden="true" className="fas fa-chevron-right"></i>
    </Link>
  );
};

export default Links;