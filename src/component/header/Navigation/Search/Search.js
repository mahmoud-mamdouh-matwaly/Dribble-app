import React, { Component } from "react";
import "./Search.css";
class SearchIn extends Component {
  render() {
    return (
      <>
        <form className="Search ">
          <label htmlFor="search" className="visually-hidden">
            search
          </label>
          <input id="search" type="text" placeholder="search...." />
        </form>
      </>
    );
  }
}

export default SearchIn;
