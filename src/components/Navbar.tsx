import { useState, useEffect, useRef } from "react";
import { Menu, X, MessageCircle, Sun, Moon, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function Navbar({ onScrollTo, theme, setTheme }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuManuallyOpen, setIsMenuManuallyOpen] = useState(false);

  // Guard that prevents the scroll handler from collapsing the navbar
  // while a programmatic (nav-click) smooth scroll is in progress.
  const isNavigating = useRef(false);

  const lang = i18n.language as "en" | "id" | "zh";

  const navItems = [
    { label: t("nav.home"), id: "home" },
    { label: t("nav.whyChooseUs"), id: "why-choose-us" },
    { label: t("nav.courses"), id: "courses" },
    { label: t("nav.founder"), id: "founder" },
    { label: t("nav.faqs"), id: "faqs" },
  ];

  // ── Nav click handler ────────────────────────────────────────────
  const handleNavClick = (sectionId: string) => {
    isNavigating.current = true;
    setIsOpen(false);
    onScrollTo(sectionId);
    // Fallback reset for browsers without scrollend support.
    setTimeout(() => {
      isNavigating.current = false;
    }, 2000);
  };

  // Reset the guard once the smooth scroll finishes.
  // scrollend is standard; timeout is a fallback for older browsers.
  useEffect(() => {
    const resetGuard = () => {
      isNavigating.current = false;
    };
    window.addEventListener("scrollend", resetGuard);
    return () => window.removeEventListener("scrollend", resetGuard);
  }, []);

  // Scroll detection to trigger minimized vs expanded layout
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current) return; // ← don't touch state mid-scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMenuManuallyOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-md border-b-4 border-brand-charcoal shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Level 1: Logo & Controls */}
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => onScrollTo("home")}
              className="flex items-center gap-3 group text-left focus:outline-none"
              id="nav-logo-btn"
            >
              <div className="w-11 h-11 bg-white rounded-full overflow-hidden">
                <img
                  src="/src/assets/images/brand.png"
                  alt="Miss Vey's Classroom"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-display text-lg sm:text-xl font-black tracking-tight text-brand-charcoal leading-none">
                  {t("nav.logoTitle")}
                </span>
                <span className="block font-display text-xs font-bold tracking-widest text-brand-coral uppercase leading-none mt-1.5">
                  {t("nav.logoSubtitle")}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Right Side Controls */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Scrolled Menu Down-Arrow Toggle Button */}
            {isScrolled && (
              <button
                onClick={() => setIsMenuManuallyOpen(!isMenuManuallyOpen)}
                className="flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-charcoal px-3 py-1.5 rounded-xl border-2 border-brand-charcoal shadow-neo-sm font-display text-xs font-black uppercase tracking-wider cursor-pointer transition-transform active:scale-95"
              >
                <span>Menu</span>
                {isMenuManuallyOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}

            {/* Language Switch */}
            <div className="flex items-center gap-0.5 bg-brand-cream border-2 border-brand-charcoal p-0.5 rounded-xl shadow-neo-sm">
              {(["en", "id", "zh"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => i18n.changeLanguage(l)}
                  className={`px-2 py-0.5 text-xs font-display font-black rounded-lg transition-all cursor-pointer ${
                    lang === l
                      ? "bg-brand-teal text-white border border-brand-charcoal shadow-neo-xs"
                      : "text-brand-charcoal/70 hover:text-brand-charcoal"
                  }`}
                >
                  {l === "en" ? "EN" : l === "id" ? "ID" : "中文"}
                </button>
              ))}
            </div>

            {/* Theme Switcher Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center p-2 rounded-xl border-2 border-brand-charcoal bg-brand-yellow/30 text-brand-charcoal hover:bg-brand-yellow/50 transition-all duration-200 shadow-neo-sm cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="theme-toggle-desktop"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-brand-charcoal fill-brand-charcoal/20" />
              )}
            </button>

            {/* Contact Pill Button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center gap-2 bg-brand-teal text-white font-display font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-full border-2 border-brand-charcoal shadow-neo shadow-brand-charcoal hover:translate-y-0.5 active:translate-y-1 transition-all duration-150 cursor-pointer"
              id="nav-contact-btn"
            >
              <MessageCircle className="w-4 h-4" />
              {t("nav.contact")}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-brand-charcoal hover:text-brand-coral hover:bg-brand-yellow/30 focus:outline-none border-2 border-brand-charcoal"
              aria-expanded={isOpen}
              id="nav-mobile-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Level 2: Navigation Links (Horizontal Row on Desktop) */}
        <div className="hidden md:block">
          <motion.div
            initial={{ height: "auto", opacity: 1, marginTop: "0.5rem" }}
            animate={{
              height: (!isScrolled || isMenuManuallyOpen) ? "auto" : 0,
              opacity: (!isScrolled || isMenuManuallyOpen) ? 1 : 0,
              marginTop: (!isScrolled || isMenuManuallyOpen) ? "0.5rem" : "0px",
              pointerEvents: (!isScrolled || isMenuManuallyOpen) ? "auto" : "none"
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex justify-center items-center gap-6 py-2 border-t border-brand-charcoal/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-charcoal/80 hover:text-brand-coral px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-b-4 border-brand-charcoal px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {/* Mobile Language Switch - Simplified */}
          <div className="flex items-center justify-between px-3 py-2 bg-brand-card border-2 border-brand-charcoal rounded-xl shadow-neo-sm mb-3">
            <span className="font-display text-xs font-black text-brand-charcoal uppercase tracking-wider">{t("nav.labelLanguage")}</span>
            <div className="flex items-center gap-1 bg-brand-cream border-2 border-brand-charcoal p-0.5 rounded-lg">
              {(["en", "id", "zh"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => i18n.changeLanguage(l)}
                  className={`px-2.5 py-0.5 text-xs font-display font-black rounded-md transition-all cursor-pointer ${
                    lang === l
                      ? "bg-brand-teal text-white border border-brand-charcoal"
                      : "text-brand-charcoal/70"
                  }`}
                >
                  {l === "en" ? "EN" : l === "id" ? "ID" : "中文"}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Theme Switch - Simplified */}
          <div className="flex items-center justify-between px-3 py-2 bg-brand-card border-2 border-brand-charcoal rounded-xl shadow-neo-sm mb-3">
            <span className="font-display text-xs font-black text-brand-charcoal uppercase tracking-wider">{t("nav.labelTheme")}</span>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-1.5 px-3 py-1 bg-brand-cream border-2 border-brand-charcoal rounded-lg shadow-neo-xs text-brand-charcoal font-display text-xs font-black cursor-pointer"
              id="theme-toggle-mobile"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-brand-charcoal/40" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left font-sans font-bold text-xs uppercase tracking-widest text-brand-charcoal/80 hover:text-brand-coral hover:bg-brand-yellow/20 px-4 py-3 rounded-xl transition-colors duration-150 cursor-pointer"
              id={`nav-mobile-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t-2 border-brand-charcoal/10">
            <button
              onClick={() => handleNavClick("contact")}
              className="flex w-full items-center justify-center gap-2 bg-brand-teal text-white font-display font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl border-2 border-brand-charcoal shadow-neo transition-all duration-150 cursor-pointer"
              id="nav-mobile-contact"
            >
              <MessageCircle className="w-5 h-5" />
              {t("nav.contact")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
