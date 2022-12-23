
import { api_key } from "./api/apiKey.js";
import  getMovie from './getMovies.js';
import serchMovie from './searchMovie.js'
const input = document.querySelector('#input-movie');
// btn pesquisar movie
// const btn_coracao = document.querySelectorAll('.coracao')



const movieContainer = document.querySelector('.container');

window.onload = async function(){''

    const movie  = await getMovie();
    movie.forEach(movie => renderMovie(movie));

};

const btn = document.querySelector('#btn');

btn.addEventListener('click', async () => {

    const formTitle = document.querySelector('#input-movie').value;

    const results  =  await serchMovie(formTitle);
    movieContainer.innerHTML = '';

    results.forEach(movie => renderMovie(movie));
});

input.addEventListener('keydown', function(event)  {
    
    if(event.keyCode == 13){
        
        event.preventDefault();
    
        buscarMovie();
    }
});

async function buscarMovie() {
    const inputMovie = input.value;

    if(inputMovie != ''){
        movieContainer.innerHTML = '';
        const movie = await serchMovie(inputMovie);
        console.log(movie)
        movie.forEach( item => renderMovie(item))
    }else{
        alert('Preencha o campo!');
    }
}


function renderMovie (movie) {
    const {id, overview, poster_path, title, release_date, vote_average } = movie;
    const isFavorito = false;
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
    cardStar.classList.add('cardStar')
    const imgStar = document.createElement('img');
    imgStar.classList.add('star');
    imgStar.src = './img/star.png';
    const span = document.createElement('span');
    span.innerHTML = vote_average;
    
    cardStar.appendChild(imgStar)
    cardStar.appendChild(span);
    infos.appendChild(cardStar);

    //coração/
    const cardCora = document.createElement('figure');
    cardCora.classList.add('coracao')
    cardCora.addEventListener('click' , coracaoBtn)
    const imgCora = document.createElement('img');
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

function coracaoBtn (e) {

    // alert('ok')
    const favorite = {
        favorited :'./img/heart.png',
        notFavotied : '/img/icons8-favorite-96.png'
    }

    console.log(e.target.src.includes(favorite.notFavotied))
    if(e.target.src.includes(favorite.notFavotied)){
        e.target.src = favorite.favorited;

    }else{
        e.target.src = './img/icons8-favorite-96.png'
    }
       
}

