import DefaultTags from 'app/defaultTags';
import { getMovieData } from './layout';

export default async function Head({
    params,
}: {
    params: { movieId: string };
}) {
    const { title } = await getMovieData(params.movieId);

    return <DefaultTags title={title} />;
}
