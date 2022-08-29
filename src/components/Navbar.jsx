import React, { useState } from "react"

import "./Navbar.css"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <div className={`navbar ${!showLinks ? " menuVisible" : ""}`}>
      <a href="/" className="navbar__logo">
        <img
          src={process.env.PUBLIC_URL + "firebase-logomark.png"}
          alt="firebase_logo"
          height="30px"
          width="30x"
        />
      </a>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <a href="/" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="/login" className="navbar__link ">
            Login
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/register" className="navbar__link ">
            Register
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/account" className="navbar__link ">
            Account
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  )
}

export default Navbar
