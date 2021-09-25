import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'Say So',artist: 'Dojo Cat', album: 'Say it', id: 1}, {name: 'Complicated',artist: 'Avril Lavigne', album: 'Complicated', id: 2}, {name: 'Someone Like You',artist: 'Adele', album: '21', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'Playlist name1',artist: 'Playlist Artist1', album: 'Playlist Album1', id: 4},{name: 'Playlist name2',artist: 'Playlist Artist2', album: 'Playlist Album2', id: 5},{name: 'Playlist name3',artist: 'Playlist Artist3', album: 'Playlist Album3', id: 6}]
    };
    this.addTrack =  this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})

  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});

  }
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
    </div>
  </div>
</div>
    )
  }
}

export default App;
