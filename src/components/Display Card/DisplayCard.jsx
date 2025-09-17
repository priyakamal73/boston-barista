import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./DisplayCard.module.css";

const DisplayCard = (props) => {
  const [bg, setBg] = useState(props.bgColor);

  return (
    <Card
      style={{ background: bg }}
      className={styles.card}
      onMouseEnter={() => setBg(props.hoverBgColor)}
      onMouseLeave={() => setBg(props.bgColor)}
    >
      <img src={props.image} alt="product" />
      <h4>{props.price}</h4>
      <h3>{props.name}</h3>
      <p>{props.description}</p>

      {props.button && (
        <button>
          <Link to="#">get delivery</Link>
        </button>
      )}
    </Card>
  );
};

export default DisplayCard;
