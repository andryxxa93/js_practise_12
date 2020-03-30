'use strict';

class Options {
    constructor(height = 50, width = 50, bg = 'blue', fontSize = 16, textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let e = document.createElement('div');
        document.body.appendChild(e);
        e.innerHTML = 'New Element';
        let param = `text-align: ${this.textAlign};
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        height: ${this.height}px;
        width: ${this.width}px;`
        e.style.cssText = param;
    }
}

let elem = new Options(100, 100, 'red', 20, 'center');
let eleme2 = new Options ();

elem.createDiv();
eleme2.createDiv();