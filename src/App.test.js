import React from "react"
import { screen, render } from "@testing-library/react"
import App from "./App"
import '@testing-library/jest-dom'
import StarsFunction from "./helpers/CreateStars.js" //this function wont be directly checked and thus doesnt require an import atm.
import ScrollDownFunction from "./helpers/ScrollDown.js"
import linkedinLogoImg from "./linkedinLogoImg.png"
import githubLogoImg from "./githubLogoImg.png"
import scrollDownButtonImg from "./scrollDownButtonImg.png"



describe("checking if jest works", () => {
  test("jest works", () => {
    expect(1 + 1).toBe(2)
    expect(1 + 1).not.toBe(3)
    expect(1 + 1).not.toBe(3)
  })
})

describe('checking if general page elements are present', () => {
  test("background present", () => {
    render(<App />)
    const mainDiv = screen.getByTestId("mainDiv")
    expect(mainDiv).toHaveStyle(' background-color: black')
  })

  test("stars function runs", () => {
    const { unmount, getAllByTestId } = render(<App />)
    const firstLoad = getAllByTestId("star")
    unmount()
    render(<App />)
    const secondLoad = screen.getAllByTestId("star")
    expect(firstLoad).not.toStrictEqual(secondLoad)
  })

  /*
  ======================
  this test is redundant since its also being tested on the button
  ======================

  test("viewport control function present", () => {
    expect(1 + 1).not.toBe(3)
  })
  */

  // as mentioned in notes, add test for frontpage, about section etc being child divs
  // use toContainElement
  test("frontpage div inside mainpage", () => {
    render(<App />)
    const mainDiv = screen.getByTestId("mainDiv")
    const frontPageDiv = screen.getByTestId("frontPage")
    expect(mainDiv).toContainElement(frontPageDiv)

  })

  test("aboutpage div inside mainpage", () => {
    render(<App />)
    const mainDiv = screen.getByTestId("mainDiv")
    const aboutPageDiv = screen.getByTestId("aboutPage")
    expect(mainDiv).toContainElement(aboutPageDiv)

  })

  test("projectsection inside mainpage", () => {
    render(<App />)
    const mainDiv = screen.getByTestId("mainDiv")
    const projectsDiv = screen.getByTestId("projectsDiv")
    expect(mainDiv).toContainElement(projectsDiv)

  })

})

