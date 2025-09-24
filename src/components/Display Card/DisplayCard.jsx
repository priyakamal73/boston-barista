import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import styles from "./DisplayCard.module.css";
import ClickSpark from "../Click Spark/ClickSpark";
import { setProductDetails } from "../../redux/slices/checkoutSlice";

const DisplayCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bg, setBg] = useState(props.bgColor);

  const numericPrice = Number(props.price.replace(/[^0-9.]/g, ""));

  const handleClick = () => {
    dispatch(
      setProductDetails({
        image: props.image,
        name: props.name,
        price: numericPrice,
        singlePrice: numericPrice,
        quantity: 1,
      })
    );
    navigate("/checkout");
  };

  const renderHomeCard = () => {
    return (
      <Card
        style={{ background: bg }}
        className={`${styles.card} ${styles.homeCard}`}
        onMouseEnter={() => setBg(props.hoverBgColor)}
        onMouseLeave={() => setBg(props.bgColor)}
      >
        <img src={props.image} alt="product" />
        <h4>{props.price}</h4>
        <h3>{props.name}</h3>
        <p>{props.description}</p>

        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <button onClick={() => handleClick()}>
            <Link to="#">get delivery</Link>
          </button>
        </ClickSpark>
      </Card>
    );
  };

  const renderMenuCard = () => {
    return (
      <Card
        style={{ background: bg }}
        className={`${styles.card} ${styles.menuCard}`}
        onMouseEnter={() => setBg(props.hoverBgColor)}
        onMouseLeave={() => setBg(props.bgColor)}
      >
        <img
          src={props.image}
          alt="product"
          style={{ width: props.imageWidth, height: props.imageHeight }}
        />
        <h5>{props.price}</h5>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </Card>
    );
  };

  return props.menuCard ? renderMenuCard() : renderHomeCard();
};

export default DisplayCard;
