import { IMovie } from "@core/entities/movie/movie.entity";

export interface IMoviesAggregate {
    readonly movies: IMovie[];
    readonly totalRecords: number;
}

export class MoviesAggregate {
    public movies: IMovie[];
    public totalRecords: number;

    constructor (movies: IMovie[], totalRecords: number) {
        this.movies = movies;
        this.totalRecords = totalRecords;
    }
}