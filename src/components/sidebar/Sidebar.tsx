import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import classNames from "classnames";

const Sidebar = () => {
    return <div className={styles.sidebar}>
        <div className={styles.content}>
            <div id={styles.avatar}>
                <Image className={classNames("rounded-lg", styles.avatarImage)} src={"/avatar.jpg"} alt="avatar" width={177} height={177}/>
                <button className={styles.avatarIcon}>
                    <Image src={"/camera.svg"} alt="camera" width={18} height={18}/>
                </button>
            </div>
            <div id={styles.info}>
                <div className={styles.top}>
                    <p>Продавец Сергей</p>
                    <Image src={"/verified.svg"} alt="verified" width={16} height={16}/>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.rating}>4.9</p>
                    <div className={styles.stars}>
                        <Image src={"/star.svg"} alt="star" width={16} height={16} />
                        <Image src={"/star.svg"} alt="star" width={16} height={16} />
                        <Image src={"/star.svg"} alt="star" width={16} height={16} />
                        <Image src={"/star.svg"} alt="star" width={16} height={16} />
                        <Image src={"/empty_star.svg"} alt="empty star" width={16} height={16} />
                    </div>
                    <p className={styles.reviews}>215 отзывов</p>
                </div>
                
            </div>
            <div id={styles.management}>
                <div className={styles.element}>
                    <Image src={"/wallet.svg"} alt="wallet" width={24} height={24}/>
                    <p className={styles.title}>Кошелек</p>
                    <p className={styles.amount}>29 990 ₽</p>
                </div>
                <div className={styles.element}>
                    <Image src={"/gift.svg"} alt="gift" width={24} height={24}/>
                    <p className={styles.title}>Бонусы</p>
                    <p className={styles.amount}>4 000</p>
                </div>
                <div className={styles.element}>
                    <Image src={"/hand_coins.svg"} alt="hand_coins" width={24} height={24}/>
                    <p className={styles.title}>Аванс</p>
                    <p className={styles.amount}>500 ₽</p>
                </div>
            </div>
            <hr />
            <div id={styles.actions}>
                <button className={classNames(styles.action, styles.active)}>
                    Сводка
                </button>
                <button className={styles.action}>
                    Мои объявления
                </button>
                <button className={styles.action}>
                    Сообщения
                </button>
                <button className={styles.action}>
                    Статистика
                </button>
                <button className={styles.action}>
                    Управление профилем
                </button>
                <button className={styles.action}>
                    Настройки
                </button>
            </div>
            <hr />
            <div id={styles.signOut}>
                <button className={styles.signOutButton}>
                    <Image src={"/sign_out.svg"} alt="sign_out" width={24} height={24}/>
                    <p>Выйти</p>
                </button>
            </div>
        </div>
    </div>
}

export default Sidebar;


