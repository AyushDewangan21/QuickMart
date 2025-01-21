import React from 'react'
import './LedCont.css'


const LedCont = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/81nikv9C6lL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/714ccOfBThL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71JQ3kUrR9L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/81u+lUSZRDL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/717oSOB4hCL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71tKQEE8ayL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71MwDnn-ZaL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71RMJHjJa0L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71qonh3XFPL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/712MJI-diwL._AC_UY327_FMwebp_QL65_.jpg"]
  const desc=["Samsung 138 cm (55 inches) D Series Crystal 4K Vivid Ultra HD Smart LED TV ₹42,490","Acer 80 cm (32 inches) I Pro Series HD Ready Smart LED Google TV ₹10,499 ","Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black) ₹14,990 ","Xiaomi Smart TV A 80 cm (32) HD Ready Smart Google LED TV L32MA-AIN (Black), ₹11,999","VW 80 cm (32 inches) Frameless Series HD Ready Android Smart LED TV VW32S (Black), ₹6,699 ","VW 80 cm (32 inches) Playwall Frameless Series HD Ready Android Smart LED TV VW32F5 (Black),₹7,299 ","Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32MA-FVIN (Black), ₹11,499","VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV VW43F2 (Black), ₹13,499 ","TCL 79.97 cm (32 inches) Metallic Bezel-Less S Series FHD Smart Android LED TV 32S5500AF (Black), ₹10,990 ","Acer 139 cm (55 inches) Super Series 4K Ultra HD Smart QLED Google TV with Android 14 (Black) | MEMC | ALLM | VRR | ₹37,999 "]
  // const 
  const imageUrl=imageNo[parseInt(imagenosent)]
  return (
    <div id='Ledobject'>
        <div id='Ledflexx'>
        <div id='Ledobj1' style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div id='Ledobj2'>{desc[descno]}</div>
        </div>
        <div id='LedCart'><div id='addtocartSamsung'></div>Add to cart</div>
        

    </div>
  )
}

export default LedCont
