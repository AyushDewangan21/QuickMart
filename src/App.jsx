import React, { useEffect, useState } from 'react'
import './App.css';
import Footer from './Components/Footer'
import Acer from './Components/Acer'
import HP from './Components/HP'
import Dell from './Components/Dell'
import Lenovo from './Components/Lenovo'

const App = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleCart = ()=>{
       setToggle( toggle => !toggle)
       if(toggle==true) document.getElementById('toggleDiv').style.display='none'
       else document.getElementById('toggleDiv').style.display=''
  }
  useEffect(() => {
    document.getElementById('toggleDiv').style.display='none'
    document.getElementById('toggleDiv').textContent=document.getElementsByClassName('description5').textContent
    return () => {
      
    };
  }, []);


  const handleclick=()=>{
  //   const mrp = document.getElementsByClassName('description5')
  //   const data= mrp.textContent
  //   document.getElementById('toggleDiv').textContent=data

  //   mrp.addEventListener('click',()=>{
  //     const data=mrp.textContent
  //     const newDiv=document.createElement('para')
  //     newDiv.textContent=data
  //     document.getElementById('toggleDiv').appendChild=newDiv
  //   })
  }








  return (

    
    <div className='App'>

          {/* HEAder _____________________________________________________________ */}
          <div id='header'>
          
            <div id='line1'></div>
            <div id='cont1'>
                  <div id='logo'>  
                </div>
                  <div id='qm'>QuickMart</div>
                  <div id='inputdiv'><input id='input' type="text" placeholder='Seach products ...' /></div>
                  <div id='cart' typeof='button' onClick={ToggleCart}><div id='cartcount'>{0} </div> 
                    <div id='toggleDiv'> <div></div>This feature is currently under development. We appreciate your patience! </div>
                  </div>               
                  <div id='account'></div> 
                  
            
            </div>

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

          {/* Body below navbar */}

          <div id='belowNav'>

          <div id='line3-4'> <div id='line3'></div><div id='AcerSeries'>Acer Series</div> <div id='line4'></div></div>

                   <div id='cont7'>
                            <div id="scroll-container">
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={0} priceno={0} descno={0}/>  </div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={1} priceno={1} descno={1}/> </div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={2} priceno={2} descno={2}/>  </div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={3} priceno={3} descno={3}/></div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={4} priceno={4} descno={4}/> </div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={5} priceno={5} descno={5}/> </div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={6} priceno={6} descno={6}/></div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={7} priceno={7} descno={7}/></div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={8} priceno={8} descno={8}/></div>
                                  <div id="box" onClick={handleclick}> <Acer  imagenosent={9} priceno={9} descno={9}/></div>
                             </div>
                    </div>

                    <div id='line5-6'> <div id='line3'></div><div id='HpSeries'>HP Series</div> <div id='line4'></div></div>

                    <div id='cont8'>
                            <div id="scroll-container">
                                  <div id="box"> <HP imagenosent={0} priceno={0} descno={0}/> </div>
                                  <div id="box"> <HP imagenosent={1} priceno={1} descno={1}/> </div>
                                  <div id="box"> <HP imagenosent={2} priceno={2} descno={2}/> </div>
                                  <div id="box"> <HP imagenosent={3} priceno={3} descno={3}/> </div>
                                  <div id="box"> <HP imagenosent={4} priceno={4} descno={4}/> </div>
                                  <div id="box"> <HP imagenosent={5} priceno={5} descno={5}/> </div>
                                  <div id="box"> <HP imagenosent={6} priceno={6} descno={6}/> </div>
                                  <div id="box"> <HP imagenosent={7} priceno={7} descno={7}/> </div>
                                  <div id="box"> <HP imagenosent={8} priceno={8} descno={8}/> </div>
                                  <div id="box"> <HP imagenosent={9} priceno={9} descno={9}/> </div>
                             </div>
                    </div>


                    <div id='line5-6'> <div id='line3'></div><div id='DellSeries'>Dell Series</div> <div id='line4'></div></div>

                    <div id='cont9'>
                            <div id="scroll-container">
                                  <div id="box"> <Dell imagenosent={0} priceno={0} descno={0}/> </div>
                                  <div id="box"> <Dell imagenosent={1} priceno={1} descno={1}/></div>
                                  <div id="box"><Dell imagenosent={2} priceno={2} descno={2}/> </div>
                                  <div id="box"><Dell imagenosent={3} priceno={3} descno={3}/> </div>
                                  <div id="box"><Dell imagenosent={4} priceno={4} descno={4}/> </div>
                                  <div id="box"><Dell imagenosent={5} priceno={5} descno={5}/> </div>
                                  <div id="box"><Dell imagenosent={6} priceno={6} descno={6}/> </div>
                                  <div id="box"><Dell imagenosent={7} priceno={7} descno={7}/> </div>
                                  <div id="box"><Dell imagenosent={8} priceno={8} descno={8}/> </div>
                                  <div id="box"><Dell imagenosent={9} priceno={9} descno={9}/> </div>
                             </div>
                    </div>

                    <div id='line5-6'> <div id='line3'></div><div id='LenovoSeries'>Lenovo Series</div> <div id='line4'></div></div>

                    <div id='cont10'>
                            <div id="scroll-container">
                                  <div id="box"> <Lenovo imagenosent={0} priceno={0} descno={0}/> </div>
                                  <div id="box"> <Lenovo imagenosent={1} priceno={1} descno={1}/></div>
                                  <div id="box"><Lenovo imagenosent={2} priceno={2} descno={2}/> </div>
                                  <div id="box"><Lenovo imagenosent={3} priceno={3} descno={3}/> </div>
                                  <div id="box"><Lenovo imagenosent={4} priceno={4} descno={4}/> </div>
                                  <div id="box"><Lenovo imagenosent={5} priceno={5} descno={5}/> </div>
                                  <div id="box"><Lenovo imagenosent={6} priceno={6} descno={6}/> </div>
                                  <div id="box"><Lenovo imagenosent={7} priceno={7} descno={7}/> </div>
                                  <div id="box"><Lenovo imagenosent={8} priceno={8} descno={8}/> </div>
                                  <div id="box"><Lenovo imagenosent={9} priceno={9} descno={9}/> </div>
                             </div>
                    </div>


    
                      {/* FOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooTER */}
                      <div id='footerinApp'><Footer/></div>
                      
                      


                     
          </div>
    </div>
    
   
  )
}

export default App