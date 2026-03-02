import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className={`navbar navbar-expand-lg nav-dark ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">{title}</a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarContent"
        >
          <div className="navbar-nav ms-auto">
            {links.map((value, index) => (
              <Link key={index} href={value.link}>
                <a className="nav-link">{value.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
