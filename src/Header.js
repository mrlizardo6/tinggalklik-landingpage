import React from "react"
import TinggalklikLogo from "./LOGO TINGGAL KLIK TANGANNYA AJA.png"
export default function Header() {
    return (
      <header>
          <nav className="nav">
            <img src= {TinggalklikLogo} 
                 alt="Tinggalklik Logo" 
                 className="nav-logo"/>
            <h2 className="nav-title">Tinggalklik</h2>
            <ul className="nav-items">
              <li>Products</li>
              <li>Contact</li>
              <li>Team</li>
            </ul>
          </nav>
        </header>
    )
  }