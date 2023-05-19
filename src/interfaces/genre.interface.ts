interface IMovieInit {
    id: number;
    name: string
}

export interface IGenre {
    genres: IMovieInit[]
}