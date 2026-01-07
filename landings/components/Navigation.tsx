"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Collection metadata
const collections = [
  { id: "main", name: "Landings", count: 10, href: "/", accent: "#8b5cf6" },
  {
    id: "masters",
    name: "Masterpieces",
    count: 25,
    href: "/showcases/masterpieces",
    accent: "#c9a227",
  },
  {
    id: "revelations",
    name: "Revelations",
    count: 10,
    href: "/showcases/revelations",
    accent: "#14b8a6",
  },
  {
    id: "ph",
    name: "Products",
    count: 25,
    href: "/product-hunt",
    accent: "#f472b6",
  },
  {
    id: "ideas",
    name: "Blueprints",
    count: 33,
    href: "/blueprints",
    accent: "#22c55e",
  },
];

function getActiveCollection(pathname: string): string {
  if (pathname.startsWith("/showcases/masterpieces")) return "masters";
  if (pathname.startsWith("/showcases/revelations")) return "revelations";
  if (pathname.startsWith("/product-hunt")) return "ph";
  if (pathname.startsWith("/blueprints")) return "ideas";
  if (pathname === "/") return "main";
  return "main";
}

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const activeCollection = getActiveCollection(pathname);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`self-nav ${isHidden ? "hidden" : ""}`}>
      <div className="self-nav-inner">
        <Link href="/" className="self-nav-brand">
          <span className="self-nav-logo">S</span>
          <span className="self-nav-title">SELF</span>
        </Link>

        <div className={`self-nav-links ${isOpen ? "open" : ""}`}>
          {collections.map((col) => (
            <Link
              key={col.id}
              href={col.href}
              className={`self-nav-link ${
                activeCollection === col.id ? "active" : ""
              }`}
              data-collection={col.id}
              onClick={() => setIsOpen(false)}
            >
              <span className="self-nav-link-indicator"></span>
              <span>{col.name}</span>
              <span className="self-nav-link-count">{col.count}</span>
            </Link>
          ))}
        </div>

        <button
          className="self-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
