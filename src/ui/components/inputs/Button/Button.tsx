import Styles from './Button.module.scss';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export const Button: React.FC<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = props => {
    return <button className={Styles.base}>{props.children}</button>;
};
