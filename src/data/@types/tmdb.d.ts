namespace TMDB {
    interface Media {
        popularity?: number;
        id: number;
        poster_path?: string;
        backdrop_path?: string | null;
        original_language?: string;
        genre_ids?: number[];
        vote_average?: number;
        overview?: string;
        vote_count?: number;
    }

    export interface Movie extends Media {
        adult?: boolean;
        release_date?: string;
        original_title?: string;
        title?: string;
        video?: boolean;
    }

    export interface DetailedMovie extends Omit<Movie, 'genre_ids'> {
        budget?: number;
        genres?: {
            id: number;
            name: string;
        }[];
        homepage?: string | null;
        imdb_id?: string | null;
        production_companies?: {
            name?: string;
            id: number;
            logo_path?: string | null;
            origin_country?: string;
        }[];
        production_countries?: {
            iso_3166_1?: string;
            name?: string;
        }[];
        spoken_languages?: {
            iso_639_1?: string;
            name?: string;
        }[];
        status?:
            | 'Rumored'
            | 'Planned'
            | 'In Production'
            | 'Post'
            | 'Production'
            | 'Released'
            | 'Canceled';
        tagline?: string | null;
    }

    export interface TV extends Media {
        first_air_date?: string;
        original_language?: string;
        name?: string;
        original_name?: string;
        origin_country?: string[];
    }

    export interface WatchProvider {
        provider_id?: number;
        display_priority?: number;
        logo_path?: string;
        provider_name?: string;
    }
}
