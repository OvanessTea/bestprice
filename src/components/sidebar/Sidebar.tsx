import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import classNames from "classnames";
import camera from "@/assets/camera.svg";
import verified from "@/assets/verified.svg";
import star from "@/assets/star.svg";
import empty_star from "@/assets/empty_star.svg";
import wallet from "@/assets/wallet.svg";
import gift from "@/assets/gift.svg";
import hand_coins from "@/assets/hand_coins.svg";
import sign_out from "@/assets/sign_out.svg";

const Sidebar = () => {
    return <div className={styles.sidebar}>
        <div className={styles.content}>
            <div id={styles.avatar}>
                <Image className={classNames("rounded-lg", styles.avatarImage)} src={avatar} alt="avatar" />
                <button className={styles.avatarIcon}>
                    <Image src={camera} alt="camera" />
                </button>
            </div>
            <div id={styles.info}>
                <div className={styles.top}>
                    <p>Продавец Сергей</p>
                    <Image src={verified} alt="verified" />
                </div>
                <div className={styles.bottom}>
                    <p className={styles.rating}>4.9</p>
                    <div className={styles.stars}>
                        <Image src={star} alt="star" />
                        <Image src={star} alt="star" />
                        <Image src={star} alt="star" />
                        <Image src={star} alt="star" />
                        <Image src={empty_star} alt="empty star" />
                    </div>
                    <p className={styles.reviews}>215 отзывов</p>
                </div>
                
            </div>
            <div id={styles.management}>
                <div className={styles.element}>
                    <Image src={wallet} alt="wallet" />
                    <p className={styles.title}>Кошелек</p>
                    <p className={styles.amount}>29 990 ₽</p>
                </div>
                <div className={styles.element}>
                    <Image src={gift} alt="gift" />
                    <p className={styles.title}>Бонусы</p>
                    <p className={styles.amount}>4 000</p>
                </div>
                <div className={styles.element}>
                    <Image src={hand_coins} alt="hand_coins" />
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
                    <Image src={sign_out} alt="sign_out" />
                    <p>Выйти</p>
                </button>
            </div>
        </div>
    </div>
}

export default Sidebar;


