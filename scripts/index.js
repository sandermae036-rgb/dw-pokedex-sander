// imports ------------------------------------------------------------------------------------------------------
// html element making -------------------------------
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




// api fetching --------------------------
const apiUrl = "https://pokeapi.co/api/v2/pokemon";


async function getApi(url) {
    try {
        const api = await fetch(url);

        const jsonApi = await api.json();

        mainInset(jsonApi)
    } catch (error) {

    }
}

getApi(apiUrl)



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
function mainInset (data) {
    root.append(main());
    const mainDOM = document.querySelector("main");

    console.log(data);


            function extractId (url) {
            return url.slice(0, -1).split("/").pop();
            };

    data.results.forEach(function (pokemon) {
        
        // find the current pokemons url
        let url = pokemon.url;

        let name = pokemon.name;

        let id = url.slice(0, -1).split("/").pop();

        let pokemonfrontImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";

        // article with 
        mainDOM.innerHTML = `
        ${data.results.map(pokemon => `
                <article>
                    <p>#${extractId(pokemon.url)}</p>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(pokemon.url)}.png">
                    
                    <h2>
                        ${pokemon.name}
                    </h2>

                </article>
            `).join("")}
            `;
    });        
    
}