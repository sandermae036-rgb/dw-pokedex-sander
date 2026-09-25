// imports ------------------------------------------------------------------------------------------------------
// html element making -------------------------------
import { article, header } from "../components/htmlElement.js";

import { main } from "../components/htmlElement.js";




// api fetching --------------------------
let offset = 0;

let limit = 48;

let pokemonArray = [];

async function getApi(offset) {
    try {

        const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit;

        const api = await fetch(apiUrl);

        const jsonApi = await api.json();

        pokemonArray = [...pokemonArray, ...jsonApi.results]

        mainInset(pokemonArray)
    } catch (error) {

    }
}

getApi(offset)

// html inserts -------------------------------------------------------------------------------------------------
const root = document.querySelector("#root");

root.innerHTML = ""

// header --------------------------------------------------------------------------------------------------
// make header and append in root 
root.append(header())
const headerElement = document.querySelector("header");

headerElement.innerHTML = `
<section class="top">
<div id="imgHolder">
    <img src="./img/Pokeball.svg" alt="pokeball">
</div>

<h1>
    Pokédex
</h1>
</section>



<section class="search">
    <input type="text" id="search" placeholder="Search for a pokemon">
</section>
`

// search and filter/sort ----------------------------------------------------------------------

search.addEventListener("keyup", searchForPokemon);













// main append ---------------------------------------------------------------------------------

root.append(main());
const mainDOM = document.querySelector("main");


// main / pokeindex ---------------------------------------------------------------------------
function mainInset(data) {

    mainDOM.innerHTML = ""

    function extractId(url) {
        return url.slice(0, -1).split("/").pop();
    };

    data.forEach(function () {

        // article with 
        mainDOM.innerHTML = `
        ${data.map(pokemon => `
                <a href="detail.html?id=${extractId(pokemon.url)}">
                    <article>
                        <p>#${extractId(pokemon.url).padStart(3, "0")}</p>

                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(pokemon.url)}.png" alt="${pokemon.name}" loading="lazy">
                        
                        <h2>${pokemon.name}</h2>

                    </article>
                </a>
            `).join("")}
            `;
    });

    let fithLastElement = document.querySelector("main a:nth-last-of-type(5)");
    console.log(fithLastElement);


    observer.observe(fithLastElement);


}



// observer for infinite scroll ------------------------------------------------------------------------------------
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            offset = offset + 48;
            getApi(offset)

        }
    });
});



// search function ------------------------------------------------------------------------------------------------------
function searchForPokemon(event) {
    console.log("kfw");

    // find every h2 inside article inside an anchor inside main
    const pokemonH2 = document.querySelectorAll("main a article h2");

    // for each h2 textcontent
    pokemonH2.forEach(function (h2) {



        let search = document.querySelector(".search #search").value;
        console.log(search);

        let h2TextContent = h2.textContent
        console.log(h2TextContent);

        console.log(h2TextContent[0]);


        // if the value inside the input calling this function is not the same as the text content
        if (search == "") {
            console.log("nothing")
            h2.parentElement.parentElement.classList.remove("displayNone")

        } else if (search == h2.textContent) {
            h2.parentElement.parentElement.classList.remove("displayNone")

        } else if (search != h2.textContent) {
            h2.parentElement.parentElement.classList.add("displayNone")

        }



        // give class display none

    });

}