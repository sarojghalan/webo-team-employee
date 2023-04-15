import React,{useEffect, useState} from "react";
import qrCode from "../../Assests/qr.png";
import { useSnackbar } from "notistack";
import { useLocation, useNavigate } from "react-router-dom";
const TeamForm = () => {
  const [teamName,setTeamName] = useState("");
  const [password,setPassword] = useState("");
  const [member , setMember] = useState("");
  const [hours,setHours] = useState("");
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(()=>{
    if(location.state){
      setTeamName("Team 1");
      setPassword("password");
      setMember("member1");
      setHours("20");
    }
  },[location.state])
  const saveHandler = (e) => {
    e.preventDefault();
    if(teamName === "" || password === "" || member === "" || hours === ""){
      enqueueSnackbar("Empty Field Detected !",{variant:"warning"});
    }else{
      enqueueSnackbar("Team has been successfully created . ",{variant:"success"});
      navigate('/')
    }
  }
  console.log("fasle : ",member)
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
                  <input type="text" placeholder="Enter Team Name " value={teamName} onChange={(e)=>setTeamName(e.target.value)} />
                </div>
                <div className="team-input">
                  <label htmlFor="">Team Password</label>
                  <br />
                  <input type="text" placeholder="Team Password " value={password} onChange={(e)=>setPassword(e.target.value)} />
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
                  <select id="member" value={member} onChange={(e)=>setMember(e.target.value)}>
                    <option value="member1">Member 1</option>
                    <option value="member2">Member 2</option>
                    <option value="member3">Member 3</option>
                    <option value="member4">Member 4</option>
                  </select>
                </div>
                <label htmlFor="">Billable Hours</label>
                <div className="d-flex">
                  <input type="text" placeholder="Enter Billable Hours" value={hours} onChange={(e)=>setHours(e.target.value)} />
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
          <button onClick={saveHandler}>Save</button>
        </div>
      </div>
    </>
  );
};

export default TeamForm;
