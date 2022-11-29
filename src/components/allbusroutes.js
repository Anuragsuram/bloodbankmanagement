import React, { useState, useEffect } from "react";
import Header from "./layout/header";
import axios from "axios";
const BusRoutes = () => {
  const [busRoutes, setBusRoutes] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/busroute/getall";
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setBusRoutes(data));
  }, []);
  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/busroute/create", busRoutes, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("bus route added successfully");
      });
  };
  return (
    <Header/>
  );
};
export default BusRoutes;
