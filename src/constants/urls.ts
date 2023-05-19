const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w';

const urls = {
    discover:'/discover/movie',
    find: `/find`,
    genre: `/genre/movie/list`,
    // search: `/search/keyword`
    search: `/search/movie`
}

export {
    baseURL,
    posterURL,
    urls
}