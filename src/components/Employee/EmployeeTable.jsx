import React from "react";
import qrCode from "../../Assests/qr.png";
import SubBar from "../SubBar/SubBar";
import BasicPagination from "../Pagination/Pagination";
import ProfileImg from "../../Assests/profile.jpg";

const EmployeeTable = () => {
  return (
    <>
      <SubBar title="Employee" filterMode={false} />
      <div class="table-responsive">
        <div class="table-wrapper">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Current Team</th>
                <th>Mobile Number</th>
                <th>Email Address</th>
                <th>Designation</th>
                <th>Billable Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td> 1David Doe</td>
                <td> Team 1</td>
                <td>+977 9856565625</td>
                <td>aaa@gmail.com</td>
                <td>Electrical</td>
                <td>40 hours/week </td>
                <td>
                  <div className="d-flex gap-2">
                    <span
                      className="view-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalTwo"
                    >
                      <i class="fa-solid fa-eye"></i>
                    </span>
                    <span className="edit-icon">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                    <span
                      className="delete-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </span>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              <strong>Delete Employee</strong>
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            Are you sure want to delete{" "}
                            <strong>David Doe</strong> from the list ?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn-confirm">
                              Confirm
                            </button>
                            <button
                              type="button"
                              class="btn-end"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-main">
        <BasicPagination />
      </div>
      <div
        class="modal fade"
        id="exampleModalTwo"
        tabindex="-1"
        aria-labelledby="exampleModalLabelTwo"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabelTwo">
                <strong> Employee Information</strong>
              </h1>
              <p
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></p>
            </div>
            <div class="modal-body">
              <div className="view-image">
                <img src={ProfileImg} alt="profile" />
                <h3>David Doe.</h3>
                <p>DavidDoe@gmail.com</p>
              </div>
              <p className="tag">Employee</p>
              <hr className="break" />
              <div className="view-basic">
                <div className="row">
                  <div className="col-md-6">
                    <p>Designation</p>
                    <p>Fabricator</p>
                  </div>
                  <div className="col-md-6">
                    <p>Contact</p>
                    <p>+977 9898656525</p>
                  </div>
                </div>
              </div>
              <hr className="break" />
              <div className="view-basic">
                <div className="row">
                  <div className="col-md-6">
                    <p>Start Time</p>
                    <p>15/04/2023</p>
                  </div>
                  <div className="col-md-6">
                    <p>Role</p>
                    <p>staff</p>
                  </div>
                  <div className="col-md-6">
                    <p>Billable Staff</p>
                    <p>User is Billable</p>
                  </div>
                  <div className="col-md-6">
                    <p>Billable Hours</p>
                    <p>40 Billable Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <p>Edit Profile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
