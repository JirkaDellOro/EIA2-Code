namespace L3_FirstEvents {
    let h1List: NodeListOf<HTMLHeadingElement> = document.getElementsByTagName("h1");

    for (let i: number = 0; i < h1List.length; i++) {
        let h1: HTMLHeadingElement = h1List[i];
        h1.addEventListener("click", handleEvent);
        //document.addEventListener("mousemove", handleEvent);
    }

    function handleEvent(_event: Event): void {
        let h1: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
        console.log(h1.textContent);
    }
}