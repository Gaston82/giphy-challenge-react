import React from "react";

const Gift = ({ name, image }) => {
  return (
    <article>
      <p style={{ color: "#5FD6F7" }}>{name}</p>
      <img src={image} alt={name} />
    </article>
  );
};

export default Gift;
