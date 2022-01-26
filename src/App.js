import React from "react"
import "./App.css"
import "./index.css"
import ReactInfiniteScroll from "./1-react-infinite-scroll"
import HamburgerMenu from "./3-hamburger-menu/HamburgerMenu"
import TailwindPlayground from "./2-tailwind-playground"

function App() {
  return (
    <>
      <TailwindPlayground />
      <ReactInfiniteScroll />
      <HamburgerMenu />
    </>
  )
}

export default App
