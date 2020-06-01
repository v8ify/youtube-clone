import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    return (
      <div className="VideoList ui relaxed divided list">
        {this.props.videos.map(video => (
          <VideoItem video={video} onVideoSelect={this.props.onVideoSelect} />
        ))}
      </div>
    );
  }
}
