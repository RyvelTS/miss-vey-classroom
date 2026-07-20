import { motion } from "motion/react";
import {
  Sparkles,
  Calendar,
  Quote,
  Heart,
  Award,
  GraduationCap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface MeetFounderProps {}

export default function MeetFounder() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const localizedFounder = {
    en: {
      meetBadge: "Meet Velita",
      titleStart: "The Heart Behind the",
      titleEnd: "Classroom",
      journeyTitle: "Miss Velita's Journey:",
      medTitle: "M.Ed. in Education",
      medText: "Specialized in early childhood learning and communication.",
      mcTitle: "Professional MC",
      mcText:
        "Hosted online, national, and international events for kids and adults.",
      travelText:
        "Having traveled to around 40 countries, I believe communication connects people across cultures and opens endless opportunities. This core belief inspires every single lesson at Miss Vey's Classroom.",
      quote:
        "I believe every single child has beautiful ideas worth sharing, and confidence grows naturally when we provide a warm, encouraging environment to speak up and shine.",
    },
    id: {
      meetBadge: "Profil Velita",
      titleStart: "Sosok di Balik",
      titleEnd: "Kelas Miss Vey",
      journeyTitle: "Perjalanan Miss Velita:",
      medTitle: "M.Ed. dalam Pendidikan",
      medText: "Spesialisasi dalam pembelajaran anak usia dini dan komunikasi.",
      mcTitle: "MC Profesional",
      mcText:
        "Membawakan acara online, nasional, dan internasional untuk anak-anak dan dewasa.",
      travelText:
        "Telah mengunjungi sekitar 40 negara, saya percaya bahwa komunikasi menghubungkan orang dari berbagai budaya dan membuka peluang tanpa batas. Keyakinan inti ini menginspirasi setiap pelajaran di Kelas Miss Vey.",
      quote:
        "Saya percaya setiap anak memiliki ide-ide indah yang layak dibagikan, dan kepercayaan diri tumbuh secara alami saat kita menyediakan lingkungan yang hangat dan mendukung untuk bersuara.",
    },
    zh: {
      meetBadge: "走近薇老师",
      titleStart: "课堂背后那颗",
      titleEnd: "温热的心灵",
      journeyTitle: "薇老师的教育旅程：",
      medTitle: "教育学硕士 (M.Ed.)",
      medText: "专注于少儿早期教育开发、成长心理与沟通技巧。",
      mcTitle: "专业中英双语 MC",
      mcText: "曾主持过百余场线上、线下、国家及国际级的儿童和成人活动。",
      travelText:
        "曾游历全球约 40 个国家，我深信卓越的沟通能跨越文化隔阂，开启无限未来。这一信念深深植根于薇老师创意演讲课堂的每一堂课中。",
      quote:
        "我深信每一个孩子的心中，都藏着值得分享的美丽想法。只要我们提供温暖、充满鼓励的环境，孩子就能自然而然地挺拔站立，绽放光彩。",
    },
  }[lang];

  return (
    <section
      id="founder"
      className="py-20 bg-brand-cream px-4 sm:px-6 lg:px-8 border-b-4 border-brand-charcoal relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Visual Column (Left) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 85, duration: 0.6 }}
              className="relative w-full max-w-sm sm:max-w-md bg-brand-card p-4 rounded-[2rem] border-4 border-brand-charcoal shadow-neo">
              {/* Card Dotted Border */}
              <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-brand-teal/30 rounded-3xl pointer-events-none"></div>

              <img
                src="/images/velita_founder_1784539815049.jpg"
                alt="Velita - Founder of Miss Vey's Classroom"
                className="w-full h-auto object-cover rounded-2xl border-2 border-brand-charcoal"
                referrerPolicy="no-referrer"
              />

              {/* Float Badge 1 */}
              <div className="absolute -bottom-5 -right-4 bg-brand-teal text-white border-2 border-brand-charcoal p-3.5 rounded-2xl shadow-neo-sm rotate-[4deg] flex items-center gap-2">
                <Heart className="w-5 h-5 text-white fill-white animate-pulse shrink-0" />
                <div>
                  <span className="block font-display font-black text-xs text-white">
                    Founder & Coach
                  </span>
                  <span className="block font-display text-xs text-brand-yellow uppercase tracking-widest font-black">
                    Miss Velita
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Content Column (Right) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6 relative text-brand-charcoal">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border-2 border-brand-charcoal shadow-[2px_2px_0px_0px_rgba(32,49,36,1)]">
                {localizedFounder.meetBadge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal leading-tight">
                {localizedFounder.titleStart} <br />
                <span className="text-brand-teal">
                  {localizedFounder.titleEnd}
                </span>{" "}
                <Heart className="w-7 h-7 inline align-text-bottom text-brand-yellow" />
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
              {t("founder.para1")}
            </p>

            {/* Quote Block */}
            <div className="relative bg-brand-teal/10 border-l-4 border-brand-teal p-6 rounded-r-3xl my-6 border-y border-r border-brand-charcoal/10">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-teal/20 shrink-0" />
              <p className="font-sans text-sm sm:text-base italic text-brand-charcoal font-medium leading-relaxed relative z-10">
                "{localizedFounder.quote}"
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg text-brand-charcoal/85 leading-relaxed pt-1">
              {t("founder.para2")}
            </p>

            {/* Quick Timeline list */}
            <div className="space-y-4 pt-4">
              <h4 className="font-display text-lg font-black text-brand-charcoal">
                {localizedFounder.journeyTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-brand-card border-2 border-brand-charcoal p-4 rounded-2xl shadow-neo-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/30 border border-brand-charcoal flex items-center justify-center shrink-0 text-brand-charcoal">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-black text-brand-charcoal">
                      {localizedFounder.medTitle}
                    </h5>
                    <p className="font-sans text-xs text-brand-charcoal/70 mt-0.5 leading-snug">
                      {localizedFounder.medText}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-card border-2 border-brand-charcoal p-4 rounded-2xl shadow-neo-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-charcoal flex items-center justify-center shrink-0 text-brand-teal">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-black text-brand-charcoal">
                      {localizedFounder.mcTitle}
                    </h5>
                    <p className="font-sans text-xs text-brand-charcoal/70 mt-0.5 leading-snug">
                      {localizedFounder.mcText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm text-brand-charcoal/60 leading-relaxed pt-2">
              {localizedFounder.travelText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
