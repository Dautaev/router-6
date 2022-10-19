import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <header>
        <h1>Cover</h1>
        <div className="menu">
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="features">
            Features
          </Link>
          <Link className="a" to="contact">
            Contact
          </Link>
        </div>
      </header>
      <main>
        <h1 className="Coveri">Cover your page.</h1>
        <p className="homeP">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <div className="learn-button">
          <button>Learn more</button>
              </div>
              <div className="footer-main">
                  <p className="Footer">Cover template for <span>Bootstrap,</span> by <span>@mdo.</span> </p>
              </div> 
      </main>
    </>
  );
}
