import React, { useState } from 'react';
import styles from './Column.module.scss';

interface ColumnProps {
    date: string;
    value: number;
    maxValue: number;
}

export default function Column({ date, value, maxValue }: ColumnProps) {

    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const fillPercentage = Math.min(100, (value / maxValue) * 100);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const id = setTimeout(() => {
            setShowTooltip(true);
            setTooltipPosition({ x: event.clientX, y: event.clientY });
        }, 0);
        setTimeoutId(id);
    };

    const handleMouseLeave = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setShowTooltip(false);
        }
    };

    return (
        <div className={styles.container} data-title={value}>
            <div
                className={styles.barContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <div
                    className={styles.filledBar}
                    style={{
                        height: `${fillPercentage}%`,
                    }}
                />
            </div>
            <div className={styles.dateText}>{date}</div>
            {showTooltip && (
                <div
                    className={styles.tooltip}
                    style={{
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                    }}
                >
                    {value}
                </div>
            )}
        </div>
    );
}