// header ----------------------------------------------------------------------------------------
export function header () {
    let header = document.createElement("header");
    return header
};


// main ----------------------------------------------------------------------------------------
export function main () {
    let main = document.createElement("main");
    return main
};


// headlines ---------------------------------------------------------------------------------------
// h1
export function h1 (text) {
    let headline1 = document.createElement("h1");
    headline1.textContent = text;
    return headline1
};

// h2
export function h2 (text) {
    let headline2 = document.createElement("h2");
    headline2.textContent = text;
    return headline2
};


// sections / articles / div------------------------------------------------------------------------------
export function section (text) {
    let section = document.createElement("h2");
    section.textContent = text;
    return section
};

export function article (text) {
    let article = document.createElement("h2");
    article.textContent = text;
    return article
};

export function div (idName) {
    let div = document.createElement("div");
    div.id = idName;
    return div
};


// img ----------------------------------------------------------------------------------------------
export function img (src, alt) {
    let img = document.createElement("img");
    img.setAttribute("src", src)
    img.setAttribute("alt", alt)
    return img
};

// list elements and items --------------------------------------------------------------------------
export function ul () {
    let ul = document.createElement("ul");
    return ul
};


export function li () {
    let li = document.createElement("li");
    return li
};


// paragraph ----------------------------------------------------------------------------------------
export function p (text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
};