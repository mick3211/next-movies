import Styles from './Skeleton.module.scss';

interface SkeletonProps {
    width?: string;
    height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = 'auto',
    height = 'auto',
}) => {
    return <div className={Styles.root} style={{ width, height }} />;
};
