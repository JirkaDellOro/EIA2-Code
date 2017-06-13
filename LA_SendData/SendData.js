var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let requestButton = document.getElementById("request");
        requestButton.addEventListener("click", sendRequest);
    }
    function sendRequest() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "type url here", true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.readyState, xhr.responseType, xhr.status, xhr.statusText, xhr.response);
        }
    }
    function setupColorDivs() {
        let colors = ["red", "green", "blue"];
        let divs = document.getElementsByTagName("div");
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
    function handleClickOnDiv(_event) {
        let style = _event.target.style;
        console.log(style.backgroundColor);
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=SendData.js.map