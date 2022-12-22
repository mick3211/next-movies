import Styles from './page.module.scss';
import { Carousel } from '@components/data-display/Carousel';
import { CardRow } from '@components/layout/CardRow/CardRow';
import { ApiService, imageBaseURL } from 'data/services/ApiService';
import { MovieBanner } from './components/data-display/MovieBanner/MovieBanner';
import { MovieCard } from './components/data-display/MovieCard/MovieCard';

export const revalidate = 60;

async function getData() {
    const genres = new Object() as {
        [key: number]: string;
    };

    const genresListReq = ApiService.get<{
        genres: { id: number; name: string }[];
    }>('/genre/movie/list');

    const popularMoviesReq = ApiService.get<{ results: TMDB.Movie[] }>(
        '/trending/movie/day'
    );
    const trendingTvReq = ApiService.get<{ results: TMDB.TV[] }>(
        '/trending/tv/week'
    );
    const latestReq = ApiService.get<{ results: TMDB.Movie[] }>(
        '/discover/movie',
        {
            sort_by: 'release_date.desc',
            include_adult: true,
            'release_date.lte': new Date().toJSON(),
            region: 'BR',
        }
    );
    const horrorMoviesReq = ApiService.get<{ results: TMDB.Movie[] }>(
        '/discover/movie',
        {
            sort_by: 'release_date.desc',
            include_adult: true,
            'release_date.lte': new Date().toJSON(),
            region: 'BR',
            with_genres: '27',
        }
    );

    const [popularMovies, latest, genresList, hororMovies, trendingTv] =
        await Promise.all([
            popularMoviesReq,
            latestReq,
            genresListReq,
            horrorMoviesReq,
            trendingTvReq,
        ]);

    for (let item of genresList.genres) {
        genres[item.id] = item.name;
    }

    return { popularMovies, latest, genres, hororMovies, trendingTv };
}

export default async function Index() {
    const { popularMovies, latest, genres, hororMovies, trendingTv } =
        await getData();

    return (
        <>
            <div style={{ position: 'sticky', top: 0 }}>
                <Carousel changeInterval={10}>
                    {popularMovies.results.map(movie => (
                        <MovieBanner
                            key={movie.id}
                            tags={movie.genre_ids?.map(id => genres[id])}
                            title={movie.title as string}
                            rating={
                                movie.vote_average && movie.vote_average / 2
                            }
                            description={movie.overview}
                            backdrop={
                                imageBaseURL + 'original' + movie.backdrop_path
                            }
                        />
                    ))}
                </Carousel>
            </div>
            <div className={Styles.sessionsContainer}>
                <section id="latest" aria-label="Últimos lançamentos">
                    <CardRow title="Últimos lançamentos">
                        {latest.results.map(item => (
                            <MovieCard
                                key={item.id}
                                image={imageBaseURL + 'w342' + item.poster_path}
                                title={item.title as string}
                                rating={
                                    item.vote_average && item.vote_average / 2
                                }
                                tag={
                                    item.genre_ids && genres[item.genre_ids[0]]
                                }
                            />
                        ))}
                    </CardRow>
                </section>
                <section id="trendingTv" aria-label="Séries em alta">
                    <CardRow title="Séries em alta" gap="0" colWidth="504px">
                        {trendingTv.results.map(item => (
                            <MovieCard
                                key={item.id}
                                image={imageBaseURL + 'w500' + item.poster_path}
                                title={item.name as string}
                                rating={
                                    item.vote_average && item.vote_average / 2
                                }
                                titleSize="2rem"
                                tag={
                                    item.genre_ids && genres[item.genre_ids[0]]
                                }
                            />
                        ))}
                    </CardRow>
                </section>
                <section id="horror" aria-label="Filmes de terror">
                    <CardRow title="Filmes de terror">
                        {hororMovies.results.map(item => (
                            <MovieCard
                                key={item.id}
                                image={imageBaseURL + 'w342' + item.poster_path}
                                title={item.title as string}
                                rating={
                                    item.vote_average && item.vote_average / 2
                                }
                                tag={
                                    item.genre_ids && genres[item.genre_ids[0]]
                                }
                            />
                        ))}
                    </CardRow>
                </section>
            </div>
        </>
    );
}
