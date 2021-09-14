import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDTO, MoviesResponse } from '@infrastructure/dtos/movie.dto';
import { IMovie, MovieEntity } from '@core/entities/movie/movie.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesAggregate } from '@core/aggregates/movies.aggregate';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private movieEndpoint: string = 'https://api.themoviedb.org/3';
    private movieApiKey: string = '';

    constructor(private http: HttpClient) {}

    getPopularMovies(page: number): Observable<MoviesAggregate> {
        return this.http.get<MoviesResponse>(`${this.movieEndpoint}/movie/popular?page=${page}&api_key=${this.movieApiKey}`).pipe(
            map(({ results, total_results } : MoviesResponse) => {
                const movies: IMovie[] = results.map((movie: MovieDTO) => {
                    const movieEntity = new MovieEntity();
                    movieEntity.setEntityFromDTO(movie);
                    return movieEntity;
                });
                return new MoviesAggregate(movies, total_results);
            }),
        );
    }

    getMovie(id: number): Observable<MovieEntity> {
        return this.http.get<MovieDTO>(`${this.movieEndpoint}/movie/${id}?api_key=${this.movieApiKey}`).pipe(
            map((movieDTO : MovieDTO) => {
                const movieEntity = new MovieEntity();
                movieEntity.setEntityFromDTO(movieDTO);
                return movieEntity;
            }),
        );
    }
}