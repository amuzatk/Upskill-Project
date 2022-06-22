import React from "react";

import "./Card.css";
// import Ribbon1 from "../assets/logos/ribbon-1.png";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "382px", height: "400px" }}>
      <img className="card-img" src={props.imgsrc} alt="Card image" />
      <div className="card-body">
        <h4 className="title">{props.title}</h4>
        <p className="card-text">
          {props.text}
          {/* Promising Talent is an individual with less than 5 years experience in
          Nigeria technology ecosystem. Such individual are well recognized in
          their field for impacting with their skills. */}
        </p>
      </div>
    </div>
  );
};

export default Card;
