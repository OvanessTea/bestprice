"use client";
import styles from "./Incomes.module.scss";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import Image from "next/image";
import coins from "@/assets/coins.svg";
import classNames from "classnames";

interface IIncome {
    id: string;
    amount: number;
    title: string;
}

export default function Incomes() {

    const [data, setData] = useState<IIncome[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchIncomes = async () => {
            const response = await fetch('/api/mockData?handler=incomes');
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        };
        fetchIncomes();
    }, []);

    if (isLoading) {
        return <div className={styles.wrapper}>
            <Skeleton.Button style={{ width: '100% !important', height: 100 }} shape={'square'} />
        </div>
    }

    if (data.length === 0) {
        return <div className={classNames(styles.wrapper, styles.empty)}>
            <Image src={coins} alt="coins" />
            <p>Здесь появятся доходы от заказов,
            оформленных с доставкой.</p>
        </div>
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>Доходы от заказов</h2>
            </div>
            <div className={styles.content}>
                {
                    data.map((item, index) => (
                        <div key={item.id}>
                            <div className={styles.item}>
                                <h3>{item.title}</h3>
                                <p>{item.amount.toLocaleString('ru-RU')} ₽</p>
                            </div>
                            {index < data.length - 1 && <hr />}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}