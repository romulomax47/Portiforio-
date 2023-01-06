
import { storage } from './helpers/storage.js'
import  getMovie from './api/getMovies.js';
import serchMovie from './api/searchMovie.js';
import  renderMovie  from './helpers/rendermovie.js';
import  change from './controllers/controle.js'

const checkBoxStatus = document.querySelector('input[type="checkbox"]');
const btn = document.querySelector('#btn');


////////INICIO DO PROGRAMA
window.onload = async function(){   
    const movie  = await getMovie();
    movie.forEach(movie => renderMovie(movie));
    
};

/// EVENTOS
btn.addEventListener('click', serchMovie);
checkBoxStatus.addEventListener('change', change);


document.querySelector('input[type="text"]')
            .addEventListener('keydown', (event) =>  { 
    if(event.keyCode == 13)
        event.preventDefault(); serchMovie()   
    
});







