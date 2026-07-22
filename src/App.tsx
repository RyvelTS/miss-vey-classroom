import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Curriculum from "./components/Curriculum";
import MeetFounder from "./components/MeetFounder";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LeafPointerTrail from "./components/LeafPointerTrail";

export default function App() {
  const { t, i18n } = useTranslation();
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      return systemPreference;
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Keep <html lang> in sync with the active locale
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Guard that prevents the Navbar scroll handler from collapsing
  // while a programmatic smooth scroll is in progress.
  const isNavigating = useRef(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      isNavigating.current = true;
      const nav = document.querySelector('nav.sticky');
      const navHeight = nav ? nav.getBoundingClientRect().height : 90;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      // Reset after smooth scroll finishes
      setTimeout(() => {
        isNavigating.current = false;
      }, 1500);
    }
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setTimeout(() => {
      handleScrollToSection("contact");
    }, 100);
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans antialiased text-brand-charcoal flex flex-col selection:bg-brand-teal/30 selection:text-brand-charcoal overflow-x-clip">
      {/* Playful Top Header Bar notification */}
      <div className="bg-brand-coral text-white font-display text-xs sm:text-sm py-2.5 px-4 text-center font-bold tracking-wide shadow-sm">
        {t("banner")}
      </div>

      {/* Main Navbar */}
      <Navbar
        onScrollTo={handleScrollToSection}
        isNavigating={isNavigating}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onScrollTo={handleScrollToSection} />

        {/* 2. Why Parents Choose Us */}
        <WhyChooseUs />

        {/* 3. Curriculum Overview */}
        <Curriculum onSelectCourse={handleSelectCourse} />

        {/* 4. Meet Velita (Founder Story) */}
        <MeetFounder />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. FAQ Accordion */}
        <FAQ />

        {/* 7. Contact Inquiry Form */}
        <ContactForm selectedCourseId={selectedCourseId} />
      </main>

      {/* Footer */}
      <Footer onScrollTo={handleScrollToSection} />

      {/* Global Whirling Leaves Pointer Trail */}
      <LeafPointerTrail />
    </div>
  );
}
