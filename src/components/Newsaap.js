import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./News.css";

const Newsaap = () => {
  const [search, setSearch] = useState("india");

  const [newsData, setNewsData] = useState(null);

  const API_KEY = "f02bb80b7761444eba25d89b8ecab811";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };


  useEffect(()=> {
    getData()
  },[])
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };

  return (
    <div>
      <nav>
        <div>
          <h1>News App</h1>
        </div>
        <ul>
          <a>All Trending News</a>
          
        </ul>
        <div className="searchbar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update With TrendingNews</p>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value="business">Business</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="science">Science</button>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="technnology">Technology</button>
        <button onClick={userInput} value="comedy">Comedy</button>
      </div>

      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsaap;
