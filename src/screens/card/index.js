import React from "react";
import Card from "./card";

function CardMain() {
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Card heading="Upcoming Series" count={10} imageArr={img} />
    </div>
  );
}

export default CardMain;
