import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosMovieService} from "./axios.service";
import {urls} from "../constants";

const genreService = {
    getGenres:(name:string):IRes<IPagination<IMovie>> => axiosMovieService.get(urls.genre, {params: name}),
}

export {
    genreService
}