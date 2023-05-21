import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosMovieService} from "./axios.service";
import {urls} from "../constants";
import {IGetById} from "../interfaces";

class MovieService {
    getAllMovies(page: number): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.discover, {params: {page}})
    }
    getByGenres(genreId: string, page: number): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.discover, {params: {with_genres: genreId, page}})
    }
    getTopRatedMovies(): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.top_rated)
    }
    searchMovie(query: string, page: number): IRes<IPagination<IMovie>> {
        return axiosMovieService.get(urls.search, {params: {query, page}})
    }
    getById(id: string): IRes<IGetById<IMovie>> {
        return axiosMovieService.get(urls.find, {params: {id}})
    }
}

export const movieService = new MovieService();
