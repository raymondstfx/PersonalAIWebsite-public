"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#assistant", label: "AI Assistant" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" onClick={closeMenu}>
        Xiyao Huang
      </a>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="menu-toggle"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
