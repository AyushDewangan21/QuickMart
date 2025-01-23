import './Card.css'



const Card = ({imagenosent,priceno,descno}) => {

    const imageno =["https://m.media-amazon.com/images/I/61fX7JMM3-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61N2T3aTK5L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61fX7JMM3-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61Kfqt-h5-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61-Y-eWXqtL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/6176GJwmjFL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71uEP3Hc3UL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71kQxWE4ZHL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61N2T3aTK5L._AC_UY327_FMwebp_QL65_.jpg"]

    const description=["Dell 15 Thin & Light Laptop, Windows 11 Home, Intel Core i5-1235U Processor, 8GB RAM + 512GB SSD","Dell Inspiron 3530 Thin & Light Laptop, 13th Gen Intel Core i3-1305U/8GB/512GB SSD/15.6 (39.62cm) 120Hz Refresh Rate","Dell 15 Thin & Light Laptop, Windows 11 Home, Intel Core i5-1235U Processor, 8GB RAM + 512GB SSD, 15.6 FHD Window 11","Dell Inspiron 15 3535 Laptop – 15.6 inch FHD (39.62cm) Display, AMD Ryzen 3 7320U Processor, 8 GB RAM, 512 GB SSD, Carbon Black","Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15.6 (39.62cm) FHD Display","Dell {Smartchoice} G15-5530 Core i5-13450HX| NVIDIA RTX 3050, 6GB (16GB RAM|1TB SSD, FHD|Window 11|MS Office' 21|","Dell Inspiron 5630 13th Gen Laptop, Intel Core i5-1340P Processor/16Gb LPDDR5/512GB /16.0 (40.64cm) FHD","Dell Inspiron 15 3535 Laptop - 15.6 inch FHD (39.62cm) Display, AMD Ryzen 5 7520U, 8 GB RAM, 512 GB SSD, Carbon Black, 1.67Kg","Dell Inspiron 3530 Laptop, 13th Generation Intel Core i7-1355U Processor, 16GB, 512GB, 15.6 (39.62cm) FHD 120Hz Display","Dell Inspiron 3530 Thin & Light Laptop, 13th Gen Intel Core i3-1305U/8GB/512GB SSD/15.6 (39.62cm) 120Hz Refresh Rate on a FHD"] 

  const price=["₹43,490","₹39,490","₹43,490","₹29,990","46,990₹","₹72,990","₹63,980","₹37,990","₹68,790","₹39,490"]
  
  const imageUrl=imageno[parseInt(imagenosent)]
  


  const handleit=()=>{
    const toggleDIV=document.getElementById('toggleDiv')
    
    let parentDiv = document.createElement("div");
      parentDiv.style.width = "50vw";
      parentDiv.style.height = "40vh";
      parentDiv.style.display = "flex";
      parentDiv.style.flexDirection = "row"; // Default layout is row, you can change it to column if needed
      parentDiv.style.justifyContent = "space-between"; // Space between the text and image
      parentDiv.style.alignItems = "center"; // Center align items vertically
      //parentDiv.style.border = "1px solid black"; // Optional: Add a border for visibility
      parentDiv.style.backgroundColor = "white"; // Set the background color of the parent div to black
      parentDiv.style.marginLeft="6vw"
      parentDiv.style.marginTop='3.5vh'
      // Create the child div with text
      let textDiv = document.createElement("div");
      textDiv.textContent = `${description[descno]}`;
      textDiv.style.color = "black"; // Set the text color to white so it's visible on black background
      //textDiv.style.flex = "1"; // Ensure the text div takes up available space
      textDiv.style.fontFamily="monospace"
      textDiv.style.fontWeight="bolder"
      textDiv.style.fontSize="larger"

      let buttonAdd=document.createElement('button')
      buttonAdd.textContent="Buy Now"
      buttonAdd.style.display="block"
      buttonAdd.style.marginLeft="7vw"
      buttonAdd.style.height="5vh"
      buttonAdd.style.width="10vw"
      buttonAdd.style.marginTop="5vh"
      buttonAdd.style.backgroundColor="rgb(235, 208, 0)";
      buttonAdd.style.border="none"
      buttonAdd.style.fontFamily="monospace"
      buttonAdd.style.fontWeight="bolder"
      buttonAdd.style.borderRadius="20px"
      textDiv.appendChild(buttonAdd)

      let rem=document.createElement('button')
      rem.textContent="remove"
      rem.style.display="block"
      rem.style.marginLeft="7vw"
      rem.style.height="5vh"
      rem.style.width="10vw"
      rem.style.marginTop="3vh"
      rem.style.backgroundColor="white";
      rem.style.border="none"
      rem.style.fontFamily="monospace"
      rem.style.fontWeight="bolder"
      rem.style.borderRadius="20px"
      rem.style.border="2px black solid"
      rem.addEventListener('click',()=>{ toggleDIV.removeChild(parentDiv)})
      textDiv.appendChild(rem)
      

      // Cant buy now 
      // buttonAdd.addEventListener('click',()=>{
      //   const popup= document.createElement('div')
      //   popup.style.height='30vh'
      //   popup.style.width="40vw"
      //   popup.style.backgroundColor="red"
      //   popup.style.position="absolute"
      //   popup.style.zIndex='200'
      //   popup.textContent="Sorry! This feature under construction. Thanks for patience"
      //   document.getElementById('navbar').appendChild(popup)
      // })

      // Create the image element
      let imgElement = document.createElement("img");
      imgElement.src = `${imageUrl}`; // Replace this URL with the image URL you want to display
      imgElement.alt = "Placeholder Image";
      imgElement.style.width = "50%"; // Adjust image size (you can modify it as needed)
      imgElement.style.height = "auto"; // Maintain aspect ratio
      imgElement.style.paddingLeft='3vw'

      // Append the text div and image to the parent div
      parentDiv.appendChild(textDiv);
      parentDiv.appendChild(imgElement);

      toggleDIV.appendChild(parentDiv)
  }
  
  return (
    <div id='card'>
        
        <div id='img' style={{ backgroundImage: `url(${imageUrl})`, height:'21vh', width:'84%' , backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center',}} ></div>
        
        <div id='description'>{description[descno]}</div>
        <div id='price'>M.R.P {price[priceno]}</div>
        <div id='addtocartCont' onClick={handleit}><div>Add to cart</div> <div id='addtocart'></div></div>
    </div>
  )
}

export default Card



                                                                                    
 
