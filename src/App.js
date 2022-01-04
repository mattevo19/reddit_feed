import React, { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('OnePiece');

  useEffect(() => {
    fetch("https://www.reddit.com/r/OnePiece.json").then(res =>{
      res.json().then(data => {
        if (data != null) {
          console.log(data)
        }
      })
    })
  }, [subreddit])
  return (
    <div className="App">
      <header>
        <input type="text" className="input" defaultValue="OnePiece" />
      </header>
      <div className="articles">

      </div>
    </div>
  );
}

export default App;
