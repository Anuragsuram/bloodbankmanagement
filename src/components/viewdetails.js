import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
const ViewDetails = () => {
  const navigate = useNavigate();
  const [tablename,setTableName] = useState("");
  const [donor, setDonor] = useState([]);
  const [receivers, setRecerivers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [logindetails, setLogindetails] = useState([]);
  const handleSumbit = (e) => {
    e.preventDefault();
    const url = `https://api.sxl6157.uta.cloud/api/users`;
    // axios.get(url).then((data) => {
    //   var users = [];
    //   users = data.data.data;
    //   let user = users.filter(
    //     (user) => user.email == username && user.pass == pass
    //   )
    // });
  };
  return (
    <div id="home">
      <header style={{ fontSize: "50px", textAlign: "center" }}>
        Blood Bank Management System
      </header>
      <center>
        <form onSubmit={(event) => handleSumbit(event)} style={{"width":"25%"}}>
          <div className="form-group">
            <label htmlFor="tablename">Select table name to view data:</label>
            <select id="tablename" className="form-control" required   onChange={e => setTableName(e.target.value)}>
            <option value="Donor">Donor</option>
            <option value="Receiver">Receiver</option>
            <option value="Doctor">Doctor</option>
            <option value="Inventory">Inventory</option>
            <option value="logindetails">Logindetails</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
          <input type="reset" className="btn btn-danger"  value="Cancel" />
          <br></br>
         <Link to='/Home'>Go Back To Menu</Link>
        </form>
      </center>
    </div>
  );
};
export default ViewDetails;
