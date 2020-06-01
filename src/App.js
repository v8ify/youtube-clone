import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./youtube.js";
import VideoList from "./components/VideoList";
import "./App.css";
import VideoDetails from "./components/VideoDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchTerm: "",
      toShow: "",
      titleToShow: "",
      description: "",
    };
  }

  onSubmit = searchTerm => {
    this.getSearchTerm(searchTerm);
  };

  componentDidMount() {
    this.getSearchTerm("cat");
  }

  onVideoSelect = (videoId, title, description) => {
    this.setState({
      toShow: videoId,
      titleToShow: title,
      description: description,
    });
  };

  getSearchTerm = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: "AIzaSyDpRa80xeT3PrLb11QElt8ys9QafJKclb4",
      },
    });
    console.log(response.data.items[0].id.video);
    this.setState({
      videos: response.data.items,
    });
    this.setState({ toShow: response.data.items[0].id.videoId });
    this.setState({ titleToShow: response.data.items[0].snippet.title });
    this.setState({ description: response.data.items[0].snippet.description });
  };

  render() {
    return (
      <div className="ui container App">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails
                videoToShow={this.state.toShow}
                titleToShow={this.state.titleToShow}
                description={this.state.description}
              />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
