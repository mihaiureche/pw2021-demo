import { IProductionCountry, ProductionCountry } from "@core/valueObjects/productionCountry.valueobject";
import { ISpokenLanguage, SpokenLanguage } from "@core/valueObjects/spokenLanguage.valueobject";
import { BaseDTO } from "@infrastructure/dtos/base.dto";
import { MovieDTO } from "@infrastructure/dtos/movie.dto";
import { IBaseEntity, BaseEntity } from "../base.entity";

export interface IMovie extends IBaseEntity{
    title: string;
    overview: string;
    language: string;
    vote: number;
    releaseDate: Date;
    poster: string;
    productionCountries: IProductionCountry[];
    spokenLanguages: ISpokenLanguage[];
}

export class MovieEntity extends BaseEntity implements IMovie {
    public title: string;
    public overview: string;
    public language: string;
    public vote: number;
    public releaseDate: Date;
    public poster: string;
    public productionCountries: IProductionCountry[];
    public spokenLanguages: ISpokenLanguage[];

    constructor() {
        super();
        this.title = '';
        this.overview = '';
        this.language = '';
        this.vote = 0;
        this.releaseDate = new Date();
        this.poster = '';
        this.productionCountries = [];
        this.spokenLanguages = [];
    }

    public setEntityFromDTO = (movieDTO: MovieDTO): void => {
        super.setEntityFromDTO({id: movieDTO.id} as BaseDTO);
        this.title = movieDTO.title;
        this.language = movieDTO.original_language;
        this.vote = movieDTO.vote_average;
        this.overview = movieDTO.overview;
        this.releaseDate = new Date(movieDTO.release_date);
        this.poster = movieDTO.poster_path;
        this.productionCountries = movieDTO.production_countries?.map(countryDTO => new ProductionCountry(countryDTO.iso_3166_1, countryDTO.name));
        this.spokenLanguages = movieDTO.spoken_languages?.map(languageDTO => new SpokenLanguage(languageDTO.iso_639_1, languageDTO.name));
    }
}