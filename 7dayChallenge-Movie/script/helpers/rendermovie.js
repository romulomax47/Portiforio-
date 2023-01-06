import coracaoBtn from "./heart.js";

import checkMovieIsFarites   from "./isfavorito.js";

const movieContainer = document.querySelector('.container');

export  default function renderMovie (movie) {
    const {id, overview, poster_path, title, release_date, vote_average } = movie;

    const isFavorito =  checkMovieIsFarites(id);
 
    const img = `https://image.tmdb.org/t/p/w500${poster_path}`

    const movieElement = document.createElement('div');

    movieElement.classList.add('movie')
   
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
    cardStar.classList.add('cardStar')
    const imgStar = document.createElement('img');
    imgStar.classList.add('star');
    imgStar.src = './img/star.png';
    const span = document.createElement('span');
    span.innerHTML = vote_average;
    
    cardStar.appendChild(imgStar);
    cardStar.appendChild(span);
    infos.appendChild(cardStar);

    //coração/
    const cardCora = document.createElement('figure');
    cardCora.classList.add('coracao');
    cardCora.setAttribute('id', id);
    const imgCora = document.createElement('img');
    imgCora.addEventListener('click' , (e) => coracaoBtn(e, movie));
    imgCora.src = isFavorito ? './img/heart.png': './img/icons8-favorite-96.png';
    imgCora.alt = 'icon-coração';
    imgCora.classList.add('cora')
    cardCora.appendChild(imgCora);
    infos.appendChild(cardCora);

    //para

    const cardarticle = document.createElement('article');
    cardarticle.classList.add('descricao');
    cardarticle.innerHTML = overview;

    movieElement.appendChild(cardarticle)

}