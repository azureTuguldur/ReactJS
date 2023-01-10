import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ handleChange }) => {
  return <input type="search" placeholder="Search" onChange={handleChange} />;
};

export default Search;
