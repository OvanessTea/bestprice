import React from "react";
import styles from "./Footer.module.scss";
import map_pin from "@/assets/map_pin.svg";
import Image from "next/image";
import classNames from "classnames";
import google_play from "@/assets/google_play.svg";
import app_store from "@/assets/app_store.svg";
import Link from "next/link";
import caret_up from "@/assets/caret_up.svg";

const Footer = () => {
    const footerClass = classNames(
        `w-full flex items-center justify-between`,
        styles.footer
    );

    return <div className={footerClass}>
        <div className={styles.content}>
            <div id={styles.location} className="flex items-center gap-2">
                <div className={styles.locationIcon}>
                    <Image src={map_pin} alt="location" />
                </div>
                <p>Москва</p>
            </div>
            <div id={styles.mobile_apps}>
                <p>Мобильные приложения:</p>
                <button>
                    <Image src={google_play} alt="google_play" />
                </button>
                <button>
                    <Image src={app_store} alt="app_store" />
                </button>
            </div>
            <div id={styles.social_media}>
                <p>Социальные сети:</p>
                <button>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7621_53921)">
                            <path className={styles.telegram} d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#C3C5CC" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.03117 14.5964C12.0577 12.7618 14.7427 11.5523 16.0861 10.968C19.9219 9.2995 20.7189 9.00967 21.2384 9.0001C21.3527 8.998 21.6082 9.02761 21.7737 9.16804C21.9134 9.28661 21.9518 9.44679 21.9702 9.55921C21.9886 9.67163 22.0115 9.92773 21.9933 10.1278C21.7855 12.4118 20.8861 17.9545 20.4285 20.5127C20.2349 21.5951 19.8536 21.958 19.4845 21.9936C18.6824 22.0707 18.0734 21.4392 17.2965 20.9067C16.0809 20.0733 15.3941 19.5545 14.2141 18.7413C12.8504 17.8015 13.7344 17.285 14.5116 16.4409C14.715 16.22 18.249 12.8583 18.3174 12.5533C18.326 12.5152 18.3339 12.373 18.2532 12.298C18.1724 12.2229 18.0532 12.2486 17.9672 12.269C17.8453 12.2979 15.9033 13.6403 12.1411 16.2961C11.5899 16.6919 11.0906 16.8848 10.6433 16.8747C10.1501 16.8635 9.20146 16.5831 8.49623 16.3433C7.63124 16.0493 6.94377 15.8938 7.00363 15.3944C7.03481 15.1343 7.37733 14.8683 8.03117 14.5964Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7621_53921">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className={styles.vk} cx="16" cy="16" r="16" fill="#C3C5CC" />
                        <path d="M16.8039 21.6145C10.6539 21.6145 7.14617 17.3984 7 10.3828H10.0806C10.1818 15.5321 12.4528 17.7132 14.2517 18.1629V10.3828H17.1524V14.8237C18.9288 14.6326 20.7949 12.6089 21.4245 10.3828H24.3253C23.8419 13.1261 21.8181 15.1498 20.379 15.9818C21.8181 16.6564 24.123 18.4215 25 21.6145H21.8069C21.1211 19.4784 19.4123 17.8256 17.1524 17.6008V21.6145H16.8039Z" fill="white" />
                    </svg>

                </button>
                <button>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className={styles.youtube} cx="16" cy="16" r="16" fill="#C3C5CC" />
                        <g clipPath="url(#clip0_7621_53911)">
                            <path d="M23.6811 12.1233C23.5906 11.7829 23.4123 11.4722 23.1641 11.2224C22.9159 10.9725 22.6063 10.7923 22.2665 10.6996C21.0156 10.3633 16.0156 10.3633 16.0156 10.3633C16.0156 10.3633 11.0156 10.3633 9.76472 10.6996C9.42491 10.7923 9.1154 10.9725 8.86715 11.2224C8.6189 11.4722 8.44063 11.7829 8.35017 12.1233C8.01563 13.3796 8.01562 15.9996 8.01562 15.9996C8.01562 15.9996 8.01563 18.6196 8.35017 19.876C8.44063 20.2164 8.6189 20.5271 8.86715 20.7769C9.1154 21.0267 9.42491 21.207 9.76472 21.2996C11.0156 21.636 16.0156 21.636 16.0156 21.636C16.0156 21.636 21.0156 21.636 22.2665 21.2996C22.6063 21.207 22.9159 21.0267 23.1641 20.7769C23.4123 20.5271 23.5906 20.2164 23.6811 19.876C24.0156 18.6196 24.0156 15.9996 24.0156 15.9996C24.0156 15.9996 24.0156 13.3796 23.6811 12.1233Z" fill="white" />
                            <path className={styles.youtube} d="M14.3828 18.3793V13.6211L18.5646 16.0002L14.3828 18.3793Z" fill="#D0D1D9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7621_53911">
                                <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div id={styles.actions}>
                <Link href="/">Помощь</Link>
                <Link href="/">О нас</Link>
                <Link href="/">Оферта</Link>
                <Link href="/">Блог</Link>
                <Link href="/">Карта сайта</Link>
            </div>
            <div id={styles.water_mark}>
                <p>© Bestprice, 2024</p>
            </div>
        </div>
        <div className={styles.overflow}>
            <div className={styles.messages}>
                <p className={styles.messages_title}>Сообщения</p>
                <div className={styles.messages_count}>
                    <p>2</p>
                </div>
            </div>
            <button className={styles.open_chat}>
                <Image src={caret_up} alt="open_chat" />
            </button>
        </div>
    </div>
};

export default Footer;
