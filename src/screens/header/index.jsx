import React, { useState } from "react";
import "./header.css";
function Header() {
  const [selected, setSelected] = useState(false);
  const handleActive = () => {
    setSelected(!selected);
  };
  return (
    <div className="main-wrapper">
      <div className="header-logo">
        <h2>Logo</h2>
      </div>
      <div className="header-content">
        <h2 className={ selected ? "" : "active" }  onClick={() => handleActive()}>
          Series
        </h2>
        <h2 className={selected ? "active" : ""} onClick={() => handleActive()}>
          Movies
        </h2>
      </div>
    </div>
  );
}
export default Header;
