import React from 'react'
import qrCode from '../../Assests/qr.png';
import SubBar from '../SubBar/SubBar';
import BasicPagination from '../Pagination/Pagination';

const EmployeeTable = () => {
  return (
    <>
    <SubBar title="Employee" filterMode={false}/>
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
              <td>
                Electrical
              </td>
              <td>40 hours/week  </td>
              <td>
                <div className="d-flex gap-2">
                <span className='view-icon'>
                <i class="fa-solid fa-eye"></i>
                </span>
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
              <td>01</td>
              <td> 1David Doe</td>
              <td> Team 1</td>
              <td>+977 9856565625</td>
              <td>aaa@gmail.com</td>
              <td>
                Electrical
              </td>
              <td>40 hours/week  </td>
              <td>
                <div className="d-flex gap-2">
                <span className='view-icon'>
                <i class="fa-solid fa-eye"></i>
                </span>
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
              <td>01</td>
              <td> 1David Doe</td>
              <td> Team 1</td>
              <td>+977 9856565625</td>
              <td>aaa@gmail.com</td>
              <td>
                Electrical
              </td>
              <td>40 hours/week  </td>
              <td>
                <div className="d-flex gap-2">
                <span className='view-icon'>
                <i class="fa-solid fa-eye"></i>
                </span>
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

  )
}

export default EmployeeTable