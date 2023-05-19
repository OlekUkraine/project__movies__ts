export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    poster_path: string | null;
    genre_ids: number [];
    id: number;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
