import React from 'react';
import ReactDOM from "react-dom"

const title = (
  <h1 className='title'>Subsribe</h1>
)

const instruction = (
  <h4 id='instruction'>Sign up with your email to recieve latest news and updates</h4>
)

const input_data = (
  <div>
    <input type="text" id="fname" name="fname" placeholder='First name'></input>

    <input type="text" id="lname" name="lname" placeholder='Last name'></input>

    <input type="text" id="email" name="email" placeholder='Email'></input>
  </div>
)


const sub_but = (
  <div>
    <button>Subscribe</button>
  </div>
)

const body = (
  <div id='total_container'>
    <div id='sub_container'>
      {title}
      {instruction}
      {input_data}
      {sub_but}
    </div>
  </div>
)


const root = document.getElementById('root')

ReactDOM.render(body, root)