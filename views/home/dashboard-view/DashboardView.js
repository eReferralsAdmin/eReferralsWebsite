import React from "react";
import Image from "next/image";
import styles from "./dashboard-view.module.css";

const DashboardView = () => {
  return (
    <section className={styles.dashboardViews}>
      <div className={styles.appView}></div>
    </section>
  );
};

export default DashboardView;
