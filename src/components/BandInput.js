// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = { name: "" };

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  }

  handleOnChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleOnChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
