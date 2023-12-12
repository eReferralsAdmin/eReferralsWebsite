import React from "react";
import Image from "next/image";
import styles from "./dashboard-view.module.css";

const DashboardView = () => {
  return (
    <section className={styles.dashboardViews}>
      <div className={styles.appView}></div>
      {/* <Image
        src="/images/dashboard-view-mobile.svg"
        alt="Healthcare Dashboard with Practitioner and Patient Views"
        sizes="(max-width: 768px) 100vw, 700px"
        fill
      /> */}
    </section>
  );
};

export default DashboardView;
