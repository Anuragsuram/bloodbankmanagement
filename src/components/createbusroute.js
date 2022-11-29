import React, { useState } from "react";
import Header from "./layout/header";
import axios from "axios";
const CreateBusRoute = () => {
  const [busRoute, setBusRoute] = useState({
    from: "",
    to: "",
    enddate: "",
    startdate: "",
    busno: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/busroute/create", busRoute, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("bus route added successfully");
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
          <h3>Add new bus route</h3>
          <div class="form-group">
            <label for="password">From:  </label>
            <select class="form-control" id="exampleFormControlSelect1"  onChange={e => setBusRoute({ ...busRoute, from: e.target.value })}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="password">To:  </label>
            <select class="form-control" id="exampleFormControlSelect1"  onChange={e => setBusRoute({ ...busRoute, to: e.target.value })}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="busno">Bus Number: </label>
            <input
            type="busno"
            name="busno"
            className="form-control"
            onChange={(e) => setBusRoute({ ...busRoute, busno: e.target.value })}
            required
            class="form-control"
          />
          </div>

          <div class="form-group">
            <label for="busno">Start Date:: </label>
            <input
            type="Date"
            name="startdate"
            className="form-control"
            onChange={(e) => setBusRoute({ ...busRoute, startdate: e.target.value })}
            required
            class="form-control"
          />
          </div>
          <div class="form-group">
            <label for="busno">End Date:: </label>
            <input
            type="Date"
            name="enddate"
            className="form-control"
            onChange={(e) => setBusRoute({ ...busRoute, enddate: e.target.value })}
            required
            class="form-control"
          />
          </div>
          <br />
          <input type="submit" className="btn btn-primary" value="Add" />
        </form>
      </div>
    </div>
  );
};
export default CreateBusRoute;
