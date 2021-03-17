import React from "react";

import "./searchbar.styles.scss";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          name="search-text"
          id="search-text"
          placeholder="Search for people or groups"
        />
        <button type="submit" />
      </div>
    );
  }
}

export default Searchbar;
