"use client";
import React, { useState } from "react";
import styles from "./ereferrals.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const EReferrals = ({ practitionersData, patientsData }) => {
  const [activeTab, setActiveTab] = useState("practitioners");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.eReferralsSection}>
      <h2>Learn more about eReferrals</h2>
      <div className={styles.ereferralContent}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleBtn} ${
              activeTab === "practitioners" ? styles.active : ""
            }`}
            aria-pressed={activeTab === "practitioners"}
            onClick={() => toggleTab("practitioners")}
          >
            For Practitioners
          </button>
          <button
            className={`${styles.toggleBtn} ${
              activeTab === "patients" ? styles.active : ""
            }`}
            aria-pressed={activeTab === "patients"}
            onClick={() => toggleTab("patients")}
          >
            For Patients
          </button>
        </div>
        {activeTab === "practitioners" && (
          <div className={styles.ereferralInfo}>
            <div className={styles.imageContainer}>
              <Image
                src="/home/new-referral.webp"
                alt="eReferrals information graphic"
                width={348}
                height={335}
                style={{
                  maxWidth: "516px",
                  height: "auto",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
            </div>
            <div className={styles.advancedSearch}>
              <h3>{practitionersData.title}</h3>
              <p>{practitionersData.description}</p>
              <Link href="/pratictioners" className={styles.buttonInterested}>
                View More <ChevronRightIcon className="btn-icon" />
              </Link>
            </div>
          </div>
        )}
        {activeTab === "patients" && (
          <div className={styles.ereferralInfo}>
            <div className={styles.imageContainer}>
              <Image
                src="/home/search-provider.webp"
                alt="eReferrals information graphic"
                width={348}
                height={335}
                style={{
                  maxWidth: "516px",
                  height: "auto",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
            </div>
            <div className={styles.advancedSearch}>
              <h3>{patientsData.title}</h3>
              <p>{patientsData.description}</p>
              <a href="/patients" className={styles.buttonInterested}>
                View More <ChevronRightIcon className="btn-icon" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EReferrals;
