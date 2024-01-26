import React, { useState, useEffect } from 'react';
import data from './record.json';
import Logo from './Components/Logo';
import SearchBar from './Components/SearchBar';
import VideoGrid from './Components/VideoGrid';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setVideos(data.videos);
  }, []);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Logo />
      <SearchBar onSearch={handleSearch} />
      <VideoGrid videos={filteredVideos} />


    </div>
  );
}

export default App;
