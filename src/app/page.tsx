"use client"
import Statistics from "@/components/statistics/Statistics";
import styles from "./main.module.scss";
import classNames from "classnames";
import Incomes from "@/components/incomes/Incomes";
import Ads from "@/components/ads/Ads";
import ServiceLevel from "@/components/service_level/ServiceLevel";
import Activity from "@/components/activity/Activity";

export default function Home() {
  return (
    <div className={classNames("w-full h-full", styles.wrapper)}>
      <h1>Сводка</h1>
      <div className={styles.content}>
        <section id={styles.statistics} className={styles.section}>
          <Statistics />
        </section>
        <div className={styles.row}>
          <section id={styles.incomes} className={styles.section}>
            <Incomes />
          </section>
          <section id={styles.ads} className={styles.section}>
            <Ads />
          </section>
        </div>
        <div className={styles.row}>
          <section id={styles.service_lvl} className={styles.section}>
            <ServiceLevel />
          </section>
          <section id={styles.activity} className={styles.section}>
            <Activity />
          </section>
        </div>
      </div>
    </div>
  );
}
