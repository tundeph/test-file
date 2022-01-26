import React, { useState } from "react"

//styles
import "./HamburgerMenu.css"

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((opener) => !opener)
  }

  return (
    <div className="HamburgerMenu">
      <nav>
        <div className="title"> Logo </div>
        <div onClick={handleMenu} className={open ? "hamburger-close" : "hamburger"}>
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
        <ul className={open ? "nav-sub" : "nav-sub close"}>
          <li>Home</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>FAQs</li>
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerMenu
