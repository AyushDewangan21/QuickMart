import React, { useEffect, useState } from 'react'
import './Other.css'
import Footer from '../Components/Footer'
import OtherCont from './Other/OtherCont'
const Other = () => {

  const [toggle, setToggle] = useState(false);
  
    const ToggleCart = ()=>{
         setToggle( toggle => !toggle)
         if(toggle==true) document.getElementById('toggleDiv').style.display='none'
         else document.getElementById('toggleDiv').style.display=''
    }
    useEffect(() => {
      document.getElementById('toggleDiv').style.display='none'
      return () => {
        
      };
    }, []);


  return (
    <div>
        {/* HEAder _____________________________________________________________ */}
        <div id='header'>
            <div id='line1'></div>
            <div id='cont1'>  {}<div id='logo'></div> {}<div id='qm'>QuickMart</div>{} <div id='inputdiv'><input id='input' type="text" placeholder='Seach products ...' /></div>                                  
                     <div id='cart' typeof='button' onClick={ToggleCart}>
                         <div id='cartcount'>{0} </div> 
                         <div id='toggleDiv'></div>
                     </div>  
                          <div id='account'></div></div>
            <div id='line2'></div>
          </div>

          {/* NAvigation bar */}
          <div id='navbar'>
          <div id='cont2'><a href="/">Laptop</a></div>
            <div id='cont3'><a href="/handset">Handset</a></div>
            <div id='cont4'><a href="/earpod">Earpod</a></div>
            <div id='cont5'><a href="/led">LED Tv </a></div>
            <div id='cont6'><a href="/other">Others</a></div>
          </div>



          <div id='belowOfLed'>
          <div id='line3-4Handset'> <div id='line3Handset'></div><div id='HandsetSeries'>More ...</div> <div id='line4Handset'></div></div>

                     <div id="scroll-containerHandset">
                                  <div id="boxHandset"> <OtherCont imagenosent={0} descno={0}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={1} descno={1}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={2} descno={2}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={3} descno={3}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={4} descno={4}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={5} descno={5}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={6} descno={6}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={7} descno={7}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={8} descno={8}/></div>
                                  <div id="boxHandset"> <OtherCont imagenosent={9} descno={9}/></div>
                      </div>
                      
          </div>
          <div id='footer'> <Footer/></div>
         
    </div>
  )
}

export default Other