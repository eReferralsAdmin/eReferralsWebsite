import React from "react";
import Image from "next/image";
import styles from "./dashboard-view.module.css";

const DashboardView = () => {
  return (
    <section className={styles.dashboardViews}>
      <img
        src="/images/dashbaord-views.svg"
        alt="Healthcare Dashboard with Practitioner and Patient Views"
      />
    </section>
  );
};

export default DashboardView;
