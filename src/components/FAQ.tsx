import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(0);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-brand-cream px-4 sm:px-6 lg:px-8 border-b-4 border-brand-charcoal relative overflow-hidden">
<div className="absolute top-1/3 left-10 w-24 h-24 bg-brand-teal/10 rounded-full blur-xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-brand-coral text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="w-5 h-5 text-brand-coral" />
            {t("faqs.badge")}
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal">
            {t("faqs.title")}
          </h3>
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/85 max-w-2xl mx-auto">
            {t("faqs.subtitle")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-6">
          {(t("faqs_list", { returnObjects: true }) as Array<{ question: string; answer: string }>).map((faq, index) => {
            const isExpanded = expandedId === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border-4 border-brand-charcoal rounded-2xl overflow-hidden transition-all duration-200 ${
                  isExpanded 
                    ? "bg-brand-card shadow-neo-sm" 
                    : "bg-brand-card shadow-neo-xs hover:shadow-neo-sm hover:translate-y-[-1px]"
                }`}
              >
                {/* Header button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  id={`faq-toggle-${index}`}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span className="font-display text-xl sm:text-2xl font-black text-brand-coral shrink-0 select-none">
                      Q.
                    </span>
                    <span className="font-display text-base sm:text-lg font-black text-brand-charcoal leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full border-2 border-brand-charcoal shrink-0 transition-transform duration-200 ${
                    isExpanded 
                      ? "bg-brand-yellow text-brand-charcoal rotate-180" 
                      : "bg-brand-card text-brand-charcoal"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Body Details (Animated) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-14 border-t-2 border-brand-charcoal/10 pt-4 bg-brand-cream/10">
                        <p className="font-sans text-brand-charcoal/80 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
