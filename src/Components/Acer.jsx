import './Card.css'
import Cart from '../Components2/Cart'
import { useEffect, useState } from 'react'


const Acer = ({imagenosent,priceno,descno}) => {

  const imageno =[ "https://m.media-amazon.com/images/I/619G-irw05L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/517m2WrmJxL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61fDHkQ6MqL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61fDHkQ6MqL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/517m2WrmJxL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61keRkmSGBL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/618YKR-dBgL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71TInaELMxL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61qlqvTsocL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_FMwebp_QL65_.jpg"]
  const description=["Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop ","Acer Aspire Lite 12th Gen Intel Core i5-12450H Thin and Light Laptop ","Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop ","Acer Aspire Lite AMD Ryzen 5-5625U Premium Thin and Light Laptop ","Acer Aspire Lite 12th Gen Intel Core i5-12450H Thin and Light Laptop ","Acer Aspire Lite 12th Gen Intel Core i5-12450H Thin and Light Laptop ","Acer Chromebook CB315-4H Intel Celeron N4500 ","Acer Aspire 3 Intel Core i3-N305 Processor Laptop ","Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop ","Acer Aspire Lite 12th Gen Intel Core i3-1215U Premium Metal Laptop "] 
  const price=["₹31,990 ","₹46,990","₹31,990","₹32,990","₹46,990","₹27,990","₹17,480","₹24,980","₹21,990","₹29,990"]
  const imageUrl=imageno[parseInt(imagenosent)]
  

  // const handleclick=()=>{
  //   const mrp = document.getElementById('price')
  //   mrp.addEventListener('click',()=>{
  //     const data=mrp.textContent
  //     const newDiv=document.createElement('para')
  //     newDiv.textContent=data
  //     document.getElementById('description').appendChild=newDiv
  //   })
  // }
  

    
  
  return (
    <div id='card' typeof='button'>
        
        <div id='img' style={{ backgroundImage: `url(${imageUrl})`, height:'22vh', width:'75%' , backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',}} ></div>
        
        <div id='description' className={`description${imagenosent}`}>{description[descno]}</div>
        <div id='price'>M.R.P {price[priceno]}</div>
        <div id='addtocartCont' className={`addtocart${imagenosent}`}><div>Add to cart</div> <div id='addtocart'></div></div>
    </div>
  )
}

export default Acer

