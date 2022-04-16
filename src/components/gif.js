import React from "react";
import "./gif.css";

const Gif = ({ name, image }) => {
  return (
    <article>
      <img className="card__image" src={image} alt={name} />
      <p style={{ color: "#5FD6F7" }}>{name}</p>
    </article>
  );
};

export default Gif;
