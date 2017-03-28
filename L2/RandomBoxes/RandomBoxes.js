let n = 20;
let size = 40;
for (let i = 0; i < n; i++) {
    let c = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    let x = Math.random() * 1200;
    let y = Math.random() * 800;
    placeDiv(c, x, y, size, size);
    console.log(c);
}
function placeDiv(_color, _x, _y, _width, _height) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    let s = div.style;
    s.borderStyle = "solid";
    s.borderColor = "#000000";
    s.borderWidth = "1px";
    s.position = "absolute";
    s.display = "inline-block";
    s.backgroundColor = _color;
    s.width = _width + "px";
    s.height = _height + "px";
    s.left = _x + "px";
    s.top = _y + "px";
}
//# sourceMappingURL=RandomBoxes.js.map