describe('checking front page', () => {
  describe("checking text divs", () => {
    test("first div present", () => {
      render(<App />)
      const firsDiv = screen.getByTestId("frontPage").childNodes[0]
      expect(firsDiv).toBeInTheDocument()
      expect(firsDiv).toHaveTextContent(/hello/i)
    })

    test("second div present", () => {
      render(<App />)
      const secondDiv = screen.getByTestId("frontPage").childNodes[1]
      expect(secondDiv).toBeInTheDocument()
      expect(secondDiv).toHaveTextContent("Bernd de Kruik")
    })

    test("third div present", () => {
      render(<App />)
      const thirdDiv = screen.getByTestId("frontPage").childNodes[2]
      expect(thirdDiv).toBeInTheDocument()
      expect(thirdDiv).toHaveTextContent(/fullstack webdev/i)
    })

  })

  describe("checking frontSocialDiv for correct amount of div's", () => {
    test("2 divs present", () => {
      render(<App />)
      expect(screen.getByTestId("frontSocial").childElementCount).toBe(2)
    })

  })

  describe("checking linkedin logo", () => {
    test("logo present", () => {
      render(<App />)
      const linkedinLogo = screen.getByTestId("frontSocial").childNodes[0].firstChild
      expect(linkedinLogo).toHaveAttribute("src", linkedinLogoImg)
    })

    test("link wrapped around logo", () => {
      render(<App />)
      const linkedinLogoATag = screen.getByTestId("frontSocial").childNodes[0]
      expect(linkedinLogoATag).toHaveAttribute("href", "https://www.linkedin.com/in/bernd-de-kruik-2a7497195/")
      expect(linkedinLogoATag).toHaveAttribute("target", "_blank")
      expect(linkedinLogoATag).toHaveAttribute("rel", "noopener noreferrer")
      // decided to test if the image was wrapped in an a tag using similar code as the test checking if the projects title div contained the correct element
      const linkedinLogoWrappingElement = linkedinLogoATag[Object.keys(linkedinLogoATag)[0]].type
      expect(linkedinLogoWrappingElement).toStrictEqual("a")
    })

    /*
    ============================
    due to the plan of wrapping img in an a tag with href, this means clickable by definition
    ============================

    test("logo clickable", () => {
      render(<App />)
      const frontSocialDiv = screen.getByTestId("frontSocial")

    })
    */

  })

  describe("checking github logo", () => {
    test("logo present", () => {
      render(<App />)
      const githubLogo = screen.getByTestId("frontSocial").childNodes[1].firstChild
      expect(githubLogo).toHaveAttribute("src", githubLogoImg)
    })

    test("link wrapped around logo", () => {
      render(<App />)
      const githubLogoATag = screen.getByTestId("frontSocial").childNodes[1]
      expect(githubLogoATag).toHaveAttribute("href", "https://github.com/MorbidMiyako")
      expect(githubLogoATag).toHaveAttribute("target", "_blank")
      expect(githubLogoATag).toHaveAttribute("rel", "noopener noreferrer")
      // decided to test if the image was wrapped in an a tag using similar code as the test checking if the projects title div contained the correct element
      const githubLogoWrappingElement = githubLogoATag[Object.keys(githubLogoATag)[0]].type
      expect(githubLogoWrappingElement).toStrictEqual("a")
    })

    /*
    ============================
    due to the plan of wrapping img in an a tag with href, this means clickable by definition
    ============================

    test("logo clickable", () => {
      render(<App />)
      const frontSocialDiv = screen.getByTestId("frontSocial")

    })
    */

  })

  describe("checking down button present", () => {
    test("button present", () => {
      render(<App />)
      const scrollDownButton = screen.getByTestId("scrollDownButton")
      expect(scrollDownButton).toHaveAttribute("src", scrollDownButtonImg)
    })

    test("function attached to button", () => {
      render(<App />)
      const scrollDownButton = screen.getByTestId("scrollDownButton")
      const secondKeyScrollDownButton = scrollDownButton[Object.keys(scrollDownButton)[1]].onClick
      expect(secondKeyScrollDownButton.toString()).toStrictEqual(ScrollDownFunction.toString())
    })

    // due to the way the rendering works, viewport cant be checked, thus there cant be checked if the site scrolled down or not

    /*
    ============================
    due to already checking for the onClick funtion, this means clickable by definition
    ============================

    test("button clickable", () => {
      expect(1 + 1).not.toBe(3)
    })
    */

  })

})

