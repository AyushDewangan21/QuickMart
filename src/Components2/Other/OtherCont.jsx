import React from 'react'
import './OtherCont.css'


const OtherCont = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/71D7jU3tUUL._AC_UL480_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61rBku1fAsL._AC_UL480_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/51OJPhvBHkL._AC_UL480_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61wyeNsCrfL._AC_UL480_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/718Rc+uhlAL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61afkty1foL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61I66N7SE6L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71+QbcNRlvL._AC_UL480_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/514m1VhSUUL._AC_UL480_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71FLCfz6JCL._AC_UL480_FMwebp_QL65_.jpg"]
  const desc=["Fire-Boltt Phoenix Ultra Luxury Stainless Steel, Bluetooth Calling Smart Watch, ₹1,499","Amazfit Helio Smart Ring, Wearable Fitness Tracker, Sleep Heart Rate Health Monitor, ₹19,999 ","Cosmic Byte C3070W Nebula 2.4G Wireless Gamepad for PC supports Windows XP/7/8/10/11, ₹1,499","HINISO Spotting Scope 20-60x80 HD with Phone Holder, Tripod Stand & Carry Bag, ₹12,790 ","Saneen Digital Camera for Photography, 4K 64MP WiFi Touch Screen Vlogging Camera with Flash, 32GB Micro Card, Lens Hood, ₹17,648","Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet, Graphite, ₹17,499","Meta Quest 3 512GB - Breakthrough Mixed Reality - Powerful Performance — Asgard’s Wrath 2 and Meta Quest + Bundle, ₹52,110","Fire-Boltt 4G Pro Volte Calling Smart Watch- 2.02” TFT Display, ₹1,799","OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic,₹1,299 ","Etzin DM9 Pro 7 Mini HDMI Digital Microscope 1200X, 1080P 16MP Coin Microscope, ₹16,999"]
  // const 
  const imageUrl=imageNo[parseInt(imagenosent)]
  return (
    <div id='Otherobject'>
        <div id='Otherflexx'>
        <div id='Otherobj1' style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div id='Otherobj2'>{desc[descno]}</div>
        </div>
        <div id='OtherCart'><div id='addtocartOther'></div>Add to cart</div>
        

    </div>
  )
}

export default OtherCont