import React from "react";
import classnames from "classnames";
import laCarte from "../images/laCarte.png";
import "./card.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={laCarte} alt="laCarte" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="laCarte" />
      </div>
    </div>
  );
};

export default Card;