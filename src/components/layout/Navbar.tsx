"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { EASE_OUT, tapScale } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("webvorn-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("webvorn-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE_OUT }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          padding: scrolled ? "0.65rem 0" : "1rem 0",
          background: scrolled ? "var(--glass-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
          transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >


        <div className="section-container flex items-center justify-between gap-4">
          <a
            href="/"
            className="group flex items-center gap-2.5 no-underline"
            id="navbar-logo"
            aria-label="Webvorn home"
          >
            <div
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 14px 28px rgba(52, 211, 153, 0.16)",
              }}
            >
              <span
                className="relative z-10 text-lg font-bold text-[#07100d]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                W
              </span>
            </div>
            <span
              className="text-xl font-bold"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Webvorn
            </span>
          </a>

          <div
            className="hidden items-center gap-1 rounded-full border px-1.5 py-1 lg:flex"
            style={{
              borderColor: "var(--color-border)",
              background: "rgba(255,255,255,0.035)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium no-underline transition-colors duration-300"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = "var(--color-text-primary)";
                  event.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = "var(--color-text-secondary)";
                  event.currentTarget.style.background = "transparent";
                }}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <motion.button
              whileTap={tapScale}
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.045)",
                color: "var(--color-text-secondary)",
                borderColor: "var(--color-border)",
              }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              id="theme-toggle"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <MagneticButton strength={8}>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                href="/contact"
                className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex"
                id="nav-cta"
                data-cursor="pointer"
              >
                <span className="flex items-center gap-2">
                  Start Project <ArrowRight size={15} />
                </span>
              </motion.a>
            </MagneticButton>

            <motion.button
              whileTap={tapScale}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border cursor-pointer lg:hidden"
              style={{
                background: "rgba(255,255,255,0.045)",
                color: "var(--color-text-primary)",
                borderColor: "var(--color-border)",
              }}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "rgba(7, 10, 13, 0.62)",
              backdropFilter: "blur(10px)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.36, ease: EASE_OUT }}
              className="absolute bottom-0 right-0 top-0 flex w-80 max-w-[86vw] flex-col gap-2 p-6 pt-24"
              style={{
                background: "var(--color-bg-secondary)",
                borderLeft: "1px solid var(--color-border)",
                boxShadow: "-24px 0 70px rgba(0,0,0,0.42)",
              }}
              onClick={(event) => event.stopPropagation()}
              id="mobile-menu"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.05 }}
                  className="rounded px-4 py-3 text-lg font-medium no-underline"
                  style={{ color: "var(--color-text-primary)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
                <a
                  href="/contact"
                  className="btn-primary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Your Project <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
