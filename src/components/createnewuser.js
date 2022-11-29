import React, { useState } from "react";
import Header from "./layout/header";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
const Registration = () => {
  const [user, setUser] = useState({ fullname: "", email: "", pass: "",role: "user" });

  const handleFullNameChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
        setUser({ ...user, fullname: e.target.value })
    }
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/createuser", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("user added successfully");
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
          <h3>Registration Form</h3>
          <div class="form-group">
            <label for="busno">Enter Name: </label>
            <input
            type="text"
            name="fullname"
            onChange={(event) => handleFullNameChange(event)}
            required
            className="form-control"
          />
          </div>
          <div class="form-group">
            <label for="password">Enter Email:  </label>
            <input
            type="text"
            name="email"
            onChange={e => setUser({ ...user, email: e.target.value })}
            required
            className="form-control"
          />
          </div>
          <div class="form-group">
            <label for="password">Enter Password:  </label>
            <input
            type="password"
            name="pass"
            onChange={e => setUser({ ...user, pass: e.target.value })}
            required
            className="form-control"
          />
          </div>
          <br />
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
    </div>
  );
};
export default Registration;
