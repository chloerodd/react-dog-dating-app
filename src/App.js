
import './App.css';
import { useState } from 'react';
import Dogs from './components/Dogs'

function App() {
  const [likes, setLikes] = useState(0)

  function updatLikes() {
    let currentLikes = likes;
    currentLikes ++;
    setLikes(currentLikes)
  }

  return (
    <>
      <div className="App">
        <h1>Dogs Dating App</h1>
      </div>
      <div className='likes'>
      <h2>Number of dogs who likes this: {likes}</h2>
      <button onClick = {updatLikes}>Add to the likes</button>
      </div>
      <Dogs />
    </>
  );
}

export default App;
