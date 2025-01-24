import "./Card.css";

const Lenovo = ({ imagenosent, priceno, descno }) => {
  const imageno = [
    "https://m.media-amazon.com/images/I/71-i11riVIL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81JUbPkcH4L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61bBTgE6PAL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71xfR660ZmL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61ZxrrWZLtL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/8133GVuhgwL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61UjxQh+aYL._AC_UL960_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/616fX5Yh00L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81zdgqyLRWL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71-i11riVIL._AC_UY327_FMwebp_QL65_.jpg",
  ];

  const description = [
    "Lenovo IdeaPad Slim 3 12th Gen Intel Core i5-12450H 14 (35.5cm) FHD 250 Nits Thin & Light Laptop ",
    "Lenovo Legion Pro 7 Intel Core i9-14900HX 16 (40.6cm) WQXGA IPS 500Nits 240Hz Gaming Laptop ",
    "Lenovo IdeaPad Pro 5 Intel Evo Core Ultra 9 185H Built-in AI 14 (35.5cm) 2.8K-OLED 400Nits 120Hz Laptop ",
    "Lenovo IdeaPad Slim 3 13th Gen Intel Core i7-13620H 15.6 (38.1cm) FHD IPS 300 Nits Thin & Light Laptop",
    "Lenovo IdeaPad Slim 3 13th Gen Intel Core i7-13620H 15 (38.1cm) FHD IPS 300 Nits Thin & Light Laptop ",
    "Lenovo LOQ 2024 AMD Ryzen 7 7435HS | NVIDIA RTX 4060 8GB (24GB RAM/512GB SSD/15.6 (39.6cm)/Windows 11",
    "Lenovo IdeaPad Slim 5 12th Gen Intel Core i5 12450H 14 (35.5cm) WUXGA+ IPS Laptop",
    "Lenovo LOQ 2024 AMD Ryzen 7 7435HS | NVIDIA RTX 4050 6GB (24GB RAM/512GB SSD/15.6 (39.6cm)/Windows 11",
    "Lenovo LOQ 2024 12th Gen Intel Core i5-12450HX 15.6 (39.6cm) 144Hz 300Nits FHD Gaming Laptop ",
    "Lenovo IdeaPad Slim 3 12th Gen Intel Core i5-12450H 14 (35.5cm) FHD 250 Nits Thin & Light Laptop ",
  ];

  const price = [
    "₹31,990",
    "₹2,99,990",
    "₹1,03,990 ",
    "₹60,990",
    "₹59,990",
    "₹89,490 ",
    "₹57,990",
    "₹80,490",
    "₹58,990",
    "₹48,490",
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
          width: "84%",
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

export default Lenovo;
