import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieEntity } from '@core/entities/movie/movie.entity';
import { MovieService } from '@infrastructure/services/movie.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    // styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

    movie: MovieEntity;
    isLoading: boolean = true;
    
    constructor(private route: ActivatedRoute, private movieService: MovieService) { 
        this.movie = new MovieEntity();
    }

    ngOnInit() {
        const movieId = this.route.snapshot.params["id"];
        this.movieService.getMovie(movieId).subscribe(movie => {this.movie = movie; this.isLoading = false});
    }
}