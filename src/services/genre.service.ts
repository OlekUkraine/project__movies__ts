import {IGenre, IMovie, IPagination} from "../interfaces";
import {axiosMovieService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieInit} from "../types";

class GenreService {
    getAllGenres():IRes<IGenre<IMovieInit>> {
        return axiosMovieService.get(urls.genre)
    }
    getGenres(name: string): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.genre, {params: name});
    }
}

export const genreService = new GenreService();
