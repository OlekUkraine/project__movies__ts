const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w';

const notPicture = 'https://placeimg.com/320/480/tech';



const urls = {
    top_rated:'movie/top_rated',
    discover:'/discover/movie',
    find: `/find`,
    genre: `/genre/movie/list`,
    search: `/search/movie`
}

export {
    baseURL,
    posterURL,
    urls,
    notPicture
}