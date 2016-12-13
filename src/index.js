import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

const API_KEY = 'AIzaSyC_EC6--BQRYxKce45S98jB5sl9IZHskbY';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);