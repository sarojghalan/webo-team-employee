import React from "react";
import qrCode from "../../Assests/qr.png";

const EmployeeForm = () => {
  return (
    <>
      <div className="manage-team">
        <p>
          Manage Users{" "}
          <span>
            <i class="fa-solid fa-angle-right"></i>
          </span>
          Employee{" "}
          <span>
            <i class="fa-solid fa-angle-right"></i>
          </span>{" "}
          Add Employee
        </p>
        <h3>Add Employee</h3>
        <div className="team-form">
          <div className="row">
            <div className="col-md-3">
              <p className="form-title">Basic Information</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Name</label>
                    <br />
                    <input type="text" placeholder="Enter Name " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor="">Middle Name</label>
                    <br />
                    <input type="text" placeholder="Enter Middle Name " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Surname</label>
                    <br />
                    <input type="text" placeholder="Enter Surname " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Birth Day</label>
                    <br />
                    <input type="date" placeholder="Enter Surname " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Gender</label>
                    <br />
                    <select name="" id="">
                      <option value="">male</option>
                      <option value="">female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Address</label>
                    <br />
                    <input type="text" placeholder="Enter Address " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Phone Number</label>
                    <br />
                    <input type="text" placeholder="Enter Phone Number " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Email Address</label>
                    <br />
                    <input type="text" placeholder="Enter Email Address " />
                  </div>
                </div>
              </div>
              <hr className="break" />
            </div>
            <div className="col-md-3">
              <p className="form-title"> Working Hours</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Start Time</label>
                    <br />
                    <input type="time" placeholder="Enter Phone Number " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> End Time</label>
                    <br />
                    <input type="time" placeholder="Enter Email Address " />
                  </div>
                </div>
              </div>
              <hr className="break" />
            </div>
            <div className="col-md-3">
              <p className="form-title">Jobs</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Job Position</label>
                    <br />
                    <input type="text" placeholder="Enter Job Position " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Team</label>
                    <br />
                    <select name="" id="">
                      <option value="">Team 1</option>
                      <option value="">Team 2</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="break" />
            </div>
            <div className="col-md-3">
              <p className="form-title">Billable Information</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-input">
                  <div className="bill-check">
                    <input type="checkbox" /><p>This user is billable</p>
                  </div>
                    <label htmlFor=""> Billable Hours</label>
                    <br />
                    <div className="input-flex">
                      <input type="text" placeholder="Enter Billable Hours" />
                      <button>Hours</button>
                      <button className="enter-btn"> Enter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default EmployeeForm;
