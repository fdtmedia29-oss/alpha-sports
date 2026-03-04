"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems, siteConfig } from "@/lib/content";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-dark/90 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-36">
          <Image
            src="/images/logo-white.png"
            alt="Alpha Sports"
            fill
            className={`object-contain object-left transition-all duration-300 ${
              scrolled ? "brightness-0" : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-text-secondary hover:text-text"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[200px] rounded-xl border border-border bg-white p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-alt hover:text-text"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={"href" in item ? item.href : "#"}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-text-secondary hover:text-text"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link
          href={siteConfig.bookingUrl}
          className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-colors lg:block ${
            scrolled
              ? "bg-dark text-white hover:bg-dark-surface"
              : "bg-white text-dark hover:bg-white/90"
          }`}
        >
          Beratung buchen
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 lg:hidden ${
            scrolled ? "text-text" : "text-white"
          }`}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 overflow-y-auto bg-white lg:hidden">
          <div className="flex flex-col gap-2 p-6">
            {navItems.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-3 text-lg font-medium text-text"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 text-muted transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 flex flex-col gap-1 border-l-2 border-border pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-base text-text-secondary transition-colors hover:text-text"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={"href" in item ? item.href : "#"}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-lg font-medium text-text"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href={siteConfig.bookingUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-4 block rounded-full bg-dark py-4 text-center text-base font-semibold text-white"
            >
              Beratung buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
