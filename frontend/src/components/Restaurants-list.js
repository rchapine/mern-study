import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const RestaurantsList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [serachZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisines] = useState("");
  const [cuisines, setCusines] = useState(["All Cusines"]);

  return <div className="App">RestautantsList</div>;
};

export default RestaurantsList;
