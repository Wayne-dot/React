import React from 'react';
import ReactDOM from "react-dom"

const title = (
  <h1 className='title'>Subsribe</h1>
)

const instruction = (
  <h3>Sign up with your email to recieve latest news and updates</h3>
)

const body = (
  <div id='total_container'>
    <div id='sub_container'>
      {title}
      {instruction}
    </div>
  </div>
)


const root = document.getElementById('root')

ReactDOM.render(body, root)