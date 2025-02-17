import styles from "./ProgressBar.module.scss";
import classNames from "classnames";
import { useState, useEffect } from "react";
interface IProgressBar {
    value: number;
    max: number;
    segments: number[];
}

export default function ProgressBar({ value, max, segments }: IProgressBar) {
    const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
    const [segmentWidths, setSegmentWidths] = useState<number[]>([]);
    const [thumbColor, setThumbColor] = useState<string>('#fff');
    const [segmentGradients, setSegmentGradients] = useState<string[]>([]);
    const percentage = (value / max) * 100;

    useEffect(() => {
        const total = segments.reduce((acc, val) => acc + val, 0);
        const segmentWidths = segments.map((val) => (val / total) * 100);
        const upperBounds = segments.map((val, index) => {
            const accumulatedWidth = segmentWidths.slice(0, index).reduce((acc, width) => acc + width, 0);
            return accumulatedWidth + val;
        });
        const lowerBounds = segments.map((val, index) => {
            const accumulatedWidth = segmentWidths.slice(0, index).reduce((acc, width) => acc + width, 0);
            return accumulatedWidth;
        });
        const segmentGradients = segments.map((val, index) => {
            return getSegmentColor(lowerBounds[index], upperBounds[index]);
        });
        setSegmentWidths(segmentWidths);
        setSegmentGradients(segmentGradients);
    }, [segments]);
    

    useEffect(() => {
        let accumulatedWidth = 0;
        for (let i = 0; i < segmentWidths.length; i++) {
            accumulatedWidth += segmentWidths[i];
            if (percentage <= accumulatedWidth) {
                setCurrentSegmentIndex(i);
                break;
            }
        }
    }, [segmentWidths]);

    useEffect(() => {
        setThumbColor(getThumbColor(percentage - 1));
    }, [percentage]);

    return (
        <div className={styles.progress_container}>
            <div className={styles.progress_bar}>
                {segmentWidths.map((width, i) => (
                    <div
                        key={i}
                        className={classNames(styles.progress_segment, {
                            [styles.active]: i === currentSegmentIndex,
                        })}
                        style={{
                            width: `${width}%`,
                            flexGrow: width / 10,
                            background: `${segmentGradients[i]}`,
                        }}
                    />
                ))}
                <div className={classNames(styles.progress_thumb, 'border-[6px] border-solid')} style={{ left: `${percentage}%`, borderColor: `${thumbColor}` }} /> 
            </div>
        </div>
    )
}

const getThumbColor = (percentage: number) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return '#DCDDE5';

    canvas.width = 100;
    canvas.height = 1;

    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    gradient.addColorStop(0, 'rgb(243,57,57)');
    gradient.addColorStop(0.39, 'rgb(243,144,57)');
    gradient.addColorStop(0.57, 'rgb(191,191,0)');
    gradient.addColorStop(0.98, 'rgb(116,178,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 100, 1);

    const x = Math.min(Math.max(percentage, 0), 99) * (canvas.width / 100);

    const imageData = ctx.getImageData(x, 0, 1, 1).data;
    return `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
}

const getSegmentColor = (lowerBound: number, upperBound: number) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return '';

    canvas.width = 100;
    canvas.height = 1;

    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    gradient.addColorStop(0, 'rgb(243,57,57)');
    gradient.addColorStop(0.39, 'rgb(243,144,57)');
    gradient.addColorStop(0.57, 'rgb(191,191,0)');
    gradient.addColorStop(1, 'rgb(116,178,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 100, 1);

    // Convert percentage bounds to pixel coordinates
    const lowerX = Math.min(Math.max(lowerBound, 0), 99) * (canvas.width / 100);
    const upperX = Math.min(Math.max(upperBound, 0), 99) * (canvas.width / 100);

    // Get colors at segment bounds
    const lowerColor = ctx.getImageData(lowerX, 0, 1, 1).data;
    const upperColor = ctx.getImageData(upperX, 0, 1, 1).data;

    return `linear-gradient(90deg, rgb(${lowerColor[0]}, ${lowerColor[1]}, ${lowerColor[2]}) 0%, rgb(${upperColor[0]}, ${upperColor[1]}, ${upperColor[2]}) 100%)`;
}
