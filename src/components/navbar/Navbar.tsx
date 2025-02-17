import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import Image from "next/image";
import logo from "@/assets/logo.png";
import map_pin from "@/assets/map_pin.svg";
import list_magnifying_glass from "@/assets/list_magnifying_glass.svg";
import heart_straight from "@/assets/heart_straight.svg";
import bell from "@/assets/bell.svg";
import chat_text from "@/assets/chat_text.svg";
import user from "@/assets/user.svg";

const Navbar = () => {
    const navbarClass = classNames(
        `w-full flex items-center justify-between`,
        styles.navbar
    );

    return <div className={navbarClass}>
        <div className={styles.content}>

            <div id={styles.logo} className="h-12 w-12">
                <a href="#">
                    <Image src={logo} alt="logo" width={100} height={100} />
                </a>
            </div>
            <div id={styles.location} className="flex items-center gap-2">
                <button className={styles.locationIcon}>
                    <Image src={map_pin} alt="location" />
                </button>
                <p>Москва</p>
            </div>
            <div id={styles.categories}>
                <button>
                    <Image src={list_magnifying_glass} alt="categories" />
                    <p>Все категории</p>
                </button>
            </div>
            <div id={styles.search}>
                <input type="text" placeholder="Поиск по объявлениям" />
                <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="search" className={styles.searchIcon}></img>
            </div>
            <div id={styles.newPost}>
                <button>Разместить объявление</button>
            </div>
            <div id={styles.actions}>
                <button className={styles.favorites}>
                    <Image src={heart_straight} alt="favorites" />
                </button>
                <button className={styles.notifications}>
                    <Image src={bell} alt="notifications" />                    
                </button>
                <button className={classNames(`relative`, styles.messages)}>
                    <Image src={chat_text} alt="messages" />
                    <div className="absolute -top-0.5 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">2</span>
                    </div>
                </button>
                <button className={styles.profile}>
                    <Image src={user} alt="profile" />
                </button>
            </div>
        </div>
    </div>
}

export default Navbar;