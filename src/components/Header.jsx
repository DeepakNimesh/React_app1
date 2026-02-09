import React from 'react'

const Header = ({card}) => {
  return (
      <header>
       {card}

        <nav>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
      </header>
  )
}

export default Header
