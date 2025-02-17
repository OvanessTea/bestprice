'use client'

import React, { useState, useEffect } from "react";
import styles from "./Statistics.module.scss";
import { Skeleton } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import arrow_up from '@/assets/arrow_up.svg';
import arrow_down from '@/assets/arrow_down.svg';
import StatisticsGraph from "./graph/StatisticsGraph";

interface StatisticsTab {
    id: string;
    title: string;
    total: number;
    percent: number;
}

export default function Statistics() {
    const [timeRange, setTimeRange] = useState("21 - 27 дек");

    const [data, setData] = useState<StatisticsTab[]>([]);
    const [activeTab, setActiveTab] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    useEffect(() => {
        const fetchStatisticsTabs = async () => {
            const response = await fetch('/api/mockData?handler=statistics_tabs');
            const data = await response.json();
            setActiveTab(data[0].id);
            setData(data);
            setIsLoading(false);
        };
        fetchStatisticsTabs();

    }, []);


    const renderSkeleton = () => {
        return <div className={styles.loader}>
            <div className={styles.skeleton_buttons}>
                {new Array(4).fill(0).map((_, index) => (
                    <Skeleton.Button key={index} size={'default'} style={{ width: 197, height: 87, borderRadius: 8 }} shape={'square'} />
                ))}
            </div>
            <div className={styles.graph}>
                {new Array(7).fill(0).map((_, index) => (
                    <Skeleton.Button key={index} size={'default'} style={{ width: 96, height: 240, borderRadius: 8 }} shape={'square'} />
                ))}
            </div>
        </div>;
    }

    return (
        <div className={styles.statistics}>
            <div className={styles.header}>
                <div className={styles.time_range}>
                    Статистика за {timeRange}
                </div>
                {windowWidth > 480 && <div className={styles.more_stats}>
                    <button>Больше статистики</button>
                </div>}
            </div>
            {isLoading ? renderSkeleton() : (
                <>
                    <div className={styles.tabs}>
                        {data.map((item: StatisticsTab) => (
                            <div key={item.id} className={classNames(
                                styles.tab,
                                { [styles.active]: activeTab === item.id }
                            )}
                                onClick={() => setActiveTab(item.id)}
                            >
                                <div className={styles.tab_title}>
                                    {item.title}
                                </div>
                                <div className={styles.tab_content}>
                                    <div className={styles.tab_total}>
                                        {item.total}
                                    </div>
                                    <div className={classNames(styles.tab_percent, { [styles.positive]: item.percent > 0, [styles.negative]: item.percent < 0 })}>
                                        {item.percent > 0 ? (
                                            <Image src={arrow_up} alt="arrow_up" width={13} height={13} />
                                        ) : (
                                            <Image src={arrow_down} alt="arrow_down" width={13} height={13} />
                                        )}{Math.abs(item.percent)}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.graph}>
                        <StatisticsGraph activeTab={data.find(item => item.id === activeTab) || null} />
                    </div>
                </>

            )}
            {windowWidth < 480 && <div className={styles.more_stats}>
                    <button>Больше статистики</button>
            </div>}
        </div>
    )
}