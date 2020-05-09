import React from 'react'


function Header(props) {
  return (
    <header>
      {/* <h1>Be The Hero</h1> */}
      <h1>{props.title}</h1>
      {props.children}
    </header>
  )
}

export default Header