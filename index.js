console.log('funguju!');


const movieList = () => {


    fetch("https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies").then(
        (movies) => {
            return movies.json();
        })
        .then((movies) => {
            container.innerHTML = movies.map(movie => `
                <li class="movie-detail">
                    <div class="movie-poster">
                      <img 
                        src="${movie.posterUrl}"
                        alt="${movie.title}"
                      />
                    </div>
                    <div class="movie-info">
                      <h2 class="movie-title">${movie.title}</h2>
                      <div class="movie-year">${movie.year}</div>
                      <div class="movie-link">
                        <a href="${movie.url}" target="_blank">Odkaz na CSFD</a>
                      </div>
                    </div>
                </li>`)
          .join(``);
        });
};


let mrdej = document.querySelector(".mrdej").addEventListener("click", movieList);

let container = document.querySelector(".movie-list");


/////////////////////////////////////////////////////////////////



const selectGenre = (event) => {
  event.preventDefault();

  const genre = document.querySelector("#select-genre").value;


  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=${genre}`).then(
    (filmy) => {
      return filmy.json();
    })
    .then((filmy) => {
      container.innerHTML = filmy.map(film => `
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

