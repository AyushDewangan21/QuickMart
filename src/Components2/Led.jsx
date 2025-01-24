import React, { useEffect, useState } from "react";
import "./Led.css";
import Footer from "../Components/Footer";
import LedCont from "./Led/LedCont";

const Led = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleCart = () => {
    setToggle((toggle) => !toggle);
    if (toggle == true)
      document.getElementById("toggleDiv").style.display = "none";
    else document.getElementById("toggleDiv").style.display = "";
  };
  // useEffect(() => {
  //   document.getElementById('toggleDiv').style.display='none'
  //   document.getElementById('toggleDiv').style.position='relative'
  //   document.getElementById('toggleDiv').style.zIndex='20'
  //   return () => {

  //   };
  // }, []);

  let [totalProd, settotalProd] = useState(0);
  useEffect(() => {
    document.getElementById("toggleDiv").style.display = "none";
    document.getElementById("toggleDiv").style.position = "relative";
    document.getElementById("toggleDiv").style.zIndex = "20";

    document.getElementById("toggleDiv").style.display = "none";
    const toggleDiv = document.getElementById("toggleDiv");
    const observer = new MutationObserver(() => {
      let c = toggleDiv.childElementCount;
      settotalProd(c); // Update the total product count based on current child count
    });

    observer.observe(toggleDiv, {
      childList: true, // Watch for addition or removal of child elements
      subtree: true, // Watch the entire subtree (if you want to track changes within nested elements as well)
    });
    let c = toggleDiv.childElementCount;
    settotalProd(c);

    return () => {};
  }, []);

  return (
    <div>
      {/* HEAder _____________________________________________________________ */}
      <div id="header">
        <div id="line1"></div>
        <div id="cont1">
          {" "}
          {}
          <div id="logo"></div> {}
          <div id="qm">QuickMart</div>
          {}{" "}
          <div id="inputdiv">
            <input id="input" type="text" placeholder="Seach products ..." />
          </div>{" "}
          <div id="cart" typeof="button" onClick={ToggleCart}>
            <div id="cartcount">{totalProd} </div>
            <div id="toggleDiv"></div>
          </div>
          <div id="account"></div>
        </div>

        <div id="line2"></div>
      </div>

      {/* NAvigation bar */}
      <div id="navbar">
        <div id="cont2">
          <a href="/">Laptop</a>
        </div>
        <div id="cont3">
          <a href="/handset">Handset</a>
        </div>
        <div id="cont4">
          <a href="/earpod">Earpod</a>
        </div>
        <div id="cont5">
          <a href="/led">LED Tv </a>
        </div>
        <div id="cont6">
          <a href="/other">Others</a>
        </div>
      </div>

      <div id="belowOfLed">
        <div id="line3-4Handset">
          {" "}
          <div id="line3Handset"></div>
          <div id="HandsetSeries">LED Tv</div> <div id="line4Handset"></div>
        </div>

        <div id="scroll-containerHandset">
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={0} descno={0} />{" "}
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={1} descno={1} />
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={2} descno={2} />
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={3} descno={3} />
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={4} descno={4} />
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={5} descno={5} />
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={6} descno={6} />{" "}
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={7} descno={7} />
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={8} descno={8} />{" "}
          </div>
          <div id="boxHandset">
            {" "}
            <LedCont imagenosent={9} descno={9} />
          </div>
        </div>
      </div>
      <div id="footer">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Led;
