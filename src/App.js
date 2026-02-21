import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [clicked, setClicked] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

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
    <div
      className="container"
      style={{ minHeight: "100vh", width: "100vw" }}
    >
      {!clicked ? (
        <button className="big-button" onClick={() => setClicked(true)}>
          <img
            src="/images/letter1.PNG"
            alt="Main"
          />
        </button>
      ) : yesClicked && !nextClicked ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <h1 className="yay-text">
            YAYYYYY!!!
          </h1>

          <img
            src="/images/milk-and-mocha.gif"
            alt="Celebration"
            style={{ width: "300px", marginBottom: "10px" }}
          />

          <button
            className="small-btn"
            onClick={() => setNextClicked(true)}
            style={{ position: "absolute", bottom: "30px" }}
          >
            <img
              src="/images/next.PNG"
              alt="Next"
              style={{ width: "180px" }}
            />
          </button>
        </div>

      ) : nextClicked ? (
        <div
          style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "40px",
            textAlign: "center"
          }}
        >
          <h1
            style={{
              marginBottom: "10px",
              fontFamily: "dogica",
              color: "#7F5E44",
              fontSize: "28px"
            }}
          >
            I love you &lt;3, happy valentines day!
          </h1>

          <img
            src="/images/us.PNG"
            alt="Us"
            style={{ width: "250px", marginBottom: "-30px" }}
          />

          <img
            src="/images/album.PNG"
            alt="Album"
            style={{ width: "400px", marginBottom: "0px" }}
          />
        </div>

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
            <button className="small-btn" onClick={() => setYesClicked(true)}>
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
                      transition: "top 0.2s linear, left 0.2s linear",
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