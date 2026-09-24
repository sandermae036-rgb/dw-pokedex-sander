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
let offset = 0;

let limit = 48;

// pokemonArray = [];

const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit;

async function getApi(url) {
    try {
        const api = await fetch(url);

        const jsonApi = await api.json();

        mainInset(jsonApi.results)
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

headerElement.innerHTML = `
    <div id="imgHolder">
        <img src="./img/Pokeball.svg" alt="pokeball">
    </div>

    <h1>
        Pokédex
    </h1>
`




// search and filter/sort --------------------------------------------------



// main / pokeindex ---------------------------------------------------------------------------
function mainInset(data) {
    root.append(main());
    const mainDOM = document.querySelector("main");

    console.log(data);

    function extractId(url) {
        return url.slice(0, -1).split("/").pop();
    };

    data.forEach(function (pokemon) {

        // find the current pokemons url
        let url = pokemon.url;

        let id = url.slice(0, -1).split("/").pop();

        let pokemonfrontImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";

        // article with 
        mainDOM.innerHTML = `
        ${data.map(pokemon => `
                <a href="detail.html?id=${extractId(pokemon.url)}">
                    <article>
                        <p>#${extractId(pokemon.url).padStart(3, "0")}</p>

                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(pokemon.url)}.png">
                        
                        <h2>
                            ${pokemon.name}
                        </h2>

                    </article>
                </a>
            `).join("")}
            `;
    });

    let fithLastElement = document.querySelector("main a:nth-last-of-type(5)");
    console.log(fithLastElement);

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                console.log("intersecting")
            }
        });
    });

    observer.observe(fithLastElement);


}