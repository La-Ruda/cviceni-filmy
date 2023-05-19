console.log('funguju!');

const movieList = () => {

    fetch("https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies").then(
        (movies) => {
            return movies.json();
        })
        .then((movies) => {
            console.log(movies)
        });
};



let kunda = "3";


let mrdej = document.querySelector(".mrdej").addEventListener("click", movieList);





