import React from 'react';
import './App.css';
// Importing components
import DisplayPosts from './components/DisplayPost'
import CreatePosts from './components/CreatePost';

function App() {
  return (
    <div className="App">
      <CreatePosts/>
      <DisplayPosts/>
      
    </div>
  );
}

export default App;
