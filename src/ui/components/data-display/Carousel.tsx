'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Styles from './Carousel.module.scss';

interface CarouselProps {
    children: React.ReactElement[] | React.ReactElement;
    changeInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    children,
    changeInterval = 0,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const pages = useMemo(() => {
        return Array.isArray(children) ? children : [children];
    }, [children]);

    const nextPage = useCallback(() => {
        setCurrentItemIndex(prev => (prev + 1) % pages.length);
    }, [pages.length]);

    const prevPage = useCallback(() => {
        setCurrentItemIndex(prev => (prev + pages.length - 1) % pages.length);
    }, [pages.length]);

    useEffect(() => {
        const container = containerRef.current;
        let intervalId: number;

        if (changeInterval > 0 && container) {
            const clearInterval = () => {
                window.clearInterval(intervalId);
            };

            const setInterval = () => {
                clearInterval();

                intervalId = window.setInterval(() => {
                    nextPage();
                }, changeInterval * 1000);
            };

            setInterval();

            container.addEventListener('mouseover', clearInterval);
            container.addEventListener('mouseleave', setInterval);

            return () => {
                window.clearInterval(intervalId);
                container.removeEventListener('mouseover', clearInterval);
                container.removeEventListener('mouseleave', setInterval);
            };
        }
    }, [changeInterval, nextPage]);

    return (
        <div className={Styles.container} ref={containerRef}>
            <button
                className={Styles.button}
                type="button"
                aria-label="Anterior"
                role="button"
                onClick={() => prevPage()}
            >
                <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
                className={Styles.button}
                type="button"
                aria-label="Próximo"
                role="button"
                onClick={() => nextPage()}
            >
                <i className="ri-arrow-right-s-line"></i>
            </button>
            <div className={Styles.pageIndicatorsWrapper}>
                {pages.map((_item, index) => (
                    <span
                        key={index}
                        data-selected={index === currentItemIndex}
                        role="button"
                        onClick={() => setCurrentItemIndex(index)}
                    />
                ))}
            </div>
            <AnimatePresence>
                <motion.div
                    initial={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        opacity: 0,
                    }}
                    animate={{ position: 'relative', opacity: 1 }}
                    exit={{
                        position: 'absolute',
                        opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    key={currentItemIndex}
                >
                    {pages.at(currentItemIndex)}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
