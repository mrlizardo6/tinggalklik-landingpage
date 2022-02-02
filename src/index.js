import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <LandingPage />, 
  document.getElementById("root")
)



