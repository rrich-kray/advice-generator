import "./App.css";
import React, { useState } from "react";

function App() {
  const api = "https://api.adviceslip.com/advice";
  const [currentQuote, changeCurrentQuote] = useState("");
  const [quoteNum, changeQuoteNum] = useState("");

  const fetchQuote = async () => {
    const res = await fetch(api);
    res.json().then((quoteObj) => {
      changeCurrentQuote(quoteObj.slip.advice);
      changeQuoteNum(quoteObj.slip.id);
    });
  };

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
