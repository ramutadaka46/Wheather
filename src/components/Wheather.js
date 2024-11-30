import React, { useEffect, useReducer, useState } from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";
import axios from "axios";
import { GET_LOCATION_URL } from "../api/apiEndPoints";

export const Wheather = () => {
  const locationReducer = (action, data) => {
    switch (action) {
      case "UPDATE":
        return {
          data: data,
        };
    }
  };
  const [city, setCity] = useState("");
  const [store, dispatch] = useReducer(locationReducer, { data: "" });
  const searchCity = async (e) => {
    const locationDetails = await axios.get(
      GET_LOCATION_URL + "/search?name=india&count=10&language=en&format=json"
    );
    dispatch("UPDATE", {data:locationDetails.data});
  };
  useEffect(() => {
    console.log(store);
  }, [store]);
  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="city">City</InputLabel>
          <Input id="city" defaultValue="" value={city} onChange={searchCity} />
        </FormControl>
      </Box>
    </>
  );
};
