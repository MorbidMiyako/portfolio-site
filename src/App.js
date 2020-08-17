import React from 'react';
import './App.css';
import StarsFunction from "./helpers/CreateStars.js"
import ScrollDownFunction from "./helpers/ScrollDown.js"
import linkedinLogoImg from "./linkedinLogoImg.png"
import githubLogoImg from "./githubLogoImg.png"
import scrollDownButtonImg from "./scrollDownButtonImg.png"
import profilePicture from "./profilePicture.jpeg"

function App() {
  const stars = StarsFunction(100)

  const aboutref = React.createRef();
  const projectsref = React.createRef();


  return (
    <div data-testid="mainDiv" className="mainDiv" style={{ backgroundColor: "black" }}>
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

      <div data-testid="frontPage" className="frontPage">
        {/* these are outside a combined div to allow them to be freely moved around */}
        <h2 className="helloText">Hello, I'm</h2>

        <h1 className="nameText">Bernd de Kruik</h1>

        <h3 className="shortDescriptionText" >A fullstack webdev that simply loves to solve problems with code</h3>

        <div data-testid="frontSocial" className="frontSocialDiv">
          <a href="https://www.linkedin.com/in/bernd-de-kruik-2a7497195/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogoImg} alt="linkedinLogo" />
          </a>

          <a href="https://github.com/MorbidMiyako" target="_blank" rel="noopener noreferrer">
            <img src={githubLogoImg} alt="githubLogo" />
          </a>
        </div>

        <img data-testid="scrollDownButton" className="scrollDownButton" src={scrollDownButtonImg} alt="scrollDownButton" onClick={() => { ScrollDownFunction(aboutref) }} />
      </div>

      <div data-testid="aboutPage" className="aboutPage" ref={aboutref}>
        <h2 className="aboutText" >WOW A WHOLE PAGE ABOUT ME?! </h2>
        <p className="longDescriptionText">
          Bernd de Kruik is a 22 year old computer geek from the Netherlands with a creative out of the box mindset!<br /> Bernd thrives at solving problems and puzzles with code, which makes him a full stack webdev that won’t give up until he has the solution for the task that is handled to him! <br />
        He loves to cook and has a soft spot for cats in his heart! People around him consider him a team player with great communication skills. He is very innovative, dedicated and hardworking. He also hates to talk about himself in the third person and he would really appreciate to not have to do it again.
        </p>

        <div data-testid="aboutSocial" className="aboutSocial">
          <a href="https://www.linkedin.com/in/bernd-de-kruik-2a7497195/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogoImg} alt="linkedinLogo" />
          </a>

          <a href="https://github.com/MorbidMiyako" target="_blank" rel="noopener noreferrer">
            <img src={githubLogoImg} alt="githubLogo" />
          </a>

        </div>

        <img src={profilePicture} alt="profilePicture" className="profilePicture" />

        <img className="scrollDownButton" src={scrollDownButtonImg} alt="scrollDownButton" onClick={() => { ScrollDownFunction(projectsref) }} />
      </div>


      <div data-testid="projectsDiv" className="projectsDiv" ref={projectsref}>
        <div>
          <h2>
            <a href="https://github.com/MorbidMiyako?tab=repositories" target="_blank" rel="noopener noreferrer">
              Projects
            </a>
          </h2>
        </div>

        <div>
          <h3>
            Portfolio site
          </h3>

          <p>
            The <a href="https://bernd-de-kruik.com" target="_blank" rel="noopener noreferrer">portfolio site</a> you are currently looking at was made using a Test Driven Development approach in React, combined with a JavaScript function that creates random stars (It looks very good doesn’t it?!). <br />
            This website is meant to both showcase me as a developer and show my understanding of writing tests. The whole development process was documented in my GitHub <a data-testid="projectLink" href="https://github.com/MorbidMiyako/portfolio-site" target="_blank" rel="noopener noreferrer">repository</a>. Feel free to check it out!
          </p>

        </div>

        <div>
          <h3>
            Game of Life
          </h3>

          <p>
            One of the most exciting projects I have worked on, during my time at Lambda school was the <a href="https://thirsty-lovelace-fb51cb.netlify.app/" target="_blank" rel="noopener noreferrer">Game of Life</a>. For this project, I aimed to achieve a retro visual by using pixelation and the Gameboy’s original green shades and retro fonts.<br />
            The code language used was the Vanilla JavaScript and you can find the <a data-testid="projectLink" href="https://github.com/MorbidMiyako/Conors-Game-of-Life" target="_blank" rel="noopener noreferrer">repository</a> for this project in my GitHub so, feel free to check it out!
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;
