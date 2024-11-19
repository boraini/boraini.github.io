// adapted from https://github.com/Gustu/string-to-color

const MIXED_WEIGHT = 0.75;
const TEXT_WEIGHT = 0.25;
const SEED = 16777215;
const FACTOR = 49979693;

function mixColors(colors: number[][]) {
  var mixed = [0, 0, 0];
  colors.forEach(function(value) {
    for (var i = 0; i < 3; i++) mixed[i] += value[i];
  });
  return [mixed[0] / colors.length, mixed[1] / colors.length, mixed[2] / colors.length];
}

function ensureLength(str: string, length: number, fill: string = " ") {
    if (str.length < length) return str.padStart(length, fill);
    if (str.length > length) return str.substring(0, length);

    return str;
}

function hexRgb(str: string) {
    str = ensureLength(str, 6, "0");
    console.log(str);

    return [
        parseInt(str.substring(0, 2), 16),
        parseInt(str.substring(2, 4), 16),
        parseInt(str.substring(4, 6), 16)
    ]
}

function rgbHex([r, g, b] : number[]) {
    console.log(r);
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    const strR = ensureLength(r.toString(16), 2, "0");
    const strG = ensureLength(g.toString(16), 2, "0");
    const strB = ensureLength(b.toString(16), 2, "0");

    return strR + strG + strB;
}

export function stringToColor(text: string) {
  if (text.length == 0) return "#000000";
  var mixed;
  var b = 1;
  var d = 0;
  var f = 1;
  if (text.length > 0) {
    for (var i = 0; i < text.length; i++)
      text[i].charCodeAt(0) > d && (d = text[i].charCodeAt(0)),
        (f = SEED / d),
        (b = (b + text[i].charCodeAt(0) * f * FACTOR) % SEED);
  }
  var hex = ((b * text.length) % SEED).toString(16);
  hex = hex.padStart(6, "0");
  var rgb = hexRgb(hex);
  console.log(text, rgb);
  return rgbHex(rgb);
}

export function getForegroundColor(bkg: string, opt1: string = "000000", opt2: string = "ffffff") {
    const [ r, g, b ] = hexRgb(bkg);
    const [ r1, g1, b1 ] = hexRgb(opt1);
    const [ r2, g2, b2 ] = hexRgb(opt2);

    const d1r = r - r1;
    const d1g = g - g1;
    const d1b = b - b1;

    const d2r = r - r2;
    const d2g = g - g2;
    const d2b = b - b2;

    if (d1r * d1r + d1g * d1g + d1b * d1b > d2r * d2r + d2g * d2g + d2b * d2b) {
        return opt1;
    } else {
        return opt2;
    }
}

export function withForeground(bkg: string, opt1?: string, opt2?: string) {
    console.log("called");
    return ["#" + bkg, "#" + getForegroundColor(bkg, opt1, opt2)];
}
