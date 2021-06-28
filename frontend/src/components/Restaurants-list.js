import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const RestaurantsList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const [cuisines, setCusines] = useState(["All Cusines"]);

  useEffect(() => {
    retriveRestaurants();
    retrieveCuisines();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchZip = e => {
    const searchZip = e.target.value;
    searchZip(searchZip);
  };

  const onChangeSearchCuisine = e => {
    setSearchCuisine = e.target.value;
    setSearchCuisine(searchCuisine);
  };

  const retriveRestaurants = () => {
    RestaurantDataService.getAll()
    .then(response => {
    setRestaurants(response.data.restaurants);
  })
  .catch(e => {
    console.log(e);
  });
};

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisenes()
    .then(resoinse => {
      console.log(response.data);
      setCusines(["All Cuisines"].concat(response.data));
    })
    .catch(e => {
      console.log(e);
    });
  };

  const refreshList = () => {
    retriveRestaurants();
  };

  const find = (query, by) => {
    RestaurantDataService.find(query, by)
    .then(response => {
      console.log(response.data);
      setRestaurants(response.data.restaurants);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  const findbyZip = () => {
    find(searchZip, "zipcode")
  };

  const findByCuisine = () => {
    if (searchCuisine == "All Cuisines") {
      refreshList();
    } else {
      find(searchCuisine, "cuisine")
    }
  };

  return <div>
    <div className="row pb-1"></div>
  </div>;
};

export default RestaurantsList;
