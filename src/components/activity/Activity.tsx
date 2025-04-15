"use client";
import styles from "./Activity.module.scss";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import ProgressBar from "@/components/progress_bar/ProgressBar";
import classNames from "classnames";
import Image from "next/image";

interface IActivity {
    active_level: number;
}

export default function Activity() {
    const [data, setData] = useState<IActivity>({ active_level: 0 });
    const [isLoading, setIsLoading] = useState(true);

    const getDescription = (level: number) => {
        let title = '';
        let text = '';
        if (level >= 9) {
            title = 'Вы в топе!';
            text = 'Конкуренты далеко позади. Так держать!';
        }
        else if (level >= 7.5) {
            title = 'Вы почти на вершине!';
            text = 'Усильте продвижение, чтобы закрепить лидерство';
        }
        else if (level >= 5) {
            title = 'Вы набираете обороты!';
            text = 'Продолжайте продвигать объявления, чтобы обойти конкурентов';
        }
        else {
            title = 'Продвиньте объявления';
            text = 'Конкуренты активнее, чем вы';
        }
        return (
            <div className={styles.activity_description}>
                <p className={styles.activity_description_title}>{title}</p>
                <p className={styles.activity_description_text}>{text}</p>
            </div>
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/mockData?handler=activity');
            const data = await response.json(); 
            setData(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div className={styles.wrapper}>
            <Skeleton.Button style={{ width: '100% !important', height: 100 }} shape={'square'} />
        </div>
    }

    return (
        <div className={classNames(styles.wrapper, data.active_level < 5 && 'alert_border')}>
            <div className={styles.header}>
                <h2>Активность продвижения</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.activity}>
                    <div className={styles.activity_count}>
                        <p className={styles.activity_count_value}>{data.active_level} <span>/ 10</span></p>
                        <p className={styles.activity_count_description}>за 7 дней</p>
                    </div>
                    <div className={styles.level_bar}>
                        <ProgressBar value={data.active_level}  max={10} segments={[50, 30, 20]}/>
                    </div>
                    {getDescription(data.active_level)}
                </div>
            </div>
            <div className={styles.more_info} title="Узнать больше" data-title="Узнать больше">
                <button>
                    <Image src={"/question.svg"} alt="more info" width={20} height={20}/>
                </button>
            </div>
        </div>
    )
}
