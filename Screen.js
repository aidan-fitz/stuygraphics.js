function Screen(width, height, bg = 0xffffff) {
  this.width = width;
  this.height = height;

  this.pixels = new Array(height);
  for (var y = 0; y < height; y++) {
    var row = new Array(width);
    row.fill(bg);
    this.pixels[y] = row;
  }

  function getPixel(x, y) {
    return this.pixels[y][x];
  }

  function setPixel(x, y, color) {
    this.pixels[y][x] = color;
  }
}
