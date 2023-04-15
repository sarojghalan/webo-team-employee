import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import qrCode from "../Assests/qr.png";
import TeamTable from "../components/Team/TeamTable";
import EmployeeTable from "../components/Employee/EmployeeTable";

const Home = () => {
  const [tabToggler, setTabToggler] = useState(false);
  const togglerHandler = (e) => {
    e.preventDefault();
    setTabToggler(!tabToggler);
  };
  return (
    <>
      <div className="home">
        <NavigationBar />
        <div className="container-fluid">
          <div className="manage-user">
            <h3>Manage Users</h3>
            <div className="show-total">
              <div className="card-total blue">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-total-left">
                      <p>Teams</p>
                      <h4>23</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-total-right">
                      <span>
                        <i class="fa-solid fa-user-plus"></i>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-total yellow">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-total-left">
                      <p>Employee</p>
                      <h4>23</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-total-right">
                      <span>
                        <i class="fa-solid fa-user-plus"></i>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-tabs">
            <div className="nav-btn">
              {tabToggler ? (
                <div className="btn-main">
                  <button onClick={togglerHandler}>Teams</button>
                </div>
              ) : (
                <div className="btn-main btn-border">
                  <button onClick={togglerHandler}>Teams</button>
                </div>
              )}
              {tabToggler ? (
                <div className="btn-main btn-border">
                  <button onClick={togglerHandler}>Employee</button>
                </div>
              ) : (
                <div className="btn-main">
                  <button onClick={togglerHandler}>Employee</button>
                </div>
              )}
            </div>
          </div>
          <div className="table-data">
            {tabToggler ? <EmployeeTable /> : <TeamTable />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
