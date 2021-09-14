import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { RatingModule } from 'primeng/rating';
import {SplitterModule} from 'primeng/splitter';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';

import { RouterModule } from '@angular/router';
import { MovieService } from '@infrastructure/services/movie.service';

import { MOVIES_ROUTES } from './movies.routes';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(MOVIES_ROUTES),
    ButtonModule,
    CardModule,
    RatingModule,
    InputTextModule,
    DataViewModule,
    OrderListModule,
    SplitterModule,
    ProgressSpinnerModule,
    BlockUIModule
  ],
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieComponent
  ],
  providers: [MovieService]
})
export class MoviesModule { }
