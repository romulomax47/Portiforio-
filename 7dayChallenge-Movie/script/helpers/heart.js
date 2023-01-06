
import { storage } from "./storage.js";


export default function coracaoBtn (e, movie) {

    const favorite = {
        favorited :'./img/heart.png',
        notFavotied : '/img/icons8-favorite-96.png'
    }

    console.log(e.target.src)
    if(e.target.src.includes(favorite.notFavotied)){
        e.target.src = favorite.favorited;
        storage.salveMovie(movie);
        

    }else{
        
        e.target.src = './img/icons8-favorite-96.png'; 
        storage.removeMovie(movie.id);
    }
       
};