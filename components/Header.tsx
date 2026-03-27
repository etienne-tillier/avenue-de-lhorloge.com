"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container-wide">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src="/icon.svg" alt="Avenue de l&apos;Horloge" width={36} height={36} />
            <div>
              <div className="logo-name">Avenue de l&apos;Horloge</div>
              <div className="logo-tagline">Expert en Horlogerie</div>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="nav-desktop" aria-label="Navigation principale">
            <ul className="nav-links">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={item.title === "Contact" ? "nav-cta" : ""}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              {menuOpen ? (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Menu mobile">
        {siteConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
