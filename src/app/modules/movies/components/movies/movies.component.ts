import { Component, OnInit } from '@angular/core';
import { MoviesAggregate } from '@core/aggregates/movies.aggregate';
import { IMovie } from '@core/entities/movie/movie.entity';
import { MovieService } from '@infrastructure/services/movie.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
    movies: IMovie[];
    isLoading: boolean = true;
    totalRecords: number;
    
    constructor(private movieService: MovieService) {
        this.movies = [];
        this.totalRecords = 200;
    }

    ngOnInit() {
        this.movieService.getPopularMovies(1).subscribe((movies: MoviesAggregate) => {
            this.movies = movies.movies;
            this.totalRecords = movies.totalRecords;
            this.isLoading = false;
        });
    }

    loadMovies({first, rows}: LazyLoadEvent) {
        const page = first && rows ? Math.floor(first / rows) + 1 : 1;
        this.isLoading = true;
        
        this.movieService.getPopularMovies(page).subscribe((movies) => {
            this.movies = movies.movies;
            this.totalRecords = movies.totalRecords;
            this.isLoading = false;
        });
    }
}