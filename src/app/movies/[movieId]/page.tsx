import Styles from './page.module.scss';
import { imageBaseURL } from 'data/services/ApiService';
import { getMovieData } from './layout';
import { Tag } from 'app/components/data-display/Tag/Tag';
import { Rating } from 'app/components/data-display/Rating/Rating';
import Image from 'next/image';

export default async function Page({
    params,
}: {
    params: { movieId: string };
}) {
    const movie = await getMovieData(params.movieId);

    return (
        <div
            className={Styles.container}
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(29,29,29,1) 0%, rgba(24,24,27,0) 100%), url(${
                    imageBaseURL + 'original' + movie.backdrop_path
                })`,
            }}
        >
            <div className={Styles.pageHeadingContainer}>
                <h1>{movie.title}</h1>
                {movie.overview && <p>{movie.overview}</p>}
            </div>
            {movie.release_date && (
                <div>
                    Data de lançamento:{' '}
                    {new Date(movie.release_date).toLocaleDateString()}
                </div>
            )}
            {movie.genres && (
                <div>
                    Gêneros:{' '}
                    <span className={Styles.tagsContainer}>
                        {movie.genres.map(genre => (
                            <Tag value={genre.name} key={genre.id} />
                        ))}
                    </span>
                </div>
            )}
            {movie.vote_average && (
                <div>
                    <Rating value={movie.vote_average / 2} />
                    {movie.vote_average.toFixed(1)} ({movie.vote_count} votos)
                </div>
            )}
            {movie['watch/providers'].results.BR?.flatrate && (
                <div>
                    <p>Disponível em:</p>
                    {movie['watch/providers'].results.BR.flatrate.map(
                        provider => (
                            <Image
                                src={imageBaseURL + 'w300' + provider.logo_path}
                                key={provider.provider_name}
                                alt={provider.provider_name as string}
                                width={64}
                                height={64}
                            />
                        )
                    )}
                </div>
            )}
        </div>
    );
}
