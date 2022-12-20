import Styles from './Tag.module.scss';

interface TagProps {
    value: string | number;
}

export const Tag: React.FC<TagProps> = ({ value }) => {
    return <span className={Styles.wrapper}>{value}</span>;
};
