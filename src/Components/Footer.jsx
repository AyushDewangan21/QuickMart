import React from "react";

import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <p id="fooPara">
        At QuickMart, we are passionate about bringing you the latest and
        greatest in tech gadgets. Whether you're a tech enthusiast or someone
        looking for the perfect gadget to simplify your daily life, we offer a
        wide selection of innovative products to meet your needs. From smart
        home devices and wearables to cutting-edge accessories, we provide
        high-quality gadgets that combine functionality, design, and
        performance. Stay ahead of the curve with our carefully curated
        collection, and explore the future of technology today!
      </p>

      <div id="fooLink">
        <div id="f1">
          {" "}
          <div id="fooImg1"></div>Gmail : ayush.dewangan2109@gmail.com
        </div>
        <div id="f2">
          <div id="fooImg2"></div>
          <ul>
            {" "}
            <a href="https://www.linkedin.com/in/ayushdewangan21/">
              LinkedIn :
              <span
                class="inner-link"
                onclick="window.open('https://www.innerlink.com')"
              >
                {" "}
                Ayush Dewangan
              </span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
