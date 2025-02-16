import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log("term => ", this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: make sure we call
    // callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment ">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
