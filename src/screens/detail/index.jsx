import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Description from "./description";
import "./details.css";
import Episode from "./episode";
import Title from "./title";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [detailData, setDetail] = useState();
  const [episode, setEpisode] = useState();

  const options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const getDetail = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results, "result");
        setDetail(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const optionEpisode = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/series/${id}/1`,
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const getEpisodeId = () => {
    axios
      .request(optionEpisode)
      .then(function (response) {
        console.log(response.data.results, "tconst");
        setEpisode(response.data.results[0]?.tconst);
        localStorage.setItem(response.data.results[0]?.tconst, "episodeId");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getDetail();
    getEpisodeId();
  }, []);
  return (
    <div>
      <Title
        titleId={id}
        image={detailData?.primaryImage?.url}
        title={detailData?.titleText?.text}
      />
      <div className="details-wrapper">
        <Description
          desText={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        {detailData && detailData?.titleText ? (
          <Episode  />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Details;
