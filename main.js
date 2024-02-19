import { Sprite, Group } from "/modules/sprites.js";

/**
 * Get canvas context or throws
 * @returns {CanvasRenderingContext2D} 
 */
function getCanvasCtx() {
    return document.querySelector("#main-canvas").getContext("2d");
}



/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function step(ctx, dt) {
    clearCtx(ctx);
    ctx.clearRect(dt * 3 % ctx.canvas.width, dt * 3 % ctx.canvas.height, 32, 32);
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function clearCtx(ctx) {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    ctx.fillRect(0, 0, w, h);
}

/**
 * initializes code to be run
 * @param {Event} eventum 
 */
function init(eventum) {
    const ctx = getCanvasCtx();
    ctx.fillStyle = "green";
    requestAnimationFrame((dt) => {
        step(ctx, dt);
    });
}


onload = init;