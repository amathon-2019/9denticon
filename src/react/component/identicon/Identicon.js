export class Identicon {
  constructor(canvas, width, str) {
    canvas.width = width;
    canvas.height = width;

    this.canvas = canvas;
    this.width = width;
    this.s = width / 100; // Scale; baseline grid is 100x100

    this.hash = strToBinArr(str);
    this.position = 0;

    paper.setup(this.canvas);

    // Fill white background
    let background = new paper.Shape.Rectangle(0, 0, width, width);
    background.fillColor = 'white';
  }

  getParam(bits) {
    let bitArr = this.hash.slice(this.position, this.position + bits);
    this.position += bits;
    return binArrToInt(bitArr);
  }

  tree() {
    let trunkFrom = new paper.Point(42 * this.s, 100 * this.s);
    let trunkTo = new paper.Point(58 * this.s, 80 * this.s);
    let trunk = new paper.Shape.Rectangle(trunkFrom, trunkTo);

    let trunkH = ((this.getParam(4) / 16) * 40) / 360;
    let trunkS = (this.getParam(2) / 4) * 0.1 + 0.9;
    let trunkL = 0.15;

    let trunkRGB = hslToRgb(trunkH, trunkS, trunkL);

    trunk.fillColor = `rgba(${trunkRGB[0]}, ${trunkRGB[1]}, ${
      trunkRGB[2]
    }, 0.5)`;

    let baseY = 75 * this.s;
    let cellSize = 10;

    for (let level = 0; level < 6; level++) {
      let numLeaves = this.getParam(2) + (6 - level);

      let baseX = ((100 - cellSize * numLeaves + cellSize) / 2) * this.s;

      let shapeType = this.getParam(2);

      let r = Math.floor((this.getParam(4) / 16) * 128);
      let g = Math.floor((this.getParam(4) / 16) * 128) + 128;
      let b = Math.floor((this.getParam(4) / 16) * 164);

      let h = ((this.getParam(4) / 16) * 150 + 25) / 360;
      let s = 0.5;
      let l = 0.5;

      let rgb = hslToRgb(h, s, l);
      console.log(rgb);
      r = rgb[0];
      g = rgb[1];
      b = rgb[2];

      let shapeSize = 0.8;

      for (let i = 0; i < numLeaves; i++) {
        let leafCenter = new paper.Point(baseX, baseY);
        let leaf;

        if (shapeType == 0) {
          leaf = new paper.Shape.Circle(
            leafCenter,
            cellSize * this.s * shapeSize * 0.9
          );
        } else if (shapeType == 1) {
          leaf = new paper.Path.RegularPolygon(
            leafCenter,
            6,
            cellSize * this.s * shapeSize
          );
        } else if (shapeType == 2) {
          leaf = new paper.Path.RegularPolygon(
            leafCenter.add(new paper.Point(0, 1 * this.s)),
            3,
            cellSize * this.s * shapeSize * 1.1
          );
        } else {
          leaf = new paper.Path.RegularPolygon(
            leafCenter,
            5,
            cellSize * this.s * shapeSize
          );
        }

        leaf.fillColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
        baseX += cellSize * this.s;
      }

      baseY -= 12 * this.s;
    }

    paper.view.draw();
  }

  circles() {
    var keyPoints = [
      [-50, -50],
      [50, -50],
      [150, -50],
      [0, 0],
      [50, 0],
      [100, 0],
      [-50, 50],
      [0, 50],
      [50, 50],
      [100, 50],
      [150, 50],
      [0, 100],
      [50, 100],
      [100, 100],
      [-50, 150],
      [50, 150],
      [150, 150]
    ];

    for (let keyPoint of keyPoints) {
      let draw = this.getParam(1);

      if (1) {
        let point = new paper.Point(keyPoint[0] * this.s, keyPoint[1] * this.s);
        // let point = new paper.Point(100 * 5, 100 * 5);

        let radius = (this.getParam(4) / 16) * 75 + 5;
        radius *= this.s;

        let circle = new paper.Shape.Circle(point, radius);

        let r = Math.floor((this.getParam(4) / 16) * 256);
        let g = Math.floor((this.getParam(4) / 16) * 256);
        let b = Math.floor((this.getParam(4) / 16) * 256);

        let o = (this.getParam(4) / 16) * 0.7 + 0.1;

        circle.fillColor = `rgba(${r}, ${g}, ${b}, 0.3)`;
        // circle.fillColor = '#dfdfdf50'
      }
    }
  }
}

var binArrToInt = function(arr) {
  let pos = 0;
  let res = 0;

  for (let b of arr) {
    res += b << pos;
    pos += 1;
  }

  return res;
};

var strToBinArr = function(string) {
  let hashed = sha1.array(string);
  // let hashed = sha256(string);
  let arr = Array();
  console.log(hashed);

  for (let i of hashed) {
    console.log(i);
    let byte = i;
    for (let j = 0; j < 8; j++) {
      let bit = (byte >> j) & 1;
      arr.push(bit);
    }
  }

  return arr
    .concat(arr)
    .concat(arr)
    .concat(arr);
};

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
