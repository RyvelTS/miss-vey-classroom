import { motion } from "motion/react";
import {
  Mic,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  Rocket,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "id" | "zh";

  // Quick helper translations for specific hero items
  const extraHeroText = {
    en: {
      funClasses: "Fun classes.",
      realConfidence: "Real confidence!",
      childStory: "Every child has a story!",
      deserves: "Every Child Deserves to Be Heard",
      visionTitle: "Our Vision",
      visionText:
        "To help every child find their voice, develop authentic confidence, and grow into a courageous, thoughtful, and articulate communicator who can express ideas clearly and connect with others.",
      missionTitle: "Our Mission",
      missionText:
        "We empower children through fun, interactive, and highly supportive public speaking classes that build communication skills, creativity, critical thinking, and leadership—one friendly presentation at a time.",
    },
    id: {
      funClasses: "Kelas seru.",
      realConfidence: "Percaya diri nyata!",
      childStory: "Setiap anak punya cerita!",
      deserves: "Setiap Anak Layak Didengar",
      visionTitle: "Visi Kami",
      visionText:
        "Membantu setiap anak menemukan suaranya, membangun rasa percaya diri yang otentik, dan tumbuh menjadi komunikator yang berani, bijaksana, serta mampu menyampaikan ide dengan jelas serta terhubung dengan orang lain.",
      missionTitle: "Misi Kami",
      missionText:
        "Kami memberdayakan anak-anak melalui kelas public speaking yang menyenangkan, interaktif, dan sangat mendukung untuk melatih keterampilan komunikasi, kreativitas, berpikir kritis, serta kepemimpinan.",
    },
    zh: {
      funClasses: "趣味课堂",
      realConfidence: "真自信！",
      childStory: "每个孩子都有故事！",
      deserves: "每个孩子都值得被倾听",
      visionTitle: "我们的愿景",
      visionText:
        "帮助每个孩子找到自己的声音，培养真实的自信，成长为勇敢、有思想、口齿清晰的沟通者，能够清晰地表达想法并与他人建立良好连接。",
      missionTitle: "我们的使命",
      missionText:
        "我们通过趣味、高互动且充满鼓励的公共演讲课程，全面赋予孩子表达、创意、批判性思维与领导力，让孩子在轻松的汇报中自信成长。",
    },
  };

  const extra = extraHeroText[lang];

  // Speech bubble localizations for left and right of the character
  const speechLeft = {
    en: "Hi!",
    id: "Halo!",
    zh: "嗨！",
  }[lang];

  const speechRight = {
    en: "Hello",
    id: "Hai",
    zh: "你好",
  }[lang];

  const welcomeTitle = {
    en: "Welcome to Miss Vey's Classroom",
    id: "Selamat Datang di Miss Vey's Classroom",
    zh: "欢迎来到维老师的课堂 (Miss Vey's Classroom)",
  }[lang];

  // The newly generated high-fidelity crayon mascots matching the style of the mock exactly
  const leftMascotImage =
    "/images/crayon_hedgehog_left_1784544182115.png"
  const rightMascotImage =
    "/images/crayon_bear_right_1784544197161.png"

  return (
    <section
      id="home"
      className="relative overflow-visible bg-brand-cream pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-charcoal">
      {/* Soft natural ambient bubbles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-brand-teal/5 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Desktop Left Absolute Mascot */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 14,
            delay: 0.5,
          }}
          className="hidden lg:block absolute left-[-110px] xl:left-[-160px] top-[140px] w-[330px] xl:w-[420px] z-20 mix-blend-multiply pointer-events-none">
          <img
            src={leftMascotImage}
            alt="Hedgehog mascot waving"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Desktop Right Absolute Mascot */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 14,
            delay: 0.6,
          }}
          className="hidden lg:block absolute right-[-110px] xl:right-[-160px] top-[140px] w-[330px] xl:w-[420px] z-20 mix-blend-multiply pointer-events-none">
          <img
            src={rightMascotImage}
            alt="Bear mascot holding easel"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Core Center Content */}
        <div className="max-w-3xl text-center space-y-6">
          {/* Welcome Classroom Label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center">
            <span className="font-display text-lg sm:text-2xl font-black text-brand-charcoal tracking-wide bg-brand-yellow/10 border-2 border-brand-charcoal/30 px-4 py-1.5 rounded-full">
              {welcomeTitle}
            </span>
          </motion.div>

          {/* Huge Emerald Green Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-heading leading-[1.12]">
            {t("hero.headline")}{" "}
            <span className="underline decoration-brand-yellow decoration-wavy decoration-3 underline-offset-4">
              {t("hero.headlineHighlight")}
            </span>{" "}
          </motion.h1>

          {/* Warm Orange/Coral Highlight Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl sm:text-3xl font-black text-amber-600 tracking-tight">
            {extra.funClasses} {extra.realConfidence}
          </motion.div>

          {/* Clean Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-brand-charcoal/80 max-w-xl mx-auto leading-relaxed">
            {t("hero.subheadline")}
          </motion.p>

          {/* Elegant Custom Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-3">
            {/* Register Pill Button */}
            <button
              onClick={() => onScrollTo("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-display font-extrabold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full border-2 border-brand-charcoal shadow-neo-sm hover:translate-y-0.5 active:translate-y-1 transition-all duration-150 cursor-pointer"
              id="hero-register-btn">
              <MessageCircle className="w-4 h-4" />
              {t("hero.ctaBook")}
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* View Courses Button */}
            <button
              onClick={() => onScrollTo("courses")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-amber-600 hover:text-amber-700 font-display font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:underline transition-all duration-150 cursor-pointer"
              id="hero-courses-btn">
              <BookOpen className="w-4 h-4" />
              {t("hero.ctaCourses")}
            </button>
          </motion.div>
        </div>

        {/* Mobile-only Mascot illustrations row to prevent overflow */}
        <div className="flex lg:hidden flex-row items-center justify-center gap-6 mt-8 w-full">
          {/* Left Mascot */}
          <div className="flex-1 relative w-full">
            <img
              src={leftMascotImage}
              alt="Hedgehog mascot"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          {/* Right Mascot */}
          <div className="flex-1 relative w-full">
            <img
              src={rightMascotImage}
              alt="Bear mascot"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        {/* Wider Bottom Cards Container with slightly higher overlay effect on desktop */}
        <div className="w-full max-w-6xl mt-16 md:mt-24 text-left relative z-20">
          {/* Core Vision & Mission Card (Thick Neo-Brutalist Border, Rounded, Drop shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 bg-brand-card text-brand-charcoal rounded-[2.5rem] overflow-hidden shadow-neo border-4 border-brand-charcoal relative z-10">
            {/* Box 1: Highlight Title */}
            <div className="bg-[#b45309] text-white p-8 sm:p-10 flex flex-col justify-center items-center text-center border-b-4 md:border-b-0 md:border-r-4 border-brand-charcoal">
              <Mic className="w-12 h-12 mb-4 text-white" />
              <h2 className="font-display text-2xl sm:text-3xl font-black leading-tight text-white uppercase tracking-tight">
                {extra.deserves}
              </h2>
              <div className="mt-4 w-16 h-1 bg-brand-yellow rounded-full"></div>
            </div>

            {/* Box 2: Vision */}
            <div className="p-8 sm:p-10 flex flex-col justify-start border-b-4 md:border-b-0 border-brand-charcoal bg-brand-card">
              <h3 className="font-display text-xl font-black text-heading-sub mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-yellow" />{" "}
                {extra.visionTitle}
              </h3>
              <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                {extra.visionText}
              </p>
            </div>

            {/* Box 3: Mission */}
            <div className="p-8 sm:p-10 flex flex-col justify-start bg-brand-card">
              <h3 className="font-display text-xl font-black text-heading-sub mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-brand-coral" />{" "}
                {extra.missionTitle}
              </h3>
              <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                {extra.missionText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
