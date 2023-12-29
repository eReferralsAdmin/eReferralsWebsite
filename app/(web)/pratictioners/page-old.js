import Image from "next/image";
import styles from "./patients.module.css";

const PatientsPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.graphSection}>
        <div className={styles.graphCard}>
          <Image
            src={"/images/graph.png"}
            className={styles.graphImage}
            width={878}
            height={280}
            // style={{
            //   maxWidth: "516px",
            //   height: "auto",
            //   objectFit: "cover",
            //   margin: "auto",
            // }}
          />
        </div>
        <div className={styles.infoSection}>
          <h1 className={styles.mainTitle}>
            Manage your hospital inventory easily
          </h1>
          <p className={styles.description}>
            This chapter introduces the topic of error as an essential
            foundation for an understanding of patient safety. We introduce
            psychological classifications of error and then, using clinical
            examples
          </p>
        </div>
      </div>

      <div className={styles.benefits}>
        <div className={styles.benefitItem}>
          <Image
            className={styles.icon}
            src="/images/dashboard.svg"
            height={29}
            width={29}
          />
          <span className={styles.benefitItemTitle}>Easy management</span>
        </div>
        <div className={styles.benefitItem}>
          <Image
            className={styles.icon}
            src="/images/energy.svg"
            height={29}
            width={29}
          />
          <span className={styles.benefitItemTitle}>
            Increase Hospital Efficiency
          </span>
        </div>
        <div className={styles.benefitItem}>
          <Image
            className={styles.icon}
            src="/images/support.svg"
            height={29}
            width={29}
          />
          <span className={styles.benefitItemTitle}>24/7 Live Support</span>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
