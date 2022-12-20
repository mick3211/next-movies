import Styles from './MovieBanner.module.scss';
import Image from 'next/image';
import { Button } from '@components/inputs/Button/Button';
import { Tag } from '../Tag/Tag';

interface MovieBannerProps {
    title: string;
    backdrop: string;
    description?: string;
    tags?: string[];
}

export const MovieBanner: React.FC<MovieBannerProps> = ({
    backdrop,
    description,
    title,
    tags,
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
