import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [randomQuote, setRandomQuote] = useState ({});

  const api_url = 'https://cyf--berhaneyohannes.repl.co/quotes/random';
  const getQuote=()=>{
    fetch (api_url)
    .then (res => res.json ())
    .then (data => setRandomQuote (data));
  
  }
  useEffect (() => {
      getQuote();
    }, []);

  return (
    <div className="quote__block">
      <h1 className="quote__text">{randomQuote.quote}</h1>
      <h3 className="quote__author">- {randomQuote.author}</h3>
      <button  className="quote__button" onClick={getQuote}>New Quote</button>
    </div>
  );
};

export default App;
