
import { api_key } from "./api/apiKey.js";

window.onload = async function(){

    const movie  = await getPupularFilmes();
    movie.forEach(movie => renderMovie(movie))

}

async function getPupularFilmes() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key.api}`;
    const fetchresponse = await fetch(url);
    const { results }= await fetchresponse.json();
    return results

}

function renderMovie (movie) {
    const {id, overview, poster_path, title, release_date, vote_average } = movie;

    const ano = release_date.split('-')[0];
    const img = `https://image.tmdb.org/t/p/w500${poster_path}`

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie')
    movieElement.setAttribute('id', id);

    console.log(movieElement)


}

