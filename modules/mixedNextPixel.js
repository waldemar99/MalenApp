export default function mixedNextPixel(ctx, a = 4, b = 1024) {
  setTimeout(() => {
    let pixelPos = 0;
    const startX = 0;
    const startY = 0;
    const areaSize = b;
    const imageData = ctx.getImageData(startX, startY, areaSize, areaSize);
    console.log(imageData);
    const data = imageData.data;
    console.log(data);
    const pixelavg = a;

    for (pixelPos; pixelPos < data.length; pixelPos += 4) {
      const redValue = Math.floor(
        (data[pixelPos + pixelavg] + // data[0 + 4] redValue vom nächsten Pixel
          data[pixelPos + 2 * pixelavg] + // data[0 + 8] redValue vom übernächstem Pixel
          data[pixelPos + 3 * pixelavg]) / // data[0 + 12] redValue vom  ....
          3
      );
      // console.log(redValue);
      // console.log(redValue);
      const greenValue = Math.floor(
        (data[pixelPos + 1 + pixelavg] + // data[0 + 1 + 4] greenValue vom nächsten Pixel
          data[pixelPos + 2 + 2 * pixelavg] + // data[0  + 8] greenValue ....
          data[pixelPos + 3 + 3 * pixelavg]) / // data[0 + 12]
          3
      );
      const blueValue = Math.floor(
        (data[pixelPos + 2 + 2 + pixelavg] + // ...
          data[pixelPos + 3 + 2 * pixelavg] +
          data[pixelPos + 4 + 3 * pixelavg]) /
          3
      );

      data[pixelPos] = redValue;
      data[pixelPos + 1] = greenValue;
      data[pixelPos + 2] = blueValue;
      data[pixelPos + 3] = 255; // Alpha value (make it fully opaque)
    }
    console.log(data);
    ctx.putImageData(imageData, startX, startY);
  }, 500);
}
