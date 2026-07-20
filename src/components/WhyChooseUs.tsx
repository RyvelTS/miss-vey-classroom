import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-brand-cream px-4 sm:px-6 lg:px-8 border-b-4 border-brand-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="font-display text-brand-coral text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            {t("whyChooseUs.title")}
          </h2>
          <h3 className="font-sans text-lg sm:text-xl font-bold text-brand-charcoal/90">
            {t("whyChooseUs.subtitle")}
          </h3>
        </div>

        {/* Outer Rows Container */}
        <div className="space-y-24 md:space-y-36">
          {/* ==================== ROW 1 ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (Communication Block & Mascot) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10 order-1 lg:order-1 lg:translate-x-0 lg:z-20">
              {/* Improves Communication */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4">
                <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-coral leading-tight">
                  {t("whyChooseUs.communicationTitle")}
                </h4>
                <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-charcoal/85 leading-relaxed">
                  {t("whyChooseUs.communicationText")}
                </p>
              </motion.div>

              {/* Kasuari Mascot Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center gap-5 pt-6">
                <div className="relative shrink-0">
                  <div className="w-32 h-42 sm:w-40 sm:h-50 lg:w-48 lg:h-58 overflow-visible">
                    <img
                      src="/images/kasuari_1784539786425.png"
                      alt="Kasuari Mascot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Small Speech Bubble */}
                  <div className="absolute -top-4 -right-8 bg-brand-card border-3 border-brand-charcoal px-3 py-1.5 rounded-xl shadow-neo-sm rotate-[-4deg]">
                    <span className="font-display text-base font-black text-brand-coral flex items-center gap-1">
                      {t("whyChooseUs.kasuariSpeech")}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-display text-lg sm:text-xl font-black text-brand-charcoal">
                    {t("whyChooseUs.kasuariStage")}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 italic">
                    {t("courses.kasuari.subtitle")}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Column (Clara Public Speaking Image) */}
            <div className="col-span-full lg:col-span-4 flex justify-center order-3 lg:order-2 lg:z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[320px] sm:max-w-[360px] h-[440px] sm:h-[480px] bg-brand-card border-4 border-brand-charcoal p-4 rounded-[2.5rem] shadow-neo-lg hover:translate-y-[-4px] transition-all duration-200 overflow-hidden">
                {/* Decorative border */}
                <div className="absolute inset-2 border-2 border-dashed border-brand-teal/30 rounded-[2rem] pointer-events-none"></div>

                <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-brand-charcoal z-10">
                  <img
                    src="/images/child_speaking_confident_girl_1784541050155.jpg"
                    alt={t("whyChooseUs.claraAlt")}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column (Echidna Mascot & Builds Confidence Block) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10 order-2 lg:order-3 lg:translate-x-0 lg:z-20">
              {/* Echidna Mascot Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center lg:justify-end gap-5 pb-6 lg:text-right animate-pulse-slow">
                <div className=" order-1 lg:order-1">
                  <p className="font-display text-lg sm:text-xl font-black text-brand-charcoal">
                    {t("whyChooseUs.echidnaStage")}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 italic">
                    {t("courses.echidna.subtitle")}
                  </p>
                </div>
                <div className="relative shrink-0 order-2 lg:order-2">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                    <img
                      src="/images/echidna_1784539773350.png"
                      alt="Echidna Mascot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Small Speech Bubble */}
                  <div className="absolute -top-4 -left-8 bg-brand-card border-3 border-brand-charcoal px-3 py-1.5 rounded-xl shadow-neo-sm rotate-[4deg]">
                    <span className="font-display text-base font-black text-brand-teal flex items-center gap-1">
                      {t("whyChooseUs.echidnaSpeech")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Builds Confidence */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:text-right">
                <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-teal leading-tight">
                  {t("whyChooseUs.confidenceTitle")}
                </h4>
                <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-charcoal/85 leading-relaxed">
                  {t("whyChooseUs.confidenceText")}
                </p>
              </motion.div>
            </div>
          </div>

          {/* ==================== ROW 2 ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (Fun Learning Block & Trio) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10 order-1 lg:order-1 lg:translate-x-0 lg:z-20">
              {/* Fun Learning */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4">
                <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-coral leading-tight">
                  {t("whyChooseUs.learningTitle")}
                </h4>
                <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-charcoal/85 leading-relaxed">
                  {t("whyChooseUs.learningText")}
                </p>
              </motion.div>

              {/* Trio Mascots Collage Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="pt-6">
                <div className="w-full relative inline-block">
                  <div className="flex items-center justify-center -space-x-12 sm:-space-x-14">
                    <div className="w-full h-auto sm:w-64 sm:h-40 lg:w-80 lg:h-48">
                      <img
                        src="/images/trio_1784539786425.png"
                        alt="Trio Mascot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 mt-4 leading-relaxed">
                  {t("whyChooseUs.gamesCaption")}
                </p>
              </motion.div>
            </div>

            {/* Center Column (Leo Public Speaking Image) */}
            <div className="col-span-full lg:col-span-4 flex justify-center order-3 lg:order-2 lg:z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[320px] sm:max-w-[360px] h-[440px] sm:h-[480px] bg-brand-card border-4 border-brand-charcoal p-4 rounded-[2.5rem] shadow-neo-lg hover:translate-y-[-4px] transition-all duration-200 overflow-hidden">
                {/* Decorative border */}
                <div className="absolute inset-2 border-2 border-dashed border-brand-teal/30 rounded-[2rem] pointer-events-none"></div>

                <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-brand-charcoal z-10">
                  <img
                    src="/images/child_speaking_confident_boy_1784541035919.jpg"
                    alt={t("whyChooseUs.leoAlt")}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column (Bear Mascot & Opens Opportunities Block) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10 order-2 lg:order-3 lg:translate-x-0 lg:z-20">
              {/* Bear Mascot Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center lg:justify-end gap-5 pb-6 lg:text-right">
                <div className=" order-1 lg:order-1">
                  <p className="font-display text-lg sm:text-xl font-black text-brand-charcoal">
                    {t("whyChooseUs.bearStage")}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 italic">
                    {t("courses.bear.subtitle")}
                  </p>
                </div>
                <div className="relative shrink-0 order-2 lg:order-2">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                    <img
                      src="/images/bear_1784539797025.png"
                      alt="Bear Mascot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Small Speech Bubble */}
                  <div className="absolute -top-4 -left-8 bg-brand-card border-3 border-brand-charcoal px-3 py-1.5 rounded-xl shadow-neo-sm rotate-[4deg]">
                    <span className="font-display text-base font-black text-brand-teal flex items-center gap-1">
                      {t("whyChooseUs.bearSpeech")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Opens Opportunities */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4 lg:text-right">
                <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-teal leading-tight">
                  {t("whyChooseUs.opportunitiesTitle")}
                </h4>
                <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-charcoal/85 leading-relaxed">
                  {t("whyChooseUs.opportunitiesText")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
