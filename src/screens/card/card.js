import React from "react";
import "./card.css";

function Card(props) {
  const { heading, count, imageArr } = props;
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {/* <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">{heading}</h2>
          <h2 className="sub-text">{`${count}entries with carousel`}</h2>
        </div>

        <div className="card-box">
          {imageArr?.map((item, index) => {
            return (
              <div key={index} className="row">
                <img className="image" src="/4.jpeg" alt="card" />
                <p className="image-name">Name</p>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">Upcoming Series</h2>
          <h2 className="sub-text">10 entries with carousel</h2>
        </div>
        <div className="card-box">
          {a.map((item, index) => {
            return (
              <div key={index} className="row">
                <img className="image" src="/4.jpeg" alt="card" />
                <p className="image-name">Name</p>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">2021 Series</h2>
          <h2 className="sub-text">10 entries with carousel</h2>
        </div>
        <div className="card-box">
          {a.map((item, index) => {
            return (
              <div key={index} className="row">
                <img className="image" src="/4.jpeg" alt="card" />
                <p className="image-name">Name</p>
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
          {a.map((item, index) => {
            return (
              <div key={index} className="row">
                <img className="image" src="/4.jpeg" alt="card" />
                <p className="image-name">Name</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Card;
