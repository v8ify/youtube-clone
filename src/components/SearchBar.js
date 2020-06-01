import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label">Search Videos</label>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
