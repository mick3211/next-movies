import Styles from './MovieCard.module.scss';
import Image from 'next/image';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import React from 'react';

interface MovieCardProps {
    image: string;
    title: string;
    titleSize?: string;
    tag?: string;
    rating?: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
    image,
    title,
    tag,
    rating,
    titleSize = '1.5rem',
}) => {
    return (
        <div className={Styles.container}>
            <div
                className={Styles.movieInformation}
                style={{ '--title-size': titleSize } as React.CSSProperties}
            >
                {tag && <Tag value={tag} />}
                {(rating || null) && <Rating count={5} value={rating} />}
                <h3>{title}</h3>
            </div>
            <span className={Styles.action}>
                Informações <i className="ri-arrow-right-s-line" />
            </span>
            <span className={Styles.imageWrapper}>
                <Image src={image} alt={'Capa de ' + title} fill />
            </span>
        </div>
    );
};
