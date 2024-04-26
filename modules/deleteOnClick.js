export default function deleteOnClick(e, ctx, areaSizepara) {
  // console.log(e);
  // console.log(areaSizepara);
  // console.log(ctx);
  console.log("1");

  console.log(e.pageX);
  console.log(e.pageY);
  console.log(e.clientX);
  console.log(e.clientY);
  // Define the area to modify
  const startX = e.pageX - 20; // Start "20" pixels to the left of the click
  const startY = e.pageY - 20; // Start "20" pixels above the click
  const areaSize = areaSizepara; // The area to cover is areaSizepara pixels

  // Get the image data from the surrounding area
  const imageData = ctx.getImageData(startX, startY, areaSize, areaSize);
  const data = imageData.data;

  console.log(data);
  // Loop through all pixels and change them to white
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255; // Red value
    data[i + 1] = 255; // Green value
    data[i + 2] = 255; // Blue value
    data[i + 3] = 255; // Alpha value (make it fully opaque)
  }

  // Put the modified image data back to the canvas

  ctx.putImageData(imageData, startX, startY);
}
