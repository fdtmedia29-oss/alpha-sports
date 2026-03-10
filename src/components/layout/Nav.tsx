"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems, siteConfig } from "@/lib/content";

// Important links shown in top row (always visible)
const primaryLabels = new Set([
  "Kostenloses Beratungsgespräch",
  "Personal Training",
  "Gruppenkurse",
  "Ernährungsberatung",
]);

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);

    if (y > 100) {
      // Scrolling down → collapse secondary row
      if (y > lastScrollY.current + 5) {
        setCollapsed(true);
      }
      // Scrolling up → expand secondary row
      if (y < lastScrollY.current - 5) {
        setCollapsed(false);
      }
    } else {
      setCollapsed(false);
    }

    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const primaryItems = navItems.filter((item) => primaryLabels.has(item.label));
  const secondaryItems = navItems.filter((item) => !primaryLabels.has(item.label));

  const renderNavItem = (item: (typeof navItems)[number]) => {
    if ("children" in item && item.children) {
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
              scrolled
                ? "text-text-secondary hover:text-text"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.label}
            <ChevronDown className="h-3 w-3" />
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
      );
    }
    return (
      <Link
        key={item.label}
        href={"href" in item ? item.href : "#"}
        className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
          scrolled
            ? "text-text-secondary hover:text-text"
            : "text-white/70 hover:text-white"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-dark/90 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6">
        {/* Top row: logo + primary links + CTA + mobile toggle */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-32 shrink-0">
            <Image
              src="/images/alpha-logo-B-personaltraining.png"
              alt="Alpha Sports"
              fill
              className={`object-contain object-left transition-all duration-300 ${
                scrolled || mobileOpen ? "" : "invert"
              }`}
              priority
            />
          </Link>

          {/* Primary nav links — always visible on desktop */}
          <div className="hidden items-center gap-x-1 lg:flex">
            {primaryItems.map(renderNavItem)}
          </div>

          {/* Desktop CTA */}
          <Link
            href={siteConfig.bookingUrl}
            className={`hidden shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors lg:block ${
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
              scrolled || mobileOpen ? "text-text" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Secondary row — hides on scroll down, returns on scroll up */}
        {!collapsed && (
          <div
            className={`hidden border-t lg:block ${
              scrolled ? "border-border/50" : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-center gap-x-1 pb-3 pt-2">
              {secondaryItems.map(renderNavItem)}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
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
