import styles from "./MobileNavbar.module.scss";
import Image from "next/image";
import catalog from "@/assets/catalog.svg";
import heart_straight from "@/assets/heart_straight.svg";
import chat_text from "@/assets/chat_text.svg";
import user from "@/assets/user.svg";
import list_plus from "@/assets/list_plus.svg";
import classNames from "classnames";

export default function MobileNavbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.tabs}>
                <div className={styles.tab}>
                    <Image src={catalog} alt="catalog" />
                    <p>Каталог</p>
                </div>
                <div className={styles.tab}>
                    <Image src={list_plus} alt="ads" />
                    <p>Объявления</p>
                </div>
                <div className={styles.tab}>
                    <Image src={heart_straight} alt="favorites" />
                    <p>Избранное</p>
                </div>
                <div className={classNames(`relative`, styles.tab)}>
                    <Image src={chat_text} alt="messages" />
                    <p>Сообщения</p>
                    <div className="absolute -top-1 right-3 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">2</span>
                    </div>
                </div>
                <div className={styles.tab}>
                    <Image src={user} alt="profile" />
                    <p>Профиль</p>
                </div>
            </div>
        </div>
    )
}
