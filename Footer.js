import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "unset",
    top: "100vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
    <div className="sc-jWBwVP eLehTV">
      <p className="sc-brqgnP iKjUFw">
        "Characters: "
        "16"
      </p>
      
      <p className="sc-brqgnP iKjUFw">
        "Episodes: "
        "102"
      </p>
      

      <p className="sc-brqgnP iKjUFw">
        "Qoutes: "
        "70"
      </p>
      

      <p className="sc-brqgnP iKjUFw">
        "Death Count: "
        "271"
      </p>
      
    </div>
    </footer>
  )
}
