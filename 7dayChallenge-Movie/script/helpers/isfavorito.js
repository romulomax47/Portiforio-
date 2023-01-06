import { storage } from "./storage.js";


export default function checkMovieIsFarites(id) {

    const movie = storage.getFilmefavotitos() || [];
    const res = movie.find(item => item.id == id);
    return res;

};