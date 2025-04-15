import styles from "./MobileNavbar.module.scss";
import Image from "next/image";
import classNames from "classnames";

export default function MobileNavbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.tabs}>
                <div className={styles.tab}>
                    <Image src={"/catalog.svg"} alt="catalog" width={24} height={24}/>
                    <p>Каталог</p>
                </div>
                <div className={styles.tab}>
                    <Image src={"/list_plus.svg"} alt="ads" width={24} height={24}/>
                    <p>Объявления</p>
                </div>
                <div className={styles.tab}>
                    <Image src={"/heart_straight.svg"} alt="favorites" width={24} height={24}/>
                    <p>Избранное</p>
                </div>
                <div className={classNames(`relative`, styles.tab)}>
                    <Image src={"/chat_text.svg"} alt="messages" width={24} height={24}/>
                    <p>Сообщения</p>
                    <div className="absolute -top-1 right-3 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">2</span>
                    </div>
                </div>
                <div className={styles.tab}>
                    <Image src={"/user.svg"} alt="profile" width={24} height={24}/>
                    <p>Профиль</p>
                </div>
            </div>
        </div>
    )
}
