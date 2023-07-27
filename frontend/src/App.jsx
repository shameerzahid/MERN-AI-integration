import React, { useState } from "react";
import "./app.css"
import logo from "./logo-white.png"
const App = () => {
  const [predictedSymbol, setPredictedSymbol] = useState("");

  const handlePredict = () => {
    console.log("CLicked");
    fetch("http://localhost:5000/api/predict", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictedSymbol(data.symbol);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="div-cam">
      <img src={logo} />
      <button className='round-button' onClick={handlePredict}>Predict</button>
      {/* <p>Predicted Symbol: {predictedSymbol}</p> */}
    </div>
  );
};

export default App;
