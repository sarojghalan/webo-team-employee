import React from "react";
import qrCode from "../../Assests/qr.png";
import SubBar from "../SubBar/SubBar";
import BasicPagination from "../Pagination/Pagination";

const TeamTable = () => {
  return (
    <>
      <SubBar title="Team" filterMode={true} />
      <div class="table-responsive">
        <div class="table-wrapper">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Members</th>
                <th>QR Details</th>
                <th>Total Man Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Team 1</td>
                <td> 16 </td>
                <td>
                  <div className="qr-img">
                    <img src={qrCode} alt="" />
                  </div>
                </td>
                <td> 2700 </td>
                <td>
                  <div className="d-flex gap-2">
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
                              <strong>Delete Team</strong>
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            Are you sure want to delete <strong>Team 1</strong>{" "}
                            from the list ?
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
    </>
  );
};

export default TeamTable;
