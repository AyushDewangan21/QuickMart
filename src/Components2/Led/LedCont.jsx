import React from "react";
import "./LedCont.css";

const LedCont = ({ imagenosent, descno }) => {
  const imageNo = [
    "https://m.media-amazon.com/images/I/81nikv9C6lL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/714ccOfBThL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71JQ3kUrR9L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81u+lUSZRDL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/717oSOB4hCL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71tKQEE8ayL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71MwDnn-ZaL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71RMJHjJa0L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71qonh3XFPL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/712MJI-diwL._AC_UY327_FMwebp_QL65_.jpg",
  ];
  const desc = [
    "Samsung 138 cm (55 inches) D Series Crystal 4K Vivid Ultra HD Smart LED TV ₹42,490",
    "Acer 80 cm (32 inches) I Pro Series HD Ready Smart LED Google TV ₹10,499 ",
    "Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black) ₹14,990 ",
    "Xiaomi Smart TV A 80 cm (32) HD Ready Smart Google LED TV L32MA-AIN (Black), ₹11,999",
    "VW 80 cm (32 inches) Frameless Series HD Ready Android Smart LED TV VW32S (Black), ₹6,699 ",
    "VW 80 cm (32 inches) Playwall Frameless Series HD Ready Android Smart LED TV VW32F5 (Black),₹7,299 ",
    "Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32MA-FVIN (Black), ₹11,499",
    "VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV VW43F2 (Black), ₹13,499 ",
    "TCL 79.97 cm (32 inches) Metallic Bezel-Less S Series FHD Smart Android LED TV 32S5500AF (Black), ₹10,990 ",
    "Acer 139 cm (55 inches) Super Series 4K Ultra HD Smart QLED Google TV with Android 14 (Black) | MEMC | ALLM | VRR | ₹37,999 ",
  ];
  // const
  const imageUrl = imageNo[parseInt(imagenosent)];

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
    textDiv.textContent = `${desc[descno]}`;
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

    // Create the image element
    let imgElement = document.createElement("img");
    imgElement.src = `${imageUrl}`; // Replace this URL with the image URL you want to display
    imgElement.alt = "Placeholder Image";
    imgElement.style.width = "30%"; // Adjust image size (you can modify it as needed)
    imgElement.style.height = "auto"; // Maintain aspect ratio
    imgElement.style.paddingLeft = "3vw";

    // Append the text div and image to the parent div
    parentDiv.appendChild(textDiv);
    parentDiv.appendChild(imgElement);

    toggleDIV.appendChild(parentDiv);
  };
  return (
    <div id="Ledobject">
      <div id="Ledflexx">
        <div id="Ledobj1" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div id="Ledobj2">{desc[descno]}</div>
      </div>
      <div id="LedCart" onClick={handleit}>
        <div id="addtocartSamsung"></div>Add to cart
      </div>
    </div>
  );
};

export default LedCont;
