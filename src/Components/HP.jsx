import "./Card.css";

const Card = ({ imagenosent, priceno, descno }) => {
  const imageno = [
    "https://m.media-amazon.com/images/I/71scOAwoExL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71bRz-UEILL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71J+OBadJCL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71k9Z+agn8L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71Z8mjuvGmL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71no5vwq-1L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71NfES5o1WL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71GUY4gG36L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71phX67q6zL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71scOAwoExL._AC_UY327_FMwebp_QL65_.jpg",
  ];

  const description = [
    "HP Laptop 15, Intel Core Ultra 5 125H, 15.6-inch (39.6 cm), FHD, 16GB DDR5, 1TB SSD, Intel Graphics",
    "HP 15s, 12th Gen Intel Core i3-1215U, 8GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.69kg) Anti-glare",
    "HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg)",
    "HP 15, 12th Gen Intel Core i5-1235U, 16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.69kg), Anti-Glare, 15.6-inch(39.6cm) FHD Laptop",
    "  HP Laptop 250R G9 Intel Core i3 13th Gen 1315U - (8GB/512GB SSD/Intel UHD Graphics) Thin and Light Business Laptop)",
    "HP Pavilion, 12th Gen Intel Core i5-1235U, 16GB DDR4, 512GB SSD , BrightView, 14-inch(35.6cm) FHD Laptop",
    "HP Laptop 255 G9 (2024), AMD Ryzen 5 5625U Hexa Core - (8GB/512GB SSD/AMD Radeon Graphics) Thin and Light Business Laptop/15.6",
    "  HP 15s,12th Gen Intel Core i3-1215U, 8GB DDR4, 256GB SSD, Anti-Glare, Micro-Edge, 15.6-inch(39.6cm) FHD Laptop, Intel UHD Graphics",
    "  HP 15s,12th Gen Intel Core i3-1215U, 8GB DDR4, 256GB SSD, Anti-Glare, Micro-Edge, 15.6-inch(39.6cm) FHD Laptop",
    "  HP 15S AMD Ryzen 5000 (16GB Ram/512GB SSD/Fhd/Windows 11/Ms Office 21/Backlit Keyboard/ 15.6 (39.6 Cm)/Silver/2.21 Kg) Eq2305Au/Eq2182Au Laptop",
    "  HP Laptop 15, Intel Core Ultra 5 125H, 15.6-inch (39.6 cm), FHD, 16GB DDR5, 1TB SSD, Intel Graphics, 1080p FHD Camera",
  ];

  const price = [
    "₹69,990",
    "₹35,990",
    "₹53,990",
    "₹48,990",
    "₹31,490",
    "₹56,240",
    "₹29,930",
    "₹31,990",
    "₹41,390",
    "₹69,990",
  ];

  const imageUrl = imageno[parseInt(imagenosent)];

  const handleit = () => {
    const toggleDIV = document.getElementById("toggleDiv");

    let parentDiv = document.createElement("div");
    parentDiv.style.width = "50vw";
    parentDiv.style.height = "40vh";
    parentDiv.style.display = "flex";
    parentDiv.style.flexDirection = "row"; // Default layout is row, you can change it to column if needed
    parentDiv.style.justifyContent = "space-between"; // Space between the text and image
    parentDiv.style.alignItems = "center"; // Center align items vertically
    //parentDiv.style.border = "1px solid black"; // Optional: Add a border for visibility
    parentDiv.style.backgroundColor = "white"; // Set the background color of the parent div to black
    parentDiv.style.marginLeft = "6vw";
    parentDiv.style.marginTop = "3.5vh";
    // Create the child div with text
    let textDiv = document.createElement("div");
    textDiv.textContent = `${description[descno]}`;
    textDiv.style.color = "black"; // Set the text color to white so it's visible on black background
    //textDiv.style.flex = "1"; // Ensure the text div takes up available space
    textDiv.style.fontFamily = "monospace";
    textDiv.style.fontWeight = "bolder";
    textDiv.style.fontSize = "larger";

    let buttonAdd = document.createElement("button");
    buttonAdd.textContent = "Buy Now";
    buttonAdd.style.display = "block";
    buttonAdd.style.marginLeft = "7vw";
    buttonAdd.style.height = "5vh";
    buttonAdd.style.width = "10vw";
    buttonAdd.style.marginTop = "5vh";
    buttonAdd.style.backgroundColor = "rgb(235, 208, 0)";
    buttonAdd.style.border = "none";
    buttonAdd.style.fontFamily = "monospace";
    buttonAdd.style.fontWeight = "bolder";
    buttonAdd.style.borderRadius = "20px";
    textDiv.appendChild(buttonAdd);

    let rem = document.createElement("button");
    rem.textContent = "remove";
    rem.style.display = "block";
    rem.style.marginLeft = "7vw";
    rem.style.height = "5vh";
    rem.style.width = "10vw";
    rem.style.marginTop = "3vh";
    rem.style.backgroundColor = "white";
    rem.style.border = "none";
    rem.style.fontFamily = "monospace";
    rem.style.fontWeight = "bolder";
    rem.style.borderRadius = "20px";
    rem.style.border = "2px black solid";
    rem.addEventListener("click", () => {
      toggleDIV.removeChild(parentDiv);
    });
    textDiv.appendChild(rem);

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
    imgElement.style.paddingLeft = "3vw";

    // Append the text div and image to the parent div
    parentDiv.appendChild(textDiv);
    parentDiv.appendChild(imgElement);

    toggleDIV.appendChild(parentDiv);
  };

  return (
    <div id="card">
      <div
        id="img"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "21vh",
          width: "70%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div id="description">{description[descno]}</div>
      <div id="price">M.R.P {price[priceno]}</div>
      <div id="addtocartCont" onClick={handleit}>
        <div>Add to cart</div> <div id="addtocart"></div>
      </div>
    </div>
  );
};

export default Card;
