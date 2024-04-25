export default function getPixelInfo(x, y, canvas) {
  if (x.__proto__ === Number.prototype) {
    const pixelData = canvas
      .getContext("2d", { willReadFrequently: true })
      .getImageData(x, y, 1, 1).data;
    const pixelColor = `rgb(${pixelData[0]},${pixelData[1]},${pixelData[2]},${pixelData[3]})`;
    return pixelData, pixelColor;
  }
}
