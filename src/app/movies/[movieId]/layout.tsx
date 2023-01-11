import { ApiService } from 'data/services/ApiService';

export async function getMovieData(movieId: string) {
    const movieData = await ApiService.get<
        TMDB.DetailedMovie & {
            'watch/providers': {
                id?: number;
                results: {
                    [country: string]: {
                        link?: string;
                        flatrate?: TMDB.WatchProvider[];
                        buy?: TMDB.WatchProvider[];
                        rent?: TMDB.WatchProvider[];
                    };
                };
            };
        }
    >(
        `/movie/${movieId}`,
        {
            append_to_response: 'watch/providers',
        },
        { cache: 'no-cache' }
    );
    return movieData;
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
