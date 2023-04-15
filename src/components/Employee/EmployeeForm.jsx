import React,{useState,useEffect} from "react";
import qrCode from "../../Assests/qr.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import {useLocation} from 'react-router-dom';

const EmployeeForm = () => {
  const [name,setName] = useState("");
  const [surname , setSurname] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [startTime,setStartTime] = useState("");
  const [endTime,setEndTime] = useState("");
  const [jobPosition,setJobPosition] = useState("");
  const [team,setTeam] = useState("");
  const [hours,setHours] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const {enqueueSnackbar} = useSnackbar();
  console.log("startTime  : ",startTime)
  console.log("endTime  : ",endTime)
  const location = useLocation();
  useEffect(()=>{
    if(location.state){
      setName("David ")
      setSurname("Doe")
      setAddress("Washington");
      setEmail("daviddoe@gmail.com")
      setJobPosition("React Developer");
      setTeam("team1")
      setStartTime("02:46");
    setEndTime("10:46");
    setHours("20")
    }
  },[location.state])

  const enterHandler = (e) => {
    e.preventDefault();
    if(name==="" || surname==="" || address ==="" || email===""||startTime===""||endTime ==="" || jobPosition === "" || team ==="" || hours ===""){
      enqueueSnackbar("Empty Filed Detected ! Please Fill Up. ",{variant:'warning'})
    }else{
      enqueueSnackbar("Employee has been successfully created. ",{variant:'success'});
      navigate('/',{state:true})
    }
  }
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
                    <input type="text" placeholder="Enter Name " value={name} onChange={(e)=>setName(e.target.value)} />
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
                    <input type="text" placeholder="Enter Surname " value={surname} onChange={(e)=>setSurname(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Birth Day</label>
                    <br />
                    <input type="date" placeholder="Enter Surname "  />
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
                    <input type="text" placeholder="Enter Address " value={address} onChange={(e)=>setAddress(e.target.value)} />
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
                    <input type="text" placeholder="Enter Email Address " value={email} onChange={(e)=>setEmail(e.target.value)} />
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
                    <input type="time" placeholder="Enter Phone Number "  value={startTime} onChange={(e)=>setStartTime(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> End Time</label>
                    <br />
                    <input type="time" placeholder="Enter Email Address " value={endTime} onChange={(e)=>setEndTime(e.target.value)} />
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
                    <input type="text" placeholder="Enter Job Position " value={ jobPosition} onChange={(e)=>setJobPosition(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-input">
                    <label htmlFor=""> Team</label>
                    <br />
                    <select name="" id="" value={team} onChange={(e)=>setTeam(e.target.value)} >
                      <option value="team1">Team 1</option>
                      <option value="team2">Team 2</option>
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
                      <input type="text" placeholder="Enter Billable Hours" value={hours} onChange={(e)=>setHours(e.target.value)}  />
                      <button>Hours</button>
                      <button className="enter-btn" > Enter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save">
          <button onClick={enterHandler}>Save</button>
        </div>
      </div>
    </>
  );
};

export default EmployeeForm;
