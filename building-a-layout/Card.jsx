import React from "react";
const Card = ({ image, cardTitle, cardDescription, button }) => {
  return (
    <div class="card m-5" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src={image}
        alt="Card image cap"
        style={{ height: "120px" }}
      />
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardDescription}</p>
        <a href={button.url} class="btn btn-primary">
          {button.label}
        </a>
      </div>
    </div>
  );
};
export default Card;
