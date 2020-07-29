import React from 'react';
import './App.css';
import StarsFunction from "./helpers/CreateStars.js" //this function wont be directly checked and thus doesnt require an import atm.
import ScrollDownFunction from "./helpers/ScrollDown.js"
import linkedinLogoImg from "./linkedinLogoImg.png"
import githubLogoImg from "./githubLogoImg.png"
import scrollDownButtonImg from "./scrollDownButtonImg.png"

function App() {
  const stars = StarsFunction(2)
  return (
    <div data-testid="mainDiv" style={{ backgroundColor: "black" }}>
      <p> text</p>
      <div>
        {stars.map((star, id) => {
          const starStyling = {
            fontSize: star.pxSize
          }
          return (
            <div data-testid="star" key={id} style={starStyling}>
              <p>star</p>
            </div>
          )
        })}
      </div>

      <div data-testid="frontPage">

      </div>

      <div data-testid="aboutPage">

      </div>

      <div data-testid="projectsDiv">

      </div>

    </div>
  );
}

export default App;
