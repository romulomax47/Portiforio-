import { api_key } from "./helpers/apiKey.js";


async function serchMovie(title) {


    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key.api}&query= ${ title } &language=en-US&page=1`

    const get = await fetch(url);
    
    const { results } = await get.json();

    return results;

}

export default serchMovie;