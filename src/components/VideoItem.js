import React, { Component } from "react";

export default class VideoItem extends Component {
  render() {
    let {
      id: { videoId },
      snippet: {
        title,
        description,
        thumbnails: {
          medium: { url },
        },
      },
    } = this.props.video;

    return (
      <div
        className="VideoItem"
        key={videoId}
        onClick={() => this.props.onVideoSelect(videoId, title, description)}
      >
        <div className="video__item">
          <img className="video__thumbnail ui image" src={url} alt={title} />
          <p className="video__title">{title}</p>
        </div>
      </div>
    );
  }
}
