'use client';
import React, { useRef } from 'react';
import Styles from './CardRow.module.scss';

interface CardRowProps {
    title: string;
    children: React.ReactElement[];
    colWidth?: string;
    gap?: string;
}

export const CardRow: React.FC<CardRowProps> = ({
    title,
    children,
    gap = '16px',
    colWidth = '292px',
}) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const nextPage = () => {
        rowRef.current?.scrollBy({
            left: rowRef.current?.clientWidth,
            behavior: 'smooth',
        });
    };
    const prevPage = () => {
        rowRef.current?.scrollBy({
            left: -rowRef.current?.clientWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className={Styles.container}>
            <button
                className={Styles.control}
                type="button"
                aria-label="Anterior"
                role="button"
                onClick={() => prevPage()}
            >
                <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
                className={Styles.control}
                type="button"
                aria-label="Próximo"
                role="button"
                onClick={() => nextPage()}
            >
                <i className="ri-arrow-right-s-line"></i>
            </button>
            <h2 className={Styles.title}>{title}</h2>
            <div
                ref={rowRef}
                className={Styles.row}
                style={
                    {
                        '--col-width': colWidth,
                        '--col-gap': gap,
                    } as React.CSSProperties
                }
            >
                {children}
            </div>
        </div>
    );
};
