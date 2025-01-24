import "./Card.css";

const Acer = ({ imagenosent, priceno, descno }) => {
  const imageno = [
    "https://m.media-amazon.com/images/I/619G-irw05L._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/517m2WrmJxL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61fDHkQ6MqL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61fDHkQ6MqL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/517m2WrmJxL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61keRkmSGBL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/618YKR-dBgL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71TInaELMxL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61qlqvTsocL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_FMwebp_QL65_.jpg",
  ];
  const description = [
    "Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop ",
    "Acer Aspire Lite 12th Gen Intel Core i5-12450H Thin and Light Laptop ",
    "Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop ",
    "Acer Aspire Lite AMD Ryzen 5-5625U Premium Thin and Light Laptop ",
    "Acer Aspire Lite 12th Gen Intel Core i5-12450H Thin and Light Laptop ",
    "Acer Aspire Lite 12th Gen Intel Core i5-12450H Thin and Light Laptop ",
    "Acer Chromebook CB315-4H Intel Celeron N4500 ",
    "Acer Aspire 3 Intel Core i3-N305 Processor Laptop ",
    "Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop ",
    "Acer Aspire Lite 12th Gen Intel Core i3-1215U Premium Metal Laptop ",
  ];
  const price = [
    "₹31,990 ",
    "₹46,990",
    "₹31,990",
    "₹32,990",
    "₹46,990",
    "₹27,990",
    "₹17,480",
    "₹24,980",
    "₹21,990",
    "₹29,990",
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
    <div id="card" typeof="button">
      <div
        id="img"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "22vh",
          width: "75%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div
        data-unique-id={`${imagenosent}`}
        id="description"
        className={`description${imagenosent}`}
      >
        {description[descno]}
      </div>
      <div id="price">M.R.P {price[priceno]}</div>
      <div id="addtocartCont" onClick={handleit}>
        <div>Add to cart</div> <div id="addtocart"></div>
      </div>
    </div>
  );
};

export default Acer;
