import React, { useState } from "react";
import logo12 from "../images/logo12.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleClick = (e,param) => {
        navigate('/'+param);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const url = `https://api.sxl6157.uta.cloud/api/users`;
    axios.get(url).then((data) => {
      var users = [];
      users = data.data.data;
      let user = users.filter(
        (user) => user.email == username && user.pass == pass
      )
    });
  };
  return (
      <center>
<header style={{"fontSize":"50px"}} align="center">Blood Bank Management System</header>
<div id="content">
<img style={{"width":"20%","height":"20%"}} src={logo12}/><br></br><br></br>
<button onClick={(event) => handleClick(event,'donorlist')} className="btn btn-secondary btn-lg active">Manage Donors</button><br></br><br></br>
<button onClick={(event) => handleClick(event,'receiverlist')}  className="btn btn-secondary btn-lg active">Manage Receiver</button><br></br><br></br>
<button onClick={(event) => handleClick(event,'doctorlist')} className="btn btn-secondary btn-lg active">Manage Doctor</button><br></br><br></br>
<button onClick={(event) => handleClick(event,'inventorylist')}  className="btn btn-secondary btn-lg active">Manage Inventory</button><br></br><br></br>
<button onClick={(event) => handleClick(event,'login')} className="btn btn-secondary btn-lg active">Log out</button><br></br><br></br>
</div><br></br>
</center>
  );
};
export default Home;
