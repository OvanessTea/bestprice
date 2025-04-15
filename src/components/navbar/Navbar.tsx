import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import Image from "next/image";

const Navbar = () => {
    const navbarClass = classNames(
        `w-full flex items-center justify-between`,
        styles.navbar
    );

    return <div className={navbarClass}>
        <div className={styles.content}>

            <div id={styles.logo} className="h-12 w-12">
                <a href="#">
                    <Image src={"/logo.png"} alt="logo" width={100} height={100} />
                </a>
            </div>
            <div id={styles.location} className="flex items-center gap-2">
                <button className={styles.locationIcon}>
                    <Image src={"/map_pin.svg"} alt="location" width={24} height={24}/>
                </button>
                <p>Москва</p>
            </div>
            <div id={styles.categories}>
                <button>
                    <Image src={"/list_magnifying_glass.svg"} alt="categories" width={24} height={24}/>
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
                    <Image src={"/heart_straight.svg"} alt="favorites" width={24} height={24}/>
                </button>
                <button className={styles.notifications}>
                    <Image src={"/bell.svg"} alt="notifications" width={24} height={24}/>                    
                </button>
                <button className={classNames(`relative`, styles.messages)}>
                    <Image src={"/chat_text.svg"} alt="messages" width={24} height={24}/>
                    <div className="absolute -top-0.5 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">2</span>
                    </div>
                </button>
                <button className={styles.profile}>
                    <Image src={"/user.svg"} alt="profile" width={24} height={24}/>
                </button>
            </div>
        </div>
    </div>
}

export default Navbar;