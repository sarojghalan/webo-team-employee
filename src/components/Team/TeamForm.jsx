import React from "react";
import qrCode from "../../Assests/qr.png";
const TeamForm = () => {
  return (
    <>
      <div className="manage-team">
        <p>
          Manage Users{" "}
          <span>
            <i class="fa-solid fa-angle-right"></i>
          </span>
          Teams{" "}
          <span>
            <i class="fa-solid fa-angle-right"></i>
          </span>{" "}
          Add Teams
        </p>
        <h3>Add Teams</h3>
        <div className="team-form">
          <div className="row">
            <div className="col-md-3">
              <p className="form-title">Basic Information</p>
            </div>
            <div className="col-md-7">
              <div className="team-basic">
                <div className="team-input">
                  <label htmlFor="">Team Name</label>
                  <br />
                  <input type="text" placeholder="Enter Team Name " />
                </div>
                <div className="team-input">
                  <label htmlFor="">Team Password</label>
                  <br />
                  <input type="text" placeholder="Team Password " />
                </div>
              </div>
              <hr className="break"/>
            </div>
            <div className="col-md-3">
              <p className="form-title"> Members</p>
            </div>
            <div className="col-md-7">
              <div className="team-member">
                <label htmlFor="">Team Members</label>
                <br />
                <div className="team-member-select">
                  <select id="member">
                    <option value="member1">Member 1</option>
                    <option value="member2">Member 2</option>
                    <option value="member3">Member 3</option>
                    <option value="member4">Member 4</option>
                  </select>
                </div>
                <label htmlFor="">Billable Hours</label>
                <div className="d-flex">
                  <input type="text" placeholder="Enter Billable Hours" />
                  <button>Hours</button>
                </div>
                <hr className="break" />
              </div>
            </div>
            <div className="col-md-3">
              <p className="form-title">Team QR</p>
            </div>
            <div className="col-md-7">
              <div className="team-qr d-flex">
                <img src={qrCode} alt="qr" />
                <div className="">
                  <div className="print-btn">
                    <button>
                      {" "}
                      <span className="print-icon">
                        <i class="fa-solid fa-print"></i>
                      </span>
                      Print
                    </button>
                  </div>
                  <div className="download-btn">
                    <button>
                      {" "}
                      <span>
                        <i class="fa-solid fa-download"></i>
                      </span>{" "}
                      Download
                    </button>
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

export default TeamForm;
