import React, { Component } from "react";
import "./App.scss";
import logo from "./public/logo.png";
import instagram from "./public/instagram-brands.svg";
import twitter from "./public/twitter-brands.svg";

class App extends Component {
  render() {
    return (
      <div>
        <section className="App">
          <img className="logo" src={logo} alt="logo" />
          <div className="glitch__container">
            <h1 className="glitch">CREATE THE FUTURE</h1>
            <div className="mask-container">
              <h1 className="glitch-mask">CREATE THE FUTURE</h1>
            </div>
          </div>
          {/* <div className="glitch__container">
            <h1 className="glitch small">CREATE THE FUTURE</h1>
            <div className="mask-container">
              <h1 className="glitch-mask">CREATE THE FUTURE</h1>
            </div>
          </div> */}
        </section>
        <section className="App section2">
          <div className="glitch2__container">
            <h1 className="glitch2">3.11.2020</h1>
            <div className="mask-container2">
              <h1 className="glitch-mask2">3.11.2020</h1>
            </div>
          </div>
          <p className="paragraph">
            We’re building on the foundations of our brand to make something new
            and exciting. A way for people to connect and together create the
            future.
          </p>
          <div className="btn__container">
            <button>Be a part of the movement</button>
          </div>
          <div className="socials">
            <a target="blank" href="https://www.instagram.com/adidas/?hl=en">
              <img src={instagram} alt="instagram" />
            </a>
            <a target="blank" href="https://twitter.com/adidas">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </section>
        <section className="section3">
          <p>
            this project was created by students as an excercise in viral
            marketing.
          </p>
          <p>
            This project is not endorsed by Adidas and doesn't reflect the views
            or opinions of Adidas.
          </p>
          <p>
            created with ❤ by{" "}
            <a target="blank" href="https://github.com/jescowuester/">
              @JSco
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
