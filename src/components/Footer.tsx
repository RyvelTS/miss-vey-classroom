import { Instagram, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { EMAIL } from "../constants";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/missveyclassroom",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t-4 border-brand-charcoal pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b-2 border-brand-cream/10">
        {/* Brand Column (Span 5) */}
        <div className="md:col-span-5 space-y-6">
          <button
            onClick={() => onScrollTo("home")}
            className="flex items-center gap-3 text-left focus:outline-none"
            id="footer-logo-btn">
            <div className="w-10 h-10 bg-white rounded-xl overflow-hidden">
              <img
                src="/images/brand.png"
                alt="Miss Vey's Classroom"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-lg sm:text-xl font-black tracking-tight text-brand-cream leading-none">
                {t("nav.logoTitle")}
              </span>
              <span className="block font-display text-xs font-black tracking-widest text-brand-yellow uppercase leading-none mt-1">
                {t("nav.logoSubtitle")}
              </span>
            </div>
          </button>

          <p className="font-sans text-sm text-brand-cream/70 leading-relaxed max-w-sm font-medium">
            {t("footer.about")}
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-cream text-brand-charcoal hover:bg-brand-yellow hover:text-brand-charcoal rounded-xl border-2 border-brand-charcoal flex items-center justify-center shadow-neo-xs hover:shadow-neo hover:translate-y-[-1px] transition-all duration-150"
                  aria-label={social.label}>
                  <Icon className="w-5 h-5 shrink-0" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Column (Span 3) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display text-xs font-black text-brand-yellow uppercase tracking-widest">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2 font-sans text-sm font-semibold">
            <li>
              <button
                onClick={() => onScrollTo("home")}
                className="text-brand-cream/80 hover:text-brand-teal transition-colors text-left cursor-pointer">
                {t("nav.home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollTo("why-choose-us")}
                className="text-brand-cream/80 hover:text-brand-teal transition-colors text-left cursor-pointer">
                {t("nav.whyChooseUs")}
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollTo("courses")}
                className="text-brand-cream/80 hover:text-brand-teal transition-colors text-left cursor-pointer">
                {t("nav.courses")}
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollTo("founder")}
                className="text-brand-cream/80 hover:text-brand-teal transition-colors text-left cursor-pointer">
                {t("nav.founder")}
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollTo("faqs")}
                className="text-brand-cream/80 hover:text-brand-teal transition-colors text-left cursor-pointer">
                {t("nav.faqs")}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column (Span 4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-display text-xs font-black text-brand-yellow uppercase tracking-widest">
            {t("footer.contact")}
          </h4>

          <ul className="space-y-3 font-sans text-sm font-semibold">
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-brand-teal font-black uppercase tracking-wider text-xs">
                Email:
              </span>
              <a href={`mailto:${EMAIL}`} className="text-brand-cream/80 hover:text-brand-teal transition-colors">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright notes */}
      <div className="pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-sans text-xs text-brand-cream/60">
          &copy; {currentYear} Miss Vey's Classroom. {t("footer.rights")}
        </span>
        <span className="font-sans text-xs text-brand-cream/60 flex items-center gap-1">
          {t("footer.madeWith")}{" "}
          <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral" />{" "}
          {t("footer.madeFor")}
        </span>
      </div>
    </footer>
  );
}
