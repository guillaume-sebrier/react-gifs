import React, { Component } from "react";

class Gif extends Component {

  handleClick = () => {
    this.props.updateState(this.props.id);
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img
        src={src}
        alt="gif"
        className="gif"
        onClick={this.handleClick}
      />
    );
  }

}

export default Gif;
