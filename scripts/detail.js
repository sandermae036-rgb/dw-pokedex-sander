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
    

    // header ----------------------------------------
    root.append(header());

    const headerDOM = document.querySelector("header");

    headerDOM.innerHTML = `
        <img class="backgroundPokeball" src="./img/Pokeball.png" alt="pokeball">


        <section class="header__top">
            <a href="index.html" class="header__top--arrowBack">
                    <i class="fa-solid fa-arrow-left"></i>
            </a>

            <h1>${data.name}</h1>

            <p class="header__top--id">#${String(data.id).padStart(3, 0)}</p>
        </section>

        <section class="imgShowcase">
            <a href="detail.html?id=${data.id -1}" class="prev">
                <i class="fa-solid fa-angle-left" class="imgShowcase--previous"></i>
            </a>

                <div class="imgShowcase__img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                </div>

            <a href="detail.html?id=${data.id +1}" class="next">
                <i class="fa-solid fa-angle-right" class="imgShowcase--next"></i>
            </a>
        </section>
        `;






    // main ------------------------------------------
    root.append(main())

    const mainDOM = document.querySelector("main")

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
        <tr class="about__top">
            <td class="about__ability--weight">
                <div>
                    <i class="fa-solid fa-weight-hanging"></i>

                    <p> 
                        ${data.weight + "kg"}
                    </p>
                </div>
            </td>

            <td class="about__ability--height">
                <div>
                <i class="fa-solid fa-ruler-vertical"></i>

                <p>
                    ${data.height + "m"}
                </p>
               </div>
            </td>

            <td class="about__ability--moves">
                    ${data.abilities.map(function (ability) {
        return `<p>${ability.ability.name}</p>`
    }).join("")}
            </td>
        </tr>

        <tr class="about__bottom">
            <td class="about__ability--weight">
                <p>
                    Weight
                </p>
            </td>

            <td class="about__ability--height">
                <p>
                    Height
                </p>
            </td>

            <td class="about__ability--moves">
                <p>
                    Moves
                </p>
            </td>
        </tr>
    </table>

    <p class="about__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti delectus doloribus commodi.
    </p>

    </section>


    <section class="baseStats">
        <h2>
            Base Stats
        </h2>

        <table>
            ${data.stats.map(function (stat) {
        return `
            <tr>
                <td>
                    <p class="baseStats__${stat.stat.name}">${stat.stat.name}</p>
                </td>

                <td class="baseStats__${stat.stat.name}--showcase">
                    <p>
                        ${String(stat.base_stat).padStart(3, 0)}
                    </p>
                </td>
            </tr>
            `
    }).join(" ")}
        </table>
    </section>`


    // function to make the next or prev arrow button hide once the id is 1 or 1351
    prevOrNext(data.id)
}

function prevOrNext (id) {
    if (id <= 1) {
        const prev = document.querySelector(".prev")

        prev.style.display = "none";
    } else if (id >= 1025) {
        const next = document.querySelector(".next")

        next.style.display = "none";
    }
};