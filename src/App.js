import React from 'react';
import './App.css';
import StarsFunction from "./helpers/CreateStars.js"
import ScrollDownFunction from "./helpers/ScrollDown.js"
import linkedinLogoImg from "./linkedinLogoImg.png"
import githubLogoImg from "./githubLogoImg.png"
import scrollDownButtonImg from "./scrollDownButtonImg.png"
import styled, { keyframes } from "styled-components"

function App() {
  const stars = StarsFunction(100)

  const ref = React.createRef();


  return (
    <div data-testid="mainDiv" style={{ backgroundColor: "black" }}>
      {stars.map((star, id) => {
        const starStyling = {
          backgroundColor: "rgb(255,255,255,1)",
          position: "fixed",
          top: `${star.top}%`,
          left: `${star.left}%`,
          width: `${star.size / 4}px`,
          height: `${star.size / 4}px`,
          // boxShadow: `0 0 ${star.size / 6(+ 42* 0)}px ${star.size / 10}px white`,
          boxShadow: `0 0 ${star.size / (2 + 20 * (1 - Math.sqrt(Math.sqrt(star.size / 40))))}px ${star.size / 10}px white`,
          // widht: 1,
          // height: 1,
          borderRadius: "50%",
          display: "inline-block",
          animation: `makeErTwinkle ${star.duration}s linear ${star.delay}s infinite alternate`,
          // boxShadow: `0 0 ${0}px ${star.size / 20}px white, 0 0 ${0}px ${star.size / 20}px rgb(255, 255, 255, 0.8)`,
          // boxShadow: `0 0 ${star.size / 6}px white`,
          // boxShadow: `0 0 ${star.size / 20}px white`,
          // boxShadow: `0 0 ${star.size / 6}px white, 0 0 ${star.size / 20}px rgb(255, 255, 255, 0.8)`,
          // boxShadow: `0 0 ${star.size / 6}px ${star.size / 20}px white, 0 0 ${star.size / 20}px ${star.size / 20}px rgb(255, 255, 255, 0.8)`,
          margin: `${star.size / 6}px`
        }

        return (
          <span data-testid="star" key={id} style={starStyling}>
          </span>

        )
      })}

      <div data-testid="frontPage">
        {/* these are outside a combined div to allow them to be freely moved around */}
        <h2 >Hello, I'm</h2>

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

        <img data-testid="scrollDownButton" src={scrollDownButtonImg} alt="scrollDownButton" onClick={() => { ScrollDownFunction(ref) }} />
      </div>

      <div data-testid="aboutPage" ref={ref}>
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
        <div>
          <h2>
            Projects
          </h2>
        </div>

        <div>
          <h3>
            Portfolio site
          </h3>

          <p>
            The amazing site ur currently looking at, it can be found <a data-testid="projectLink" href="site" target="_blank" rel="noopener noreferrer"> here</a>. And its hella amazing
          </p>

        </div>

        <div>
          <h3>
            Game of Life
          </h3>

          <p>
            The amazing site ur currently looking at, it can be found <a data-testid="projectLink" href="site" target="_blank" rel="noopener noreferrer"> here</a>. And its hella amazing
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;
