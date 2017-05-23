let n: number = 20;
let size: number = 40;
for (let i: number = 0; i < n; i++) {
    let c: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    let x: number = Math.random() * 1200;
    let y: number = Math.random() * 800;
    placeDiv(c, x, y, size, size);
    console.log(c);
}

function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);
    let s: CSSStyleDeclaration = div.style;
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
