export function match(param) {
    console.log(param);
    return /\.(png|jpg|gif|webp|svg)\/?$/.test(param);
}

console.log(match("computer-graphics/triangle.png"));