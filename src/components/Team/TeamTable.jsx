import React from "react";
import qrCode from "../../Assests/qr.png";
import SubBar from "../SubBar/SubBar";
import BasicPagination from "../Pagination/Pagination";

const TeamTable = () => {
  return (
    <>
    <SubBar  title="Team" filterMode={true}/>
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
                  <span className="delete-icon">
                    <i class="fa-solid fa-trash"></i>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Team 2</td>
              <td> 18 </td>
              <td>
                <div className="qr-img">
                  <img src={qrCode} alt="" />
                </div>
              </td>
              <td> 2000 </td>
              <td>
                <div className="d-flex gap-2">
                  <span className="edit-icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </span>
                  <span className="delete-icon">
                    <i class="fa-solid fa-trash"></i>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Team 2</td>
              <td> 18 </td>
              <td>
                <div className="qr-img">
                  <img src={qrCode} alt="" />
                </div>
              </td>
              <td> 2000 </td>
              <td>
                <div className="d-flex gap-2">
                  <span className="edit-icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </span>
                  <span className="delete-icon">
                    <i class="fa-solid fa-trash"></i>
                  </span>
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
