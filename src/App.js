import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [clicked, setClicked] = useState(false);

  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState(null);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);

    // Start movement if it's the first click
    if (!noPosition) {
      const randomTop = Math.floor(
        Math.random() * (window.innerHeight - 150)
      );
      const randomLeft = Math.floor(
        Math.random() * (window.innerWidth - 150)
      );

      setNoPosition({
        top: randomTop + "px",
        left: randomLeft + "px",
      });
    }
  };

  useEffect(() => {
    if (!noPosition) return;

    const speed = Math.max(60, 1200 - noCount * 120); // much slower start, speeds up each click

    const interval = setInterval(() => {
      const randomTop = Math.floor(
        Math.random() * (window.innerHeight - 150)
      );
      const randomLeft = Math.floor(
        Math.random() * (window.innerWidth - 150)
      );

      setNoPosition({
        top: randomTop + "px",
        left: randomLeft + "px",
      });
    }, speed);

    return () => clearInterval(interval);
  }, [noCount, noPosition]);


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

          <div
            className="small-buttons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              margin: "0 auto",
              position: "relative"
            }}
          >
            <button className="small-btn">
              <img
                src="/images/yes.PNG"
                alt="Yes"
                style={{ width: 120 + noCount * 20 + "px" }}
              />
            </button>

            <button
              className="small-btn"
              onClick={handleNoClick}
              style={
                noPosition
                  ? {
                      position: "fixed",
                      top: noPosition.top,
                      left: noPosition.left,
                      transition: `all ${Math.max(
                        0.1,
                        0.5 - noCount * 0.05
                      )}s ease`,
                    }
                  : {}
              }
            >
              <img src="/images/no.PNG" alt="No" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;