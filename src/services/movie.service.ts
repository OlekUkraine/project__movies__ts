import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosMovieService} from "./axios.service";
import {urls} from "../constants";
import {IGetById} from "../interfaces/getById.interface";

class MovieService {
    getAllMovies(page: number): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.discover, {params: {page}})
    }
    getById(id: number): IRes<IGetById<IMovie>> {
        return axiosMovieService.get(urls.find, {params: {id}})
    }
    searchMovie(query: string, page: number): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.search, {params: {query, page}})
    }
}

export const movieService = new MovieService();
