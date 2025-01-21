import './Card.css'



const Lenovo = ({imagenosent,priceno,descno}) => {

    const imageno =["https://m.media-amazon.com/images/I/71-i11riVIL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/81JUbPkcH4L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61bBTgE6PAL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71xfR660ZmL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61ZxrrWZLtL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/8133GVuhgwL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61UjxQh+aYL._AC_UL960_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/616fX5Yh00L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/81zdgqyLRWL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71-i11riVIL._AC_UY327_FMwebp_QL65_.jpg"]

    const description=["Lenovo IdeaPad Slim 3 12th Gen Intel Core i5-12450H 14 (35.5cm) FHD 250 Nits Thin & Light Laptop ","Lenovo Legion Pro 7 Intel Core i9-14900HX 16 (40.6cm) WQXGA IPS 500Nits 240Hz Gaming Laptop ","Lenovo IdeaPad Pro 5 Intel Evo Core Ultra 9 185H Built-in AI 14 (35.5cm) 2.8K-OLED 400Nits 120Hz Laptop ","Lenovo IdeaPad Slim 3 13th Gen Intel Core i7-13620H 15.6 (38.1cm) FHD IPS 300 Nits Thin & Light Laptop","Lenovo IdeaPad Slim 3 13th Gen Intel Core i7-13620H 15 (38.1cm) FHD IPS 300 Nits Thin & Light Laptop ","Lenovo LOQ 2024 AMD Ryzen 7 7435HS | NVIDIA RTX 4060 8GB (24GB RAM/512GB SSD/15.6 (39.6cm)/Windows 11","Lenovo IdeaPad Slim 5 12th Gen Intel Core i5 12450H 14 (35.5cm) WUXGA+ IPS Laptop","Lenovo LOQ 2024 AMD Ryzen 7 7435HS | NVIDIA RTX 4050 6GB (24GB RAM/512GB SSD/15.6 (39.6cm)/Windows 11","Lenovo LOQ 2024 12th Gen Intel Core i5-12450HX 15.6 (39.6cm) 144Hz 300Nits FHD Gaming Laptop ","Lenovo IdeaPad Slim 3 12th Gen Intel Core i5-12450H 14 (35.5cm) FHD 250 Nits Thin & Light Laptop "] 

  const price=["₹31,990","₹2,99,990","₹1,03,990 ","₹60,990","₹59,990","₹89,490 ","₹57,990","₹80,490","₹58,990","₹48,490"]
  
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

export default Lenovo


