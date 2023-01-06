

function salveMovie(movie) {
   const movies =   getFilmefavotitos() || [];
   movies.push(movie);

   localStorage.setItem('filme', JSON.stringify(movies))
}


function getFilmefavotitos() {
    return JSON.parse(localStorage.getItem('filme')) || [];
}

function removeMovie(id) {
    const movies = getFilmefavotitos() || [];

    const encontraFilme = movies.find(e => e.id == id);
    const newMovies = movies.filter(item => item.id != encontraFilme.id);
    console.log(newMovies)
    
    localStorage.setItem('filme', JSON.stringify(newMovies));

}



export const storage = {
    getFilmefavotitos,
    salveMovie,
    removeMovie
}

