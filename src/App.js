import React, { useState } from "react";
import Article from "./components/Article";
import NoArticles from "./components/NoArticles";


function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res =>{
      if (res.status !== 200) {
          console.log("Error");
          return;
        }
      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children)
        }
      })
    })
  }

  return (
    <div className="App">
      <header>
        <form onSubmit={handleSubmit}>
          <input className="subreddit_input" type="text" placeholder="Find a subreddit" name="hello" value={subreddit} onChange={e =>setSubreddit(e.target.value)}/>
        </form>
      </header>
      <div className="articles">
        {
          (articles.length > 0) ? articles.map((article,i) => <Article article={article.data} key={i} />) : <NoArticles/>
        }
      </div>
    </div>
  );
}

export default App;
