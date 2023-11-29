import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link href="#" className="nav__logo">
            <Image
              src="/logo.svg"
              height={42}
              width={198}
              alt="eRefferals Logo"
            />
          </Link>
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-equal-fill nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <Link href="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="dropdown__item">
              <div className="nav__link">
                Products
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul className="dropdown__menu">
                <li>
                  <Link href="#" className="dropdown__link">
                    For Practitioner
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown__link">
                    For Patients
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className="nav__link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="nav__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Script src="/javascript/header.js"></Script>
    </header>
  );
};

export default Header;