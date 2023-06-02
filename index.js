console.log("Spirit of this Machine, heed my will")

import { Movie } from './Movie/index.js';


const movieList = () => {


    fetch("https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies").then(
        (response) => {
            return response.json();
        })
        .then((data) => {
            container.innerHTML = data.map(Movie).join(``);
        });
};


let mrdej = document.querySelector(".mrdej").addEventListener("click", movieList);

let container = document.querySelector(".movie-list");

/////////////////////////////////////////////////////////////////



const selectGenre = (event) => {
  event.preventDefault();

  const genre = document.querySelector("#select-genre").value;


  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=${genre}`).then(
    (response) => {
      return response.json();
    })
    .then((data) => {
      container.innerHTML = data.map(film => `
                <li class="movie-detail">
                    <div class="movie-poster">
                      <img 
                        src="${film.posterUrl}"
                        alt="${film.title}"
                      />
                    </div>
                    <div class="movie-info">
                      <h2 class="movie-title">${film.title}</h2>
                      <div class="movie-year">${film.year}</div>
                      <div class="movie-link">
                        <a href="${film.url}" target="_blank">Odkaz na CSFD</a>
                      </div>
                    </div>
                </li>`)
          .join(``);
    });
};

let selector = document.querySelector(".genre__choice").addEventListener("click", selectGenre);

