
function getCanvasCtx() {
    return document.querySelector('canvas').getContext();
}

function main(ev) {
    console.log("Initialize");
    const ctx = getCanvasCtx();

}

document.onload(main);