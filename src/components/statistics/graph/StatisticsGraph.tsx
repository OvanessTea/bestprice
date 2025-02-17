import React, { useState, useEffect } from 'react';
import styles from './StatisticsGraph.module.scss';
import Column from './Column';

interface StatisticsTab {
    id: string;
    title: string;
    total: number;
    percent: number;
}

interface GraphItem {
    date: string;
    total: number;
}

interface StatisticsGraphProps {
    activeTab: StatisticsTab | null;
}

export default function StatisticsGraph({ activeTab }: StatisticsGraphProps) {
    if (!activeTab) return null;

    const [data, setData] = useState<GraphItem[]>([]);
    const [maxValue, setMaxValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let res;
            let responseData;
            switch (activeTab.id) {
                case 'views':
                    res = await fetch('/api/mockData?handler=stats_views');
                    responseData = await res.json();
                    break;
                case 'contacts':
                    res = await fetch('/api/mockData?handler=stats_contacts');
                    responseData = await res.json();
                    break;
                case 'favorites':
                    res = await fetch('/api/mockData?handler=stats_favs');
                    responseData = await res.json();
                    break;
                case 'orders':
                    res = await fetch('/api/mockData?handler=stats_orders');
                    responseData = await res.json();
                    break;
                default:
                    break;
            }
            if (responseData) {
                setData(responseData);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [activeTab]);

    useEffect(() => {
        if (data.length > 0) {
            setMaxValue(Math.max(...data.map(item => item.total)));
        }
    }, [data]);

    return (
        <div className={styles.graph}>
            <div className={styles.graph_content}>
                {data && data.map((item, index) => (
                    <Column key={index} date={item.date} value={item.total} maxValue={maxValue} />
                ))}
            </div>
        </div>
    )
}

