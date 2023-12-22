"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { useState } from "react";
import {
  Bars2Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={198} height={42} />
          </Link>
        </div>
        <div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? <XMarkIcon /> : <Bars2Icon />}
          </div>
          <ul className={`${styles.menuList} ${isMenuOpen ? styles.open : ""}`}>
            <li className={styles.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.menuItem} onClick={toggleDropdown}>
              <p className={styles.dropdown}>
                <span>Products</span>
                <span className={styles.dropdownIcon}>
                  <ChevronDownIcon />
                </span>
              </p>
              <ul
                className={`${styles.submenu} ${
                  isDropdownOpen ? styles.showSubmenu : ""
                }`}
              >
                <li className={styles.submenuItem}>
                  <Link href="/pratictioners">For Practitioner</Link>
                </li>
                <li className={styles.submenuItem}>
                  <Link href={"/patients"}>For Patients</Link>
                </li>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contact">Contact us</Link>
            </li>
            <div className={styles.authLinksMobile}>
              <a href="/pratictioners" className={styles.buttonSignup}>
                Signup <ChevronRightIcon className="btn-icon" />
              </a>
            </div>
          </ul>
        </div>
        <div className={styles.authLinks}>
          <a href="/pratictioners" className={styles.buttonSignup}>
            Signup <ChevronRightIcon className="btn-icon" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
