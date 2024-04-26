import getPixelInfo from "./getPixelInfo.js";
import mixedNextPixel from "./modules/mixedNextPixel.js";
import deleteOnClick from "./modules/deleteOnClick.js";
console.log(deleteOnClick);

// myImage imageInstance
const myImage = new Image();
myImage.src = "./dalle256.png";
myImage.style.width = "300px";
myImage.style.height = "300px";

// Function to get pixel information at a specific coordinate inside the canvas
const myCanvas = document.getElementById("canvas");
function resizeCanvas() {
  myCanvas.width = 1024;
  myCanvas.height = 1024;
}
myCanvas.width = 1024;
myCanvas.height = 1024;

// ["resize", "load"].forEach((item) =>
//   window.addEventListener(item, resizeCanvas)

window.addEventListener("load", () => {
  myCanvas.getContext("2d").drawImage(myImage, 0, 0);
});

console.log(getPixelInfo(100, 100, myCanvas));
console.log(getPixelInfo(10, 10, myCanvas));

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });

mixedNextPixel(ctx, 2, 400); // mögliche zusätzliche Parameter pixelAvg und areaSize

myCanvas.addEventListener("click", (e) => {
  deleteOnClick(e, ctx, 10); // löscht einen definierten Bereich um den Clickpunkt
});
