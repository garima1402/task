import React, { useEffect, useState } from "react";
import axios from "axios";

function Title(props) {
  const { titleId, image, title } = props;
  const [ratingData, setRatingData] = useState();

  const options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${titleId}/ratings`,
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getRating = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results, "resultRating");
        setRatingData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getRating();
  }, []);
  return (
    <div className="title-wrapper" style={{ backgroundImage: `url(${image})` }}>
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <h2 className="rating">{ratingData ? ratingData : 4.5}</h2>
      </div>
    </div>
  );
}

export default Title;
