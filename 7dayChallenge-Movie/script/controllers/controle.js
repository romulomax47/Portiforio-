import { storage } from "../helpers/storage.js";
import renderMovie from "../helpers/rendermovie.js";
import getMovie from "../api/getMovies.js";

export default async function change() {

  
    if (this.dataset.key == 'false') {
        
        this.dataset.key = 'true';
        const movies = storage.getFilmefavotitos() || []

        document.querySelector('section').innerHTML = '';
        movies.forEach(e => renderMovie(e));
    }else{

        this.dataset.key = 'false';
        
        document.querySelector('section').innerHTML = '';
        const movies = await getMovie();
        movies.forEach(e => renderMovie(e));
    }

}

