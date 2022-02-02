import React from "react"

export default function MainContent() {
    return(
      <div>
        <nav>
          <div className="container-top">
            <h1 className="top-title">New ways to book places</h1>
            <p className="top-paragraph">Let's find great place with Tinggalklik, Say goodbye to old booking ways!</p>
            <img className="top-image" src="./sammy-bodypositive.png" alt="gambar-sammy"/>
          </div>
        <section className="container-card">
          <div className="card">
            <div className="card-image no-1">
              <h2>Find Everywhere</h2>
            </div>
          </div>
          <div className="card">
            <div className="card-image no-2">
              <h2>Easy Booking</h2>
            </div>
          </div>
          <div className="card">
            <div className="card-image no-3">
              <h2>Play with new friends!</h2>
            </div>
          </div>
        </section>
        </nav>
        <nav>
            <h2 className="product-title">Our Product</h2>
        </nav>
        <div className="row">
        <div className="card-product">
        <div className="card-header">
          <h1>TinggalHost</h1>
        </div>
        <div className="card-body">
          <p>
            Aplikasi yang membantu mengelola bisnis kamu!
          </p>
          <a href="#" className="btn">Read more</a>
        </div>
        </div>
        <div className="card-product">
        <div className="card-header">
          <h1>Tinggalklik</h1>
        </div>
        <div className="card-body">
          <p>
            Aplikasi yang Mencari lawan bermain!
          </p>
          <a href="#" className="btn">Read more</a>
        </div>
        </div>
        <div className="card-product">
        <div className="card-header">
          <h1>TinggalAI</h1>
        </div>
        <div className="card-body">
          <p>
            Teknologi kecerdasan buatan yang membantu experience olahraga semakin seru!
          </p>
          <a href="#" className="btn">Read more</a>
        </div>
        </div>
        <div className="">

        </div>
      </div>
      </div>
    )
  }