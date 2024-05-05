"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { useEffect, useState } from "react";
import {
  Bars2Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

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
                  <Link href="/pratictioners">For Practitioners</Link>
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
              <Link
                href="/pratictioners-signup"
                className={styles.buttonSignup}
              >
                Sign Up <ChevronRightIcon className="btn-icon" />
              </Link>
            </div>
          </ul>
        </div>
        <div className={styles.authLinks}>
          <Link href="/pratictioners-signup" className={styles.buttonSignup}>
            Sign Up <ChevronRightIcon className="btn-icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
