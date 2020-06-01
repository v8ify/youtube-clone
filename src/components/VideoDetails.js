import React, { Component } from "react";

export default class VideoDetails extends Component {
  render() {
    return (
      <div>
        <div className="ui embed ">
          <iframe
            className="video-frame"
            title={this.props.videoToShow}
            src={`https://www.youtube.com/embed/${this.props.videoToShow}`}
          ></iframe>
        </div>
        <div className="ui segment">
          <p className="ui header">{this.props.titleToShow}</p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
