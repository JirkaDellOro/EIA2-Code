var L6_Interface;
(function (L6_Interface) {
    let crc2;
    let squares = [];
    let n = 30;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            let s = { x: 0, y: 0, size: 0, color: "#0000ff" }; // default-values
            s["x"] = Math.random() * 200; // mögliche Schreibweise, hier sind variable Schlüssel möglich
            s.y = Math.random() * 200; // andere mögliche Schreibweise mit literalem Schlüssel
            s.size = Math.random() * 30 + 10;
            s.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            squares[i] = s;
        }
        console.log(squares);
        window.setTimeout(animate, 20);
    }
    function animate() {
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            let s = squares[i];
            s.x += Math.random() * 4 - 2;
            s.y += Math.random() * 4 - 2;
            drawSquare(s);
        }
        window.setTimeout(animate, 20);
    }
    function drawSquare(_s) {
        crc2.fillStyle = _s.color;
        crc2.fillRect(_s.x, _s.y, _s.size, _s.size);
    }
})(L6_Interface || (L6_Interface = {}));
//# sourceMappingURL=Interface.js.map