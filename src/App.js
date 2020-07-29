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
        {/* these are outside a combined div to allow them to be freely moved around */}
        <h2>Hello, I'm</h2>

        <h1>Bernd de Kruik</h1>

        <h3>A fullstack webdev that simply loves to solve problems with code</h3>

        <div data-testid="frontSocial">
          <a href="https://www.linkedin.com/in/bernd-de-kruik-2a7497195/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogoImg} alt="linkedinLogo" />
          </a>

          <a href="https://github.com/MorbidMiyako" target="_blank" rel="noopener noreferrer">
            <img src={githubLogoImg} alt="githubLogo" />
          </a>
        </div>

        <img data-testid="scrollDownButton" src={scrollDownButtonImg} alt="scrollDownButton" onClick={ScrollDownFunction} />
      </div>

      <div data-testid="aboutPage">
        <h2>About me</h2>
        <p>
          Title: WOW A WHOLE PAGE ABOUT ME?! <br />
        Bernd de Kruik is a 22 year old computer geek from Netherlands with a creative out of the box mindset! Bernd thrives at solving problems and puzzles with code, which makes him a full stack webdev that won’t give up until he has the solution for the task that is handled to him! <br />
        He loves to cook and has a soft spot for cats in his heart! People around him consider him a team player with great communication skills. He is very innovative, dedicated and hardworking. He also hates to talk about himself in the third person and he would really appreciate to not have to do it again.
        </p>

        <div data-testid="aboutSocial">
          <a href="https://www.linkedin.com/in/bernd-de-kruik-2a7497195/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogoImg} alt="linkedinLogo" />
          </a>

          <a href="https://github.com/MorbidMiyako" target="_blank" rel="noopener noreferrer">
            <img src={githubLogoImg} alt="githubLogo" />
          </a>

        </div>

      </div>

      <div data-testid="projectsDiv">

      </div>
    </div>
  );
}

export default App;
