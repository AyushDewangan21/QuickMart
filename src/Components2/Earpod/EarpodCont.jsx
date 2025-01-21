import React from 'react'
import './EarpodCont.css'


const Samsung = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/61oCISLE+PL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/713Lr2oNWaL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71RFdy6y6LL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/51raakZN9fL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61oh4tmrL1L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/614hH1Cot3L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/41kK3roaPGL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61LKTD-YnrL._AC_UY327_FMwebp_QL65_.jpg"]
  const desc=["Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, ₹12,764 ","boAt Airdopes 91 Prime, 45HRS Battery, 13mm Drivers, Metallic Finish, Low Latency. ₹699","boAt Airdopes 141, Low Latency, ENx Tech, 42HRS Battery, Fast Charge, ₹799 ","boAt Airdopes 311 Pro, 50HRS Battery, Fast Charge, Dual Mics ENx Tech,₹899","OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers,₹1,599","OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, ₹1,599 ","Redmi Buds 5C Bluetooth TWS in Ear Earbuds, Up to 40Db Hybrid Noise Cancellation, ₹1,565","Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, ₹798","Boult Newly Launched K10 Truly Wireless in Ear Ear Buds with 50H Playtime, ₹799","realme Buds T110 Bluetooth Truly Wireless in Ear Earbuds with mic,₹1,099 "]
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