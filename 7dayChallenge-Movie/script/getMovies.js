import {api_key } from './api/apiKey.js'


async function getMovie () {                       // popular
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key.api}`;
    const fetchresponse = await fetch(url);
    const { results }= await fetchresponse.json();
    return results
}

export default getMovie;