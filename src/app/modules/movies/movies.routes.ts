import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';

export const MOVIES_ROUTES: Routes = [
    {
      path: '',
      component: MoviesComponent
    },
    {
      path: ':id',
      component: MovieComponent
    }
];
