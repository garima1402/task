import React, { useState } from "react";

function Title(props) {
  const { image, title, rating } = props;
  return (
    <div className="title-wrapper" style={{ backgroundImage: `url(${image})` }}>
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <h2 className="rating">{rating}</h2>
      </div>
    </div>
  );
}

export default Title;
