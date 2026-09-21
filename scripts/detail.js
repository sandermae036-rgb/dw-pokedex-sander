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



// url search 

const api = "https://pokeapi.co/api/v2/pokemon/"

async function urlAndFetch(api) {
    try {
        let idOfUrl = new URLSearchParams(location.search).get("id");
        console.log(idOfUrl);

        const fetchData = await fetch(api + idOfUrl);
        console.log(fetchData)

        const jsonConvert = await fetchData.json();
        console.log(jsonConvert);

        insertHTML(jsonConvert);

    } catch (error) {

    }
}

urlAndFetch(api)


function insertHTML(data) {
    root = document.querySelector("#root");
    console.log(root);

    // header ----------------------------------------
    root.append(header());

    const headerDOM = document.querySelector("header");
    console.log(headerDOM);

    headerDOM.innerHTML = `
        <section>
            <a href="index.html">
                    <i class="fa-solid fa-arrow-left-long"></i>
            </a>

            <h1>${data.name}</h1>

            <p>${data.id}</p>
        </section>

        <section>
            <i class="fa-solid fa-angle-left"></i>

                <div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                </div>

            <i class="fa-solid fa-angle-right"></i>
        </section>
        `;






    // main ------------------------------------------
    root.append(main())

    const mainDOM = document.querySelector("main")
    console.log(mainDOM);

    mainDOM.innerHTML = `
       <ul class="types">
    ${data.types.map(function (type) {
            return `<li class="types__${type.type.name}">${type.type.name}</li>`
        }).join("")}
    </ul>

    <section class="about">
    <h2>
        About
    </h2>

    <table>
        <tr>
            <td class="about__weight">
                <i class="fa-solid fa-weight-hanging"></i>

                <p>
                    ${data.weight + "kg"}
                </p>
            </td>

            <td class="about__height">
                <i class="fa-solid fa-ruler-vertical"></i>

                <p>
                    ${data.height + "m"}
                </p>
            </td>

            <td class="about__ability">
                    ${data.abilities.map(function (ability) {
            return `<p class="about__ability__${ability.ability.name}">${ability.ability.name}</p>`
        }).join("")}
            </td>
        </tr>

        <tr>
            <td>
                <p>
                    Weight
                </p>
            </td>

            <td>
                <p>
                    Height
                </p>
            </td>

            <td>
                <p>
                    Moves
                </p>
            </td>
        </tr>
    </table>

    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti delectus doloribus commodi. Modi ullam et quisquam autem doloremque voluptates recusandae perspiciatis quibusdam doloribus. Ducimus excepturi quis voluptas, quos ex fuga?
    </p>

    </section>


    <section class="baseStats">
        <table>
            ${data.stats.map(function (stat) {
            return `
            <tr>
                <td>
                    <p class="baseStats__${stat.stat.name}">${stat.stat.name}</p>
                </td>

                <td>
                    <p>
                        ${stat.base_stat}
                    </p>
                </td>
            </tr>
            `
        }).join(" ")}
        </table>
    </section>`
}