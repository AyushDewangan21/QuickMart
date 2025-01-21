import React from 'react'
import './Samsung.css'


const Samsung = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/8189mzscM6L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71goZuIha-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71OXmy3NMCL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71r4P+34FuL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71ez69tPl4L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71RVuBs3q9L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61+g6KrDXdL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"]
  const desc=["Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage) ₹71,999","Samsung Galaxy M35 5G (Daybreak Blue,8GB RAM,256GB Storage)| ₹19,499 ","Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage) ₹71,999","Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage) ₹71,999","Samsung Galaxy S23 Ultra 5G AI Smartphone (Cream, 12GB, 256GB Storage) ₹71,999 ","Samsung Galaxy S24 5G AI Smartphone (Onyx Black, 8GB, 256GB Storage) ₹55,450","Samsung Galaxy S24 5G AI Smartphone (Amber Yellow, 8GB, 128GB Storage) ₹50,999","Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage) ₹1,39,999","Samsung S24 5G Marble Grey 8GB 256GB ₹54,900","Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)_Without Offer  ₹1,03,990 "]
  // const 
  const imageUrl=imageNo[parseInt(imagenosent)]
  return (
    <div id='object'>
        <div id='flexx'>
        <div id='obj1' style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div id='obj2'>{desc[descno]}</div>
        </div>
        <div id='SamsungCart'><div id='addtocartSamsung'></div>Add to cart</div>
        

    </div>
  )
}

export default Samsung
