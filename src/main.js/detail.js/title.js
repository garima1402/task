import React from "react";

function Title(props) {
  const { image, title, rating } = props;
  return (
    <div className="title-container">
      <img src={image} alt="series-image" />
      <h1>{title}</h1>
      <h2>{rating}</h2>
    </div>
  );
}

export default Title;
