import React, { useState } from "react";
import Header from "./layout/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterBus = () => {
  const [bus, setBus] = useState({ busno: "", busname: "" });
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/bus/create", bus, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("bus added successfully");
        navigate("/managebuses");
      });
  };
  return (
    <div>
      <Header />
      <div
        className="register"
        style={{ justifyContent: "center", display: "grid" }}
      >
        <form onSubmit={(event) => handleSumbit(event)}>
          <h3>Add new bus</h3>
          <div class="form-group">
            <label for="busname">Bus Name: </label>
            <input
              type="text"
              name="busname"
              className="form-control"
              onChange={(e) => setBus({ ...bus, busname: e.target.value })}
              required
            />
          </div>
          <div class="form-group">
            <label for="busno">Bus Number: </label>
            <input
            type="busno"
            name="busno"
            className="form-control"
            onChange={(e) => setBus({ ...bus, busno: e.target.value })}
            required
          />
          </div>
          <br></br>
          <input type="submit" className="btn btn-primary" value="Add" />
        </form>
      </div>
    </div>
  );
};
export default RegisterBus;
