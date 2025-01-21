import React from 'react'
import './Apple.css'


const Apple = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61lLjrvDEkL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61EscGf8mYL._AC_UY327_FMwebp_QL65_.jpg"]
  const desc=["Apple iPhone 15 (128 GB) - Pink ₹58,999 ","iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White ₹74,900","Apple iPhone 15 (128 GB) - Black ₹58,999","Apple iPhone 13 (128GB) - Starlight ","Apple iPhone 15 (128 GB) - Pink ₹58,999","Apple iPhone 13 (128GB) - (Product) RED, ₹43,499 ","Apple iPhone 15 (256 GB) - Black","₹43,499 ","Apple iPhone 15 (256 GB) - Pink ₹68,999","iPhone 16 Plus 512 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Black ₹1,14,900 "]
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

export default Apple