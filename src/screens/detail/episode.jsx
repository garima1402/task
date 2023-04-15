import axios from "axios";
import React, { useEffect, useState } from "react";

function Episode() {
  const [episodeData, setEpisodeData] = useState();
  useEffect(() => {
    getEpisode();
    const getId = localStorage.getItem("episodeId");
  }, []);
  const getId = localStorage.getItem("episodeId");

  const optionEpisode = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/episode/${getId}`,
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getEpisode = () => {
    axios
      .request(optionEpisode)
      .then(function (response) {
        console.log(response.data, "here");
        setEpisodeData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="episode-wrapper">
      <h1 className="static-text">Episodes</h1>

      {/* {episodeData.map((item,index) => {
        return (
        )
      })} */}
      <div className="episode-content">
        <div>
          <img
            className="episode-image"
            src={
              episodeData?.primaryImage
                ? episodeData?.primaryImage?.url
                : "noImage.png"
            }
            alt="Image not available"
          />
        </div>

        <div className="episode-text">
          <h2 className="static-text">{episodeData?.titleText?.text}</h2>
          <p className="episode-des">
            {episodeData?.primaryImage
              ? episodeData?.primaryImage?.caption?.plainText
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Episode;
