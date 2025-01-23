import React from 'react'
import './EarpodCont.css'


const Samsung = ({imagenosent,descno}) => {
 
  const imageNo=["https://m.media-amazon.com/images/I/61oCISLE+PL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/713Lr2oNWaL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/71RFdy6y6LL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/614gbl-O98L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/51raakZN9fL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61oh4tmrL1L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/614hH1Cot3L._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/41kK3roaPGL._AC_UY327_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61LKTD-YnrL._AC_UY327_FMwebp_QL65_.jpg"]
  const desc=["Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, ₹12,764 ","boAt Airdopes 91 Prime, 45HRS Battery, 13mm Drivers, Metallic Finish, Low Latency. ₹699","boAt Airdopes 141, Low Latency, ENx Tech, 42HRS Battery, Fast Charge, ₹799 ","boAt Airdopes 311 Pro, 50HRS Battery, Fast Charge, Dual Mics ENx Tech,₹899","OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers,₹1,599","OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, ₹1,599 ","Redmi Buds 5C Bluetooth TWS in Ear Earbuds, Up to 40Db Hybrid Noise Cancellation, ₹1,565","Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, ₹798","Boult Newly Launched K10 Truly Wireless in Ear Ear Buds with 50H Playtime, ₹799","realme Buds T110 Bluetooth Truly Wireless in Ear Earbuds with mic,₹1,099 "]
  // const 
  const imageUrl=imageNo[parseInt(imagenosent)]

  // let [totalProd, settotalProd] = useState(0);
  //         useEffect(() => {
  //           document.getElementById('toggleDiv').style.display='none'
  //           const toggleDiv = document.getElementById('toggleDiv');
  //          const observer = new MutationObserver(() => {
  //          let c = toggleDiv.childElementCount;
  //          settotalProd(c); // Update the total product count based on current child count
  //          });
        
  //         observer.observe(toggleDiv, {
  //         childList: true, // Watch for addition or removal of child elements
  //         subtree: true,   // Watch the entire subtree (if you want to track changes within nested elements as well)
  //         });
  //         let c = toggleDiv.childElementCount;
  //         settotalProd(c);
        
        
  //           return () => {
  //           };
  //         }, []);

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
        <div id='SamsungCart'onClick={handleit} ><div id='addtocartSamsung'></div>Add to cart</div>
        

    </div>
  )
}

export default Samsung