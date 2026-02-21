import React, { useState } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="container">
      {!clicked ? (
        <button className="big-button" onClick={() => setClicked(true)}>
          <img
            src="/images/letter1.PNG"
            alt="Main"
          />
        </button>
      ) : (
        <div className="second-screen">
          <img
            src="/images/letter2.PNG"
            alt="Second"
            className="second-image"
          />

          <div className="small-buttons">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;