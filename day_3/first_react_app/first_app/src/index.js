import React from "react"
import ReactDOM from "react-dom"
import rickrollImage from "./images/rickroll_4k.jpg"

// const jsxElement = <h1>This is a jsx element</h1>
const date = 'Oct 2, 2020'

const headerStyle = {
   backgroundColor: "#61DBFB",
   footFamily: "Helvetica Neue",
   padding: 25,
   lineHeight: 1.5,
}

const header = (
  <header style={headerStyle}>
    <h1>Welcome to 30 day of React</h1>
    <h2>Getting Start React</h2>
    <h3>Javascript Library</h3>
    <small>Date: {date}</small>

  </header>
)

const num1 = 4;
const num2 = 2;

const result = (
  <p>
    {num1} + {num2} = {num1+num2}
  </p>
)

const mainStyle = {
  backgroundColor: "#F3F0F5"
}

const user = (
  <div>
    <img src={rickrollImage} alt="rick roll" />
  </div>
)

const main = (
  <main style={mainStyle}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
    </ul>
    {result}
    {user}
  </main>
)

const footStyle = {
  backgroundColor: "#61DBFB",
}

const footer = (
  <footer style={footStyle}>
    <p>Copyright 2023</p>
  </footer>
)




const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById("root")


ReactDOM.render(app, rootElement) //or ReactDOM.render([header, main, footer], rootElement)

