"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/header.module.css";
import {
  Bars2Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const variants = {
    opened: { rotate: 90 },
    closed: { rotate: 0 },
  };

  // const menuVariants = {
  //   open: {
  //     opacity: 1,
  //     y: 0, // y-axis pe slide down karega
  //   },
  //   closed: {
  //     opacity: 0,
  //   },
  // };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={198} height={42} />
          </Link>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <motion.div
            variants={variants}
            animate={isMenuOpen ? "opened" : "closed"}
            initial="closed"
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <XMarkIcon /> : <Bars2Icon />}
          </motion.div>
        </div>
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.menuItem} style={{ position: "relative" }}>
              <span className={styles.dropdown}>Products</span>
              <ul className={styles.submenu}>
                <li className={styles.submenuItem}>For Practitioner</li>
                <li className={styles.submenuItem}>For Patients</li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
          <div className={styles.authButtons}>
            <Link href="/" className="btn-primary">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
