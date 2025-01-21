import './Card.css'



const Card = ({imagenosent,priceno,descno}) => {

    const imageno =["https://m.media-amazon.com/images/I/61fX7JMM3-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61N2T3aTK5L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61fX7JMM3-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61Kfqt-h5-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61-Y-eWXqtL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/6176GJwmjFL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71uEP3Hc3UL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71kQxWE4ZHL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61N2T3aTK5L._AC_UY327_FMwebp_QL65_.jpg"]

    const description=["Dell 15 Thin & Light Laptop, Windows 11 Home, Intel Core i5-1235U Processor, 8GB RAM + 512GB SSD","Dell Inspiron 3530 Thin & Light Laptop, 13th Gen Intel Core i3-1305U/8GB/512GB SSD/15.6 (39.62cm) 120Hz Refresh Rate","Dell 15 Thin & Light Laptop, Windows 11 Home, Intel Core i5-1235U Processor, 8GB RAM + 512GB SSD, 15.6 FHD Window 11","Dell Inspiron 15 3535 Laptop – 15.6 inch FHD (39.62cm) Display, AMD Ryzen 3 7320U Processor, 8 GB RAM, 512 GB SSD, Carbon Black","Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15.6 (39.62cm) FHD Display","Dell {Smartchoice} G15-5530 Core i5-13450HX| NVIDIA RTX 3050, 6GB (16GB RAM|1TB SSD, FHD|Window 11|MS Office' 21|","Dell Inspiron 5630 13th Gen Laptop, Intel Core i5-1340P Processor/16Gb LPDDR5/512GB /16.0 (40.64cm) FHD","Dell Inspiron 15 3535 Laptop - 15.6 inch FHD (39.62cm) Display, AMD Ryzen 5 7520U, 8 GB RAM, 512 GB SSD, Carbon Black, 1.67Kg","Dell Inspiron 3530 Laptop, 13th Generation Intel Core i7-1355U Processor, 16GB, 512GB, 15.6 (39.62cm) FHD 120Hz Display","Dell Inspiron 3530 Thin & Light Laptop, 13th Gen Intel Core i3-1305U/8GB/512GB SSD/15.6 (39.62cm) 120Hz Refresh Rate on a FHD"] 

  const price=["₹43,490","₹39,490","₹43,490","₹29,990","46,990₹","₹72,990","₹63,980","₹37,990","₹68,790","₹39,490"]
  
  const imageUrl=imageno[parseInt(imagenosent)]
  
  
  return (
    <div id='card'>
        
        <div id='img' style={{ backgroundImage: `url(${imageUrl})`, height:'21vh', width:'84%' , backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',}} ></div>
        
        <div id='description'>{description[descno]}</div>
        <div id='price'>M.R.P {price[priceno]}</div>
        <div id='addtocartCont'><div>Add to cart</div> <div id='addtocart'></div></div>
    </div>
  )
}

export default Card



                                                                                    
 
