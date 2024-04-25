import getPixelInfo from "./getPixelInfo.js";

// Image Instance erzeugen
const myImage = new Image();
const myImage64 = new Image();
myImage.src = "./dalle256.png";
myImage64.src = "./dalle256.base64";
myImage.style.width = "300px";
myImage.style.height = "300px";

// Function to get pixel information at a specific coordinate inside the canvas
const myCanvas = document.getElementById("canvas");
function resizeCanvas() {
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;
}

["resize", "load"].forEach((item) =>
  window.addEventListener(item, resizeCanvas)
);

["resize", "load"].forEach((item) =>
  window.addEventListener(item, () => {
    myCanvas.getContext("2d").drawImage(myImage, 0, 0);
  })
);

console.log(getPixelInfo(100, 100, myCanvas));
console.log(getPixelInfo(10, 10, myCanvas));

//  Function to set pixel colour
function setPixelColour() {
  const setPixel = myCanvas.getContext("2d").set;
}

document.addEventListener("click", (e) => {
  const pixelData = canvas
    .getContext("2d", { willReadFrequently: true })
    .getImageData(e.pageX, e.pageY, 1, 1).data;
  const pixelColor = `rgb(${pixelData[0]},${pixelData[1]},${pixelData[2]},${pixelData[3]})`;
  console.log(pixelData, pixelColor);
});
