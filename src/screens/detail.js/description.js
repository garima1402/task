import React from "react";

function Description(props) {
  const { desText } = props;
  return (
    <div>
      <h2 className="static-text">Series Description</h2>
      <p className="des-text">{desText}</p>
    </div>
  );
}

export default Description;
