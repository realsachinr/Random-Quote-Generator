import React from "react";
import "./FetchedData.css";

const FetchedData = () => {
  async function fetchQuote() {
    const spinnerr = document.querySelector(".spinner");
    spinnerr.classList.add("active");
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      renderdata(data);
      spinnerr.classList.remove("active");
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function renderdata(data) {
    document.getElementById("quote").innerText = data.slip.advice;
  }
  fetchQuote();
  return (
    <div className="box-container">
      <div class="spinner"></div>
      <p id="quote"></p>
      <button onClick={fetchQuote} className="btn">Generate</button>
    </div>
  );
};

export default FetchedData;
