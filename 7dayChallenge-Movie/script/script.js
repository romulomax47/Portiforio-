
import { api_key } from "./api/apiKey.js";
import  getMovie from './getMovies.js';
import serchMovie from './searchMovie.js'
// btn pesquisar movie

const movieContainer = document.querySelector('.container')
window.onload = async function(){

    const movie  = await getMovie();
    movie.forEach(movie => renderMovie(movie))

}


const btn = document.querySelector('#btn');

btn.addEventListener('click', async () => {

    const formTitle = document.querySelector('#input-movie').value;

    const results  =  await serchMovie(formTitle);
    movieContainer.innerHTML = '';

    results.forEach(movie => renderMovie(movie));
});



function renderMovie (movie) {
    const {id, overview, poster_path, title, release_date, vote_average } = movie;

    const img = `https://image.tmdb.org/t/p/w500${poster_path}`

    const movieElement = document.createElement('div');

    movieElement.classList.add('movie')
    movieElement.setAttribute('id', id);
    movieContainer.appendChild(movieElement)


    const cardMovie = document.createElement('figure');
    const imgMovie = document.createElement('img');
    imgMovie.src = img;
    imgMovie.classList.add('img');
    cardMovie.appendChild(imgMovie);
    movieElement.appendChild(cardMovie)


    const cardInfo = document.createElement('div');
    cardInfo.classList.add('actions');
    movieElement.appendChild(cardInfo);
    
    const titleMovie = document.createElement('h4');
    titleMovie.innerHTML = title;
    titleMovie.classList.add('titulo-filme');
    cardInfo.appendChild(titleMovie);

    const infos = document.createElement('div')
    infos.classList.add('informacoes');
    cardInfo.appendChild(infos);
    
    
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

