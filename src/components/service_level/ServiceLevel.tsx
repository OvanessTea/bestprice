"use client";
import styles from "./ServiceLevel.module.scss";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import ProgressBar from "@/components/progress_bar/ProgressBar";
import classNames from "classnames";
import Image from "next/image";
import question from "@/assets/question.svg";

interface IServiceLevel {
    level: number;
}

export default function ServiceLevel() {
    const [data, setData] = useState<IServiceLevel>({ level: 0 });
    const [isLoading, setIsLoading] = useState(true);

    const getDescription = (level: number) => {
        let title = '';
        let text = '';
        if (level >= 90) {
            title = 'У вас высокий уровень';
            text = 'Спасибо, что следуете правилам, — за это положены преимущества';
        }
        else if (level >= 75) {
            title = 'У вас хороший уровень';
            text = 'Осталось немного до максимального результата';
        }
        else if (level >= 50) {
            title = 'У вас средний уровень';
            text = 'Вы на правильном пути! Продолжайте в том же духе, чтобы достичь большего';
        }
        else {
            title = 'У вас низкий уровень';
            text = 'Не расстраивайтесь! Начните следовать правилам, чтобы улучшить свои показатели';
        }
        return (
            <div className={styles.level_description}>
                <p className={styles.level_description_title}>{title}</p>
                <p className={styles.level_description_text}>{text}</p>
            </div>
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/mockData?handler=service_level');
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
        <div className={classNames(styles.wrapper, data.level < 50 && 'alert_border')}>
            <div className={styles.header}>
                <h2>Уровень сервиса</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.level}>
                    <div className={styles.level_count}>
                        <p className={styles.level_count_value}>{data.level}%</p>
                        <p className={styles.level_count_description}>за 30 дней</p>
                    </div>
                    <div className={styles.level_bar}>
                        <ProgressBar value={data.level}  max={100} segments={[30, 70]}/>
                    </div>
                    {getDescription(data.level)}
                </div>
            </div>
            <div className={styles.more_info} title="Узнать больше" data-title="Узнать больше">
                <button>
                    <Image src={question} alt="more info" />
                </button>
            </div>
        </div>
    )
}
