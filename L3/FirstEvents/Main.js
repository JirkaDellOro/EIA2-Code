var L3_FirstEvents;
(function (L3_FirstEvents) {
    let h1List = document.getElementsByTagName("h1");
    for (let i = 0; i < h1List.length; i++) {
        let h1 = h1List[i];
        h1.addEventListener("click", handleEvent);
    }
    function handleEvent(_event) {
        let h1 = _event.target;
        console.log(h1.textContent);
    }
})(L3_FirstEvents || (L3_FirstEvents = {}));
//# sourceMappingURL=Main.js.map