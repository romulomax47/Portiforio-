

function salveMovie(movie) {
   const movies =   getFilmefavotitos() || [];
   movies.push(movie);

   localStorage.setItem('filme', JSON.stringify(movies))
}


function getFilmefavoritos() {
    return JSON.parse(localStorage.getItem('filme')) || [];
}

function removeMovie(id) {
    const movies = getFilmefavoritos() || [];

    const encontraFilme = movies.find(e => e.id == id);
    const newMovies = movies.filter(item => item.id != encontraFilme.id);
    console.log(newMovies)
    
    localStorage.setItem('filme', JSON.stringify(newMovies));

}



export const storage = {
    getFilmefavoritos,
    salveMovie,
    removeMovie
}

