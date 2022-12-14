
import { api_key } from "../api/apiKey.js";

window.onload = async function(){

    const movie  = await getPupularFilmes();

}



async function getPupularFilmes() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key.api}`;
    const fetchresponse = await fetch(url);
    const { results }= await fetchresponse.json();
    return results

}

