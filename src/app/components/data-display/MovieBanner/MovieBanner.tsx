import Styles from './MovieBanner.module.scss';
import Image from 'next/image';
import { Button } from '@components/inputs/Button/Button';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';

interface MovieBannerProps {
    title: string;
    backdrop: string;
    description?: string;
    tags?: string[];
    rating?: number;
}

export const MovieBanner: React.FC<MovieBannerProps> = ({
    backdrop,
    description,
    title,
    tags,
    rating,
}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.headerContainer}>
                {tags && (
                    <div className={Styles.tagsContainer}>
                        {tags.map((tag, index) => (
                            <Tag key={index} value={tag} />
                        ))}
                    </div>
                )}
                {rating && <Rating value={rating} />}
                <h1>{title}</h1>
                {description && <p>{description}</p>}
                <Button data-variant="gradient">Assistir agora</Button>
            </div>
            <div className={Styles.backdropWrapper}>
                <Image src={backdrop} alt={'Banner de ' + title} fill />
            </div>
        </div>
    );
};
