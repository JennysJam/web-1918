/**
 * Get canvas context or throws
 * @returns {CanvasRenderingContext2D} 
 */
function getCanvasCtx() {
    return document.querySelector("#main-canvas").getContext("2d");
}

/**
 * A class representing a logical grouping of sprites.
 */
class Group {
    /**
     * 
     * @param {string} name Name of group (primarily for debugging)
     * @param  {...Sprite} sprites  List of sprites to append 
     */
    constructor(name, ...sprites) {
        this.name = name;
        this.sprites = sprites;
    }

    /**
     * Get display name
     * @returns {string} 
     */
    toString() {
        return `[Group '${this.name}' : ${this.sprites.length} Sprites]`;
    }

    addSprite(sprite) {
        this.sprites.push(sprite);
    }

    removeSprite(sprite) {
        let index = this.sprites.indexOf(sprite);
        if (index === -1) {
            console.warn(`could not remove ${sprite}: not in array.`);
        }
        this.sprites.splice(index, 1);
        sprite.removeGroup(this);
    }

    /**
     * 
     * @param {number} dt 
     */
    onStep(dt) {
        for (const sprite of this.sprites) {
            sprite.onStep(dt);
        }
    }
}

class Sprite {
    /**
     * 
     * @param {{x: number, y: number}} pos   screen position to spawn on 
     * @param  {...Group} groups list of Groups
     */
    constructor(pos, ...groups) {
        this.pos = pos;
        this.groups = groups;
    }

    /**
     * Method that implements logical time step function
     * @param {number} dt time elapsed 
     */
    onStep(dt) {

    }


    /**
     * Remove Sprite from group
     * @param {Group} group 
     * @param {boolean} _remove_group also remove sprite from group. This is an internal configuration item
     * that user code is not expected to call.
     */
    removeGroup(group, _remove_group = true) {
        let index = this.groups.indexOf(group);
        if (index === -1) {
            console.warn(`Could not find group ${group} in sprite.`)
        }
        this.splice(index, 1);
        if (_remove_group) {
            group.removeSprite(this);
        }
    }
};


function step() {

}

/**
 * Sets up mainc code load
 * @param {Event} eventum 
 */
function main(eventum) {
    const ctx = getCanvasCtx();

    requestAnimationFrame(step);
}


document.onload(main);