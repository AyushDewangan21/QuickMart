import React from 'react'
import './Samsung.css'


const Samsung = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/8189mzscM6L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71goZuIha-L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71OXmy3NMCL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71r4P+34FuL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71ez69tPl4L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71RVuBs3q9L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61+g6KrDXdL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"]
  const desc=["Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage) ₹71,999","Samsung Galaxy M35 5G (Daybreak Blue,8GB RAM,256GB Storage)| ₹19,499 ","Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage) ₹71,999","Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage) ₹71,999","Samsung Galaxy S23 Ultra 5G AI Smartphone (Cream, 12GB, 256GB Storage) ₹71,999 ","Samsung Galaxy S24 5G AI Smartphone (Onyx Black, 8GB, 256GB Storage) ₹55,450","Samsung Galaxy S24 5G AI Smartphone (Amber Yellow, 8GB, 128GB Storage) ₹50,999","Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage) ₹1,39,999","Samsung S24 5G Marble Grey 8GB 256GB ₹54,900","Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)_Without Offer  ₹1,03,990 "]
  // const 
  const imageUrl=imageNo[parseInt(imagenosent)]

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
      textDiv.textContent = `${desc[descno]}`;
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
      

      // Create the image element
      let imgElement = document.createElement("img");
      imgElement.src = `${imageUrl}`; // Replace this URL with the image URL you want to display
      imgElement.alt = "Placeholder Image";
      imgElement.style.width = "30%"; // Adjust image size (you can modify it as needed)
      imgElement.style.height = "auto"; // Maintain aspect ratio
      imgElement.style.paddingLeft='3vw'

      // Append the text div and image to the parent div
      parentDiv.appendChild(textDiv);
      parentDiv.appendChild(imgElement);

      toggleDIV.appendChild(parentDiv)
  }


  return (
    <div id='object'>
        <div id='flexx'>
        <div id='obj1' style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div id='obj2'>{desc[descno]}</div>
        </div>
        <div id='SamsungCart' onClick={handleit}><div id='addtocartSamsung'></div>Add to cart</div>
        

    </div>
  )
}

export default Samsung
