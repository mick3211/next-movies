import { Carousel } from '@components/data-display/Carousel';
import { ApiService } from 'data/services/ApiService';
import Image from 'next/image';

async function getData() {
    return await ApiService.get<{ results: TMDB.Movie[] }>(
        '/movie/popular',
        undefined,
        { next: { revalidate: 60 } }
    );
}

export default async function Index() {
    const movies = await getData();

    return (
        <div className="w-full h-[600px] fixed top-0 left-0">
            <Carousel changeInterval={10}>
                <div style={{ height: 648 }}>
                    <Image
                        src={
                            'https://image.tmdb.org/t/p/original/' +
                            movies.results[0].backdrop_path
                        }
                        alt={'asdsad'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div style={{ height: 648 }}>
                    <Image
                        src={
                            'https://image.tmdb.org/t/p/original/' +
                            movies.results[1].backdrop_path
                        }
                        alt={'asdsad'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div style={{ height: 648 }}>
                    <Image
                        src={
                            'https://image.tmdb.org/t/p/original/' +
                            movies.results[2].backdrop_path
                        }
                        alt={'asdsad'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </Carousel>
        </div>
    );
}
