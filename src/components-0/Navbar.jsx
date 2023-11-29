import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.svg" className="logo" alt="eReferrals Logo" width={198} height={42} />
      </Link>
      <nav>
        <ul className="nav__links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#">
              Products <Image src="arrow-down.svg" width={9} height={4} />
            </a>
            {/* <div>
              <Link href="/product-1">Product 1</Link>
              <Link href="/product-2">Product 2</Link>
              <Link href="/product-3">Product 3</Link>
            </div> */}
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
