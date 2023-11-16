import React from "react"
import ReactDOM from "react-dom"

const jsxElement = <h1>This is a jsx element</h1>
const title = <h2>Getting Start React</h2>

const header = (
  <header>
    <h1>Welcome to 30 day of React</h1>
    <h2>Getting Start React</h2>
    <h3>Javascript Library</h3>
    <small>Oct 2, 2020</small>
  </header>
)

const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
    </ul>
  </main>
)

const footer = (
  <footer>
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


ReactDOM.render(app, rootElement)
