import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const api = "https://api.adviceslip.com/advice";
  const [currentQuote, changeCurrentQuote] = useState("");
  const [quoteNum, changeQuoteNum] = useState("");

  const generateRandomAdviceSlipId = () => Math.floor(Math.random() * ((120 - 1) + 1) )
  
  const fetchQuote = async () => {
    const res = await fetch(`https://api.adviceslip.com/advice/${generateRandomAdviceSlipId()}`);
    res.json().then((quoteObj) => {
      changeCurrentQuote(quoteObj.slip.advice);
      changeQuoteNum(quoteObj.slip.id);
    });
  };

  useEffect(() => {
    fetchQuote();
    document.title = "Advice Generator";
  }, []);

  return (
    <div id="app">
      <div id="modal">
        <span id="advice-num">Advice #{quoteNum}</span>
        <div id="quote-container">{currentQuote}</div>
        <img
          id="divider"
          src={require("./images/pattern-divider-desktop.svg").default}
          alt="divider"
        ></img>
        <button id="change-quote-btn" onClick={fetchQuote}>
          <img
            src={require("./images/icon-dice.svg").default}
            alt="btn-icon"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default App;
