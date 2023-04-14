import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router";
function Card() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [title2020, setTitle2020] = useState();
  const [title2021, setTitle2021] = useState();
  const [title2022, setTitle2022] = useState();

  const options2020 = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: { year: "2020" },
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const options2021 = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: { year: "2021" },
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const options2022 = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: { year: "2022" },
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    headers: {
      "X-RapidAPI-Key": "f5eafb5241mshffff63e5bed6131p17b7e5jsnca6b530e270e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getUpcoming = () => {
    axios
      .request(options)
      .then(function (response) {
        setTitle(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const get2020 = () => {
    axios
      .request(options2020)
      .then(function (response) {
        setTitle2020(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const get2021 = () => {
    axios
      .request(options2021)
      .then(function (response) {
        setTitle2021(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const get2022 = () => {
    axios
      .request(options2022)
      .then(function (response) {
        setTitle2022(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getUpcoming();
    get2022();
    get2021();
    get2020();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">Upcoming Series</h2>
          <h2 className="sub-text">10 entries with carousel</h2>
        </div>

        <div className="card-box">
          {title?.map((item, index) => {
            return (
              // <Carousel showThumbs={false}>
              <div
                key={index}
                className="row"
                onClick={() => {
                  navigate(`/details/${item.id}`);
                }}
              >
                <img
                  className="image"
                  src={item?.primaryImage?.url}
                  alt="No Image"
                />
                <p className="image-name">{item?.titleText.text}</p>
              </div>
              // </Carousel>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">2022 Series</h2>
          <h2 className="sub-text">10 entries with carousel</h2>
        </div>
        <div className="card-box">
          {title2022?.map((item, index) => {
            return (
              <div
                key={index}
                className="row"
                onClick={() => {
                  navigate(`/details/${item.id}`);
                }}
              >
                <img
                  className="image"
                  src={item?.primaryImage?.url}
                  alt="No Image"
                />
                <p className="image-name">{item?.titleText.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">2021 Series</h2>
          <h2 className="sub-text">10 entries with carousel</h2>
        </div>
        <div className="card-box">
          {title2021?.map((item, index) => {
            return (
              <div
                key={index}
                className="row"
                onClick={() => {
                  navigate(`/details/${item.id}`);
                }}
              >
                <img
                  className="image"
                  src={item?.primaryImage?.url}
                  alt="No Image"
                />
                <p className="image-name">{item?.titleText.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">2020 Series</h2>
          <h2 className="sub-text">10 entries with carousel</h2>
        </div>
        <div className="card-box">
          {title2020?.map((item, index) => {
            return (
              <div
                key={index}
                className="row"
                onClick={() => {
                  navigate(`/details/${item.id}`);
                }}
              >
                <img
                  className="image"
                  src={item?.primaryImage?.url ? item?.primaryImage?.url : "4.jpeg"}
                  alt="No Image"
                />
                <p className="image-name">{item?.titleText.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Card;
