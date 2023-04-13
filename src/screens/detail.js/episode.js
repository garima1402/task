import React from "react";

function Episode(props) {
  const { episodeTitle, episodeImg, episodeDescription } = props;
  return (
    <div className="episode-wrapper">
      <h1 className="static-text">Episodes</h1>
      <div className="episode-content">
        <div>
          <img className="episode-image" src={episodeImg} />
        </div>

        <div className="episode-text">
          <h2 className="static-text">{episodeTitle}</h2>
          <p className="episode-des">{episodeDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Episode;
