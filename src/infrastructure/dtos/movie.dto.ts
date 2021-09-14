import { BaseDTO } from "./base.dto";

interface ProductionCountryDTO {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguageDTO {
    iso_639_1: string;
    name: string;
}

export interface MovieDTO extends BaseDTO {
    title: string;
    overview: string;
    original_language: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    production_countries: ProductionCountryDTO[];
    spoken_languages: SpokenLanguageDTO[];
}

export interface MoviesResponse {
    results: MovieDTO[],
    total_results: number;
}