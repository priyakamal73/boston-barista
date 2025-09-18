import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./DisplayCard.module.css";
import ClickSpark from "../Click Spark/ClickSpark";

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
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <button>
            <Link to="#">get delivery</Link>
          </button>
        </ClickSpark>
      )}
    </Card>
  );
};

export default DisplayCard;
