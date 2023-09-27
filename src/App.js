import React, { useState } from 'react'
import './App.css';

import Tracklist from './Tracklist'
import Playlist from './Playlist'

function App() {

  const [playlist, setPlaylist] = useState([])

  const tracks = [
    {
    name: 'DUCKWORTH',
   artist: 'Kendrick Lamar',
   album: 'DAMN',
   },
   {
    name: 'Lose Yourself',
   artist: 'Eminem',
   album: '8 Mile SoundTrack',
   },
   {
    name: 'Amili',
   artist: 'Lil Wayne',
   album: 'Tha Carter III',
   },
  ]

  const addToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  }

  const removeFromPlaylist = (trackToRemove) => {
    const updatedPlaylist = playlist.filter((track) => track !== trackToRemove);
    setPlaylist(updatedPlaylist);
  }

  return (
    <div className="App">
      <div>
        <Tracklist tracks={tracks} addToPlaylist={addToPlaylist} />
      </div>
      <div>
      <Playlist tracks={playlist} removeFromPlaylist={removeFromPlaylist} />
      </div>
    </div>
  );
}

export default App;
