import React, { useState } from "react";
import Button from "./button";
import "./searchBox.css";

const SearchBox = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <h1 style={{ color: "#5FD6F7" }}>React Giphy</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          placeholder="Search"
          value={search}
          onChange={handleInput}
        />
        {/* <button>send</button> */}
        <Button value="search" />
      </form>
    </>
  );
};

export default SearchBox;
