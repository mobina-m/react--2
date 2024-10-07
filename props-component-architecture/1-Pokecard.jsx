import React from "react";
const Pokecard = ({ name, type, image }) => {
  return (
    <div className="pokecard">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>type: {type}</p>
    </div>
  );
};
export default Pokecard;
