const detailsContainer = document.querySelector(".detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://api.rawg.io/api/games/" + id;

console.log(url);

const loader = document.querySelector(".load");

async function callApi() {

    const response = await fetch(url);

    const gameObjects = await response.json();

    const objects = gameObjects.results;

    console.log(gameObjects.results);

    loader.innerHTML = "";

    for (let i = 0; i < objects.length; i++) {
        console.log(objects[i].name);

        gamesContainer.innerHTML += `<a href="question3.html?id=${objects[i].id}" class="result">
                                    <h2>${objects[i].name}</h2>
                                    <img src="${objects[i].background_image}" alt="${objects[i].name}" />
                                    <p>${objects[i].rating}</p>
                                    </a>`;
    }
}

callApi();