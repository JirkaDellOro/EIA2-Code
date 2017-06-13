namespace SendData {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let requestButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("request");
        requestButton.addEventListener("click", sendRequest);
    }

    function sendRequest(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "type url here", true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.readyState, xhr.responseType, xhr.status, xhr.statusText, xhr.response);
        }
    }









    function setupColorDivs(): void {
        let colors: string[] = ["red", "green", "blue"];
        let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        for (let i: number = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }

    function handleClickOnDiv(_event: Event): void {
        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
        console.log(style.backgroundColor);

    }
}