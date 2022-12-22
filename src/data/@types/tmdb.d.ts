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
    export interface TV extends Media {
        first_air_date?: string;
        original_language?: string;
        name?: string;
        original_name?: string;
        origin_country?: string[];
    }
}
