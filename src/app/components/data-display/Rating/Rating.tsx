import { useMemo } from 'react';
import Styles from './Rating.module.scss';

interface RatingProps {
    count?: number;
    value?: number;
}

export const Rating: React.FC<RatingProps> = ({ count = 5, value = 0 }) => {
    const Stars = useMemo(() => {
        return new Array(count)
            .fill(0)
            .map((_, index) =>
                index < Math.floor(value) ? (
                    <i className="ri-star-fill" key={index} />
                ) : value % 1 > 0 && index === Math.floor(value) ? (
                    <i className="ri-star-half-line" key={index} />
                ) : (
                    <i className="ri-star-line" key={index} />
                )
            );
    }, [count, value]);

    return <span className={Styles.container}>{Stars}</span>;
};
