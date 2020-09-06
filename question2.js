const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".gamesContainer");

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