
import { api_key } from "./api/apiKey.js";


const movieContainer = document.querySelector('.container')
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
    movieContainer.appendChild(movieElement)


    //POST FILVE

    const cardMovie = document.createElement('figure');
    const imgMovie = document.createElement('img');
    imgMovie.src = img;
    imgMovie.classList.add('img');
    cardMovie.appendChild(imgMovie);
    movieElement.appendChild(cardMovie)

    //acctiosn 

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('actions');
    movieElement.appendChild(cardInfo);
    
    // title
    const titleMovie = document.createElement('h4');
    titleMovie.innerHTML = title;
    titleMovie.classList.add('titulo-filme');
    cardInfo.appendChild(titleMovie);

    // infos 
    const infos = document.createElement('div')
    infos.classList.add('informacoes');
    cardInfo.appendChild(infos);
    
    
    // start
    const cardStar = document.createElement('figure')
    cardStar.classList.add('star')
    const imgStar = document.createElement('img');
    imgStar.classList.add('star');
    imgStar.src = './img/star.png';
    const span = document.createElement('span');
    span.innerHTML = vote_average;
    
    cardStar.appendChild(imgStar)
    cardStar.appendChild(span);
    infos.appendChild(cardStar);

    
    //coração/
    const cardCora = document.createElement('figure')
    const imgCora = document.createElement('img');
    imgCora.classList.add('cora')
    imgCora.src = './img/heart.png';
    cardCora.appendChild(imgCora);
    infos.appendChild(cardCora);

    //para

    const cardarticle = document.createElement('article');
    cardarticle.classList.add('descricao');
    cardarticle.innerHTML = overview;
    movieElement.appendChild(cardarticle)



}

