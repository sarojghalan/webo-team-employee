import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(1); // remove the leading "/"
  console.log("pageName: ", pageName === "add_employee");
  const navigateHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="center navigation">
      <p onClick={navigateHandler}>
        {pageName === "add_employee" ||  pageName === "add_team" ? "Back To Home" : "NAVIGATION BAR"}
      </p>
    </div>
  );
};

export default NavigationBar;
