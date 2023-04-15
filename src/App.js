import React from "react";
import "./App.css";
import HomeRouting from "./Routes/HomeRouting";

const App = () => {
  return (
    <>
      {" "}
      <div className="main">
        <div className="sidebar">
          <div className="side-main">
            <p>SIDEBAR</p>
          </div>
        </div>
        <div className="main-content">
          <HomeRouting />
        </div>
      </div>
    </>
  );
};

export default App;
