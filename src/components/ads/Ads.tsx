"use client";
import styles from "./Ads.module.scss";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import classNames from "classnames";
import Image from "next/image";


interface IIncome {
    id: string;
    title: string;
    amount: number;
    color: string;
}

export default function Ads() {

    const [data, setData] = useState<IIncome[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAds = async () => {
            const response = await fetch('/api/mockData?handler=ads');
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        };
        fetchAds();
    }, []);

    if (isLoading) {
        return <div className={styles.wrapper}>
            <Skeleton.Button style={{ width: '100% !important', height: 100 }} shape={'square'} />
        </div>
    }

    if (data.length === 0) {
        return <div className={classNames(styles.wrapper, styles.empty)}>
            
            <p>Здесь появится информация о ваших объявлениях.</p>
        </div>
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>Объявления</h2>
            </div>
            <div className={styles.content}>
                {
                    data.map((item, index) => (
                        <div key={item.id}>
                            <div className={styles.item}>
                                <div className="flex gap-[6px] items-center">
                                    <div className={styles.indicator} style={{ backgroundColor: item.color }} />
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>{item.amount.toLocaleString('ru-RU')}</p>
                                    <button>
                                        <Image src={"/caret_right.svg"} alt="more info" width={16} height={16}/>
                                    </button>
                                </div>
                            </div>
                            {index < data.length - 1 && <hr />}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}