describe('checking about section', () => {
  describe('checking text divs', () => {
    test("first textdiv present", () => {
      render(<App />)
      const firsDiv = screen.getByTestId("aboutPage").childNodes[0]
      expect(firsDiv).toBeInTheDocument()
      expect(firsDiv).toHaveTextContent(/About me/i)
    })

    test("second textdiv present", () => {
      render(<App />)
      const secondDiv = screen.getByTestId("aboutPage").childNodes[1]
      expect(secondDiv).toBeInTheDocument()
      expect(secondDiv).toHaveTextContent(`Title: WOW A WHOLE PAGE ABOUT ME?! Bernd de Kruik is a 22 year old computer geek from Netherlands with a creative out of the box mindset! Bernd thrives at solving problems and puzzles with code, which makes him a full stack webdev that won’t give up until he has the solution for the task that is handled to him! He loves to cook and has a soft spot for cats in his heart! People around him consider him a team player with great communication skills. He is very innovative, dedicated and hardworking. He also hates to talk about himself in the third person and he would really appreciate to not have to do it again.`)
    })


  })

  //as mentioned in notes -> add test for social buttons in this div
  describe("checking aboutSocial div", () => {
    describe("checking if aboutSocial is inside the about section", () => {
      test("aboutSocial div present", () => {
        render(<App />)
        const aboutSocialDiv = screen.getByTestId("aboutSocial")
        const thirdDiv = screen.getByTestId("aboutPage").childNodes[2]
        expect(thirdDiv).toStrictEqual(aboutSocialDiv)
      })
    })
    describe("checking linkedin logo", () => {
      test("logo present", () => {
        render(<App />)
        const linkedinLogo = screen.getByTestId("aboutSocial").childNodes[0].firstChild
        expect(linkedinLogo).toHaveAttribute("src", linkedinLogoImg)
      })

      test("link wrapped around logo", () => {
        render(<App />)
        const linkedinLogoATag = screen.getByTestId("aboutSocial").childNodes[0]
        expect(linkedinLogoATag).toHaveAttribute("href", "https://www.linkedin.com/in/bernd-de-kruik-2a7497195/")
        expect(linkedinLogoATag).toHaveAttribute("target", "_blank")
        expect(linkedinLogoATag).toHaveAttribute("rel", "noopener noreferrer")
        // decided to test if the image was wrapped in an a tag using similar code as the test checking if the projects title div contained the correct element
        const linkedinLogoWrappingElement = linkedinLogoATag[Object.keys(linkedinLogoATag)[0]].type
        expect(linkedinLogoWrappingElement).toStrictEqual("a")
      })

    })

    describe("checking github logo", () => {
      test("logo present", () => {
        render(<App />)
        const githubLogo = screen.getByTestId("aboutSocial").childNodes[1].firstChild
        expect(githubLogo).toHaveAttribute("src", githubLogoImg)
      })

      test("link wrapped around logo", () => {
        render(<App />)
        const githubLogoATag = screen.getByTestId("aboutSocial").childNodes[1]
        expect(githubLogoATag).toHaveAttribute("href", "https://github.com/MorbidMiyako")
        expect(githubLogoATag).toHaveAttribute("target", "_blank")
        expect(githubLogoATag).toHaveAttribute("rel", "noopener noreferrer")
        // decided to test if the image was wrapped in an a tag using similar code as the test checking if the projects title div contained the correct element
        const githubLogoWrappingElement = githubLogoATag[Object.keys(githubLogoATag)[0]].type
        expect(githubLogoWrappingElement).toStrictEqual("a")
      })

    })

  })
})

describe('checking projects section', () => {
  describe('checking minimum divs', () => {
    test("contains at least 3 divs", () => {
      render(<App />)
      const projectsDiv = screen.getByTestId("projectsDiv").childNodes
      expect(projectsDiv.length < 3).toBeFalsy()
    })

  })

  describe('checking first div', () => {
    test("h3 contains the correct text", () => {
      render(<App />)
      const projectTitle = screen.getByTestId("projectsDiv").childNodes[0].childNodes[0]
      expect(projectTitle).toHaveTextContent(/projects/i)
    })

    test("div contains the correct element", () => {
      render(<App />)
      const projectTitleDiv = screen.getByTestId("projectsDiv")
      const projectTitleElement = projectTitleDiv.childNodes[0].childNodes[0][Object.keys(projectTitleDiv)[0]].type
      expect(projectTitleElement).toStrictEqual("h2")

    })

  })

  describe("checking other divs", () => {
    render(<App />)
    const projectsDiv = screen.getByTestId("projectsDiv").childNodes
    for (let i = 1; i < projectsDiv.length; i++) {
      describe(`checking div number ${i + 1}`, () => {
        test("div has 2 children", () => {
          render(<App />)
          const projectsDiv = screen.getByTestId("projectsDiv").childNodes[1].childNodes
          expect(projectsDiv.length < 2).toBeFalsy()
          expect(projectsDiv.length > 2).toBeFalsy()
        })

        test("div has h3 element", () => {
          render(<App />)
          const projectDiv = screen.getByTestId("projectsDiv").childNodes[i].childNodes[0]
          const projectH3Element = projectDiv[Object.keys(projectDiv)[0]].type
          expect(projectH3Element).toStrictEqual("h3")

        })

        test("div has p element", () => {
          render(<App />)
          const projectDiv = screen.getByTestId("projectsDiv").childNodes[i].childNodes[1]
          const projectPElement = projectDiv[Object.keys(projectDiv)[0]].type
          expect(projectPElement).toStrictEqual("p")

        })

        test("p element has a element", () => {
          render(<App />)
          const projectLink = screen.getAllByTestId("projectLink")[i - 1]
          const projectAElement = projectLink[Object.keys(projectLink)[0]].type
          expect(projectAElement).toStrictEqual("a")

          const projectDiv = screen.getByTestId("projectsDiv").childNodes[i].childNodes[1]
          expect(projectDiv).toContainElement(projectLink)
        })

      })
    }

  })

})
