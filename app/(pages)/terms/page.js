import React from "react";
import styles from "./terms.module.css";

const TermsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Terms and Conditions</h1>
      <div className={styles.content}>
        <p>
          Yahaan aap apne terms and conditions ka content likhenge. Is content
          ko aap apni zarurat ke mutabiq customize kar sakte hain.
        </p>
        <p>
          Aapko chahiye ke aap yahaan par sabhi zaroori maloomat faraham karein
          takay users ko aapki website ya service istemal karne ke terms samajh
          aayein.
        </p>
        {/* Aur content yahaan jari rahega */}
      </div>
    </div>
  );
};

export default TermsPage;
