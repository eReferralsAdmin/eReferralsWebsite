"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/Header.css";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Image src={"/logo.svg"} width={198} height={42} alt="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <Image
            src={"/hamburger.svg"}
            width={30}
            height={10}
            alt="hamburger"
          />
        </div>
        <nav className={`menu ${isMenuOpen ? "is-active" : ""}`}>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
