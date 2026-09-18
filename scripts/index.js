// imports ------------------------------------------------------------------------------------------------------
import { header } from "../components/htmlElement.js";

import { main } from "../components/htmlElement.js";

import { h1 } from "../components/htmlElement.js";

import { h2 } from "../components/htmlElement.js";

import { p } from "../components/htmlElement.js";

import { img } from "../components/htmlElement.js";

import { article } from "../components/htmlElement.js";

import { section } from "../components/htmlElement.js";

import { div } from "../components/htmlElement.js";

import { ul } from "../components/htmlElement.js";

import { li } from "../components/htmlElement.js";










// html inserts -------------------------------------------------------------------------------------------------
const root = document.querySelector("#root");

// header ------------------------------------------------------------------------------
// make header and append in root 
root.append(header())
const headerElement = document.querySelector("header");


// make div and append in header
headerElement.append(div("imgHolder"));


const imgDiv = document.querySelector("#imgHolder");



// make an img with pokeball img as src and append in div 
imgDiv.append(img("../img/Pokeball.png", "pokeball"))



// make an h1 with pok&eacute;dex txt
headerElement.append(h1("Pokédex"))



// search --------------------------------------------------



// main / pokeindex ---------------------------------------------------------------------------
root.append(main())
const mainDOM = document.querySelector("main");

