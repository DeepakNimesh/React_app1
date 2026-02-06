import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <footer>
        <p>{props.year[2]} {props.company.name} {props.company.location} {props.company.EstYear}</p>
      </footer>
    </div>
  )
}

export default Footer