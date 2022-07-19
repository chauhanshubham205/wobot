import React from "react";
import "./Wobot.css";
import Wobot2 from "./Wobot2";
const Wobot = ({ size }) => {
  return (
    <>
      <nav>
        <img src="https://wobot.ai/wobot_logo_blue.svg" alt="" />
      </nav>
      <div className="container">
        <div className="page">
          <div className="logo">
            <div className="stick1"></div>
            <div className="stick2"></div>
            <div className="stick3"></div>
          </div>
          <div className="heading">It's a delight to have you</div>
          <div className="heading">onboard</div>
          <p>Help us know you better.</p>
          <p>(This is how we optimize Wobot as per your business needs)</p>
          <div className="name">Comany Name </div>
          <input
            type="text"
            placeholder="e.g. Example Inc"
            name=""
            id="input"
          />
          <div className="name">Industry</div>
          <select name="" id="">
            <option className="option" value="volvo">
              Select
            </option>
            <option className="option" value="saab">
              I.T
            </option>
            <option className="option" value="opel">
              Auto
            </option>
            <option className="option" value="audi">
              Civil
            </option>
          </select>
          <div className="company name">Company size</div>
          <Wobot2 size={size} />
          <button>Get Started</button>
        </div>
      </div>
      <footer>Terms of use Privacy policy</footer>
    </>
  );
};

export default Wobot;
