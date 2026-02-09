import React from 'react'

const Header = ({title, color, year}) => {
  return (
      <header>
        <h1>{title}  {color}  {year}</h1>

        <nav>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
      </header>
  )
}

export default Header
