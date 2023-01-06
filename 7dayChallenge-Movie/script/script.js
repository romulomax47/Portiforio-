
import { storage } from './helpers/localstorage.js'
import  getMovie from './getMovies.js';
import serchMovie from './searchMovie.js'
const input = document.querySelector('#input-movie');
const checkBoxStatus = document.querySelector('input[type="checkbox"]');

checkBoxStatus.addEventListener('change', () => {

    const movies =  storage.getFilmefavotitos() || [];
    console.log(movies)

    movieContainer.innerHTML = '';
    movies.forEach(e => renderMovie(e));

});

const movieContainer = document.querySelector('.container');

window.onload = async function(){

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


function checkMovieIsFarites(id) {

    const movie = storage.getFilmefavotitos() || [];
    console.log(movie)
    const res = movie.find(item => item.id == id);
    return res;

}

function renderMovie (movie) {
    const {id, overview, poster_path, title, release_date, vote_average } = movie;

    const isFavorito =  checkMovieIsFarites(id);
    console.log(isFavorito)
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



function coracaoBtn (e, movie) {

    const favorite = {
        favorited :'./img/heart.png',
        notFavotied : '/img/icons8-favorite-96.png'
    }

    // console.log(e.target.src.includes(favorite.notFavotied))
    if(e.target.src.includes(favorite.notFavotied)){
        e.target.src = favorite.favorited;
        storage.salveMovie(movie);
        

    }else{
        
        e.target.src = './img/icons8-favorite-96.png';
        
        storage.removeMovie(movie.id);
    }
       
}

// function salveMovie (filme) {
//     const movies = storage.getFilmefavotitos() || [];
//     console.log(movies)
//     movies.push(filme)
//     const strinFilme = JSON.stringify(movies);
//     localStorage.setItem('filme', strinFilme);
// }


// function getFilmeFavoritos() {
//     return JSON.parse(localStorage.getItem('filme')) || [] ;
// }


