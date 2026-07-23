import { motion } from "motion/react";
import { Star, Quote, Heart, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const localizedTestimonials = {
    en: [
      {
        id: "t1",
        parentName: "Sarah Miller",
        childName: "Clara",
        childAge: "6",
        relationship: "Mother",
        text: "My daughter Clara was incredibly shy and would hide behind my back when meeting new people. After just one term in the Echidna Class, she is excited to speak in front of others and even volunteered for a presentation at school! Miss Velita's approach is absolute magic.",
      },
      {
        id: "t2",
        parentName: "David Kim",
        childName: "Leo",
        childAge: "9",
        relationship: "Father",
        text: "The Kasuari Class has been amazing for Leo. He always had a lot of energy and stories but struggled to structure his thoughts. Now he knows how to prepare a clear speech, use hand gestures, and pause for dramatic effect. He loves the games we play!",
      },
      {
        id: "t3",
        parentName: "Elena Rostova",
        childName: "Ryan",
        childAge: "12",
        relationship: "Mother",
        text: "The Bear Class gave Ryan the confidence he needed to present his science project. He learned how to argue points clearly, research effectively, and handle questions with grace. He absolutely loves the STEAM-integrated topics! This course was a game-changer.",
      },
    ],
    id: [
      {
        id: "t1",
        parentName: "Sarah Miller",
        childName: "Clara",
        childAge: "6",
        relationship: "Ibu",
        text: "Anak perempuan saya, Clara, dulunya sangat pemalu dan selalu bersembunyi di belakang saya saat bertemu orang baru. Setelah hanya satu semester di Kelas Ekidna, dia sangat bersemangat untuk berbicara di depan umum dan bahkan sukarela melakukan presentasi di sekolah! Pendekatan Miss Velita sungguh ajaib.",
      },
      {
        id: "t2",
        parentName: "David Kim",
        childName: "Leo",
        childAge: "9",
        relationship: "Ayah",
        text: "Kelas Kasuari sangat luar biasa untuk Leo. Dia selalu punya banyak energi dan cerita tetapi kesulitan menyusun pikirannya secara terstruktur. Sekarang dia tahu cara menyiapkan pidato yang jelas, menggunakan gerakan tangan, dan jeda dramatis. Dia sangat menyukai permainan interaktifnya!",
      },
      {
        id: "t3",
        parentName: "Elena Rostova",
        childName: "Ryan",
        childAge: "12",
        relationship: "Ibu",
        text: "Kelas Beruang memberikan Ryan rasa percaya diri yang dia butuhkan untuk mempresentasikan proyek sainsnya. Dia belajar bagaimana mengemukakan pendapat secara jelas, meneliti dengan efektif, dan menjawab pertanyaan dengan anggun. Dia sangat menyukai topik STEAM-nya! Program yang mengubah segalanya.",
      },
    ],
    zh: [
      {
        id: "t1",
        parentName: "Sarah Miller",
        childName: "Clara",
        childAge: "6",
        relationship: "妈妈",
        text: "我的女儿 Clara 以前非常害羞，见到陌生人就会躲在我的身后。在针鼹启蒙班学习仅仅一个学期后，她现在非常渴望在众人面前说话，甚至在学校里主动申请上台汇报！薇老师的教学方式简直太神奇了。",
      },
      {
        id: "t2",
        parentName: "David Kim",
        childName: "Leo",
        childAge: "9",
        relationship: "爸爸",
        text: "导学进阶班对 Leo 的帮助不可思议。他总是精力充沛、满脑子想法，却不知道如何系统地组织话语。现在，他懂得如何准备一篇条理清晰的演讲，能熟练运用手势，并在高潮处做戏剧性的停顿。他简直太爱那些课堂游戏了！",
      },
      {
        id: "t3",
        parentName: "Elena Rostova",
        childName: "Ryan",
        childAge: "12",
        relationship: "妈妈",
        text: "幼熊精英班让 Ryan 收获了在学校科学项目展示中所需的强大自信。他学会了清晰地陈述论点、高效搜集事实，以及大方得体地应对现场提问。他极其喜爱 STEAM 跨学科主题！这门课程对我们来说是一次全方位的成长之旅。",
      },
    ],
  }[lang];

  return (
    <section
      id="testimonials"
      className="py-20 bg-brand-cream border-b-4 border-brand-charcoal px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative vector assets */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-brand-teal/5 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-brand-teal text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-1.5">
            <Heart className="w-5 h-5 text-brand-teal fill-brand-teal/35" />
            {t("testimonials.badge")}
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal">
            {t("testimonials.title")}
          </h3>
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/80">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials cards list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {localizedTestimonials?.map((item, index) => {
            // Map dynamic theme colors for avatars
            const avatarStyle =
              {
                t1: "bg-brand-yellow text-brand-charcoal",
                t2: "bg-brand-teal text-white",
                t3: "bg-brand-coral text-white",
              }[item.id] || "bg-brand-yellow text-brand-charcoal";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between bg-brand-card border-4 border-brand-charcoal p-8 rounded-[2rem] shadow-neo-sm hover:translate-y-[-2px] hover:shadow-neo transition-all duration-200 relative">
                {/* Speech Bubble Arrow style */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-brand-card border-r-4 border-b-4 border-brand-charcoal rotate-45 hidden lg:block"></div>

                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-brand-yellow fill-brand-yellow stroke-brand-charcoal stroke-2"
                      />
                    ))}
                  </div>

                  {/* Quote icon & text */}
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-brand-teal/10 shrink-0 pointer-events-none" />
                    <p className="font-sans text-brand-charcoal/80 leading-relaxed text-sm sm:text-base relative z-10 pl-2">
                      "{item.text}"
                    </p>
                  </div>
                </div>

                {/* Parent details */}
                <div className="pt-6 mt-6 border-t-2 border-brand-charcoal/10 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full border-2 border-brand-charcoal font-display font-black text-lg flex items-center justify-center shadow-neo-xs ${avatarStyle}`}>
                    {item.parentName.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-display text-sm sm:text-base font-black text-brand-charcoal leading-none">
                      {item.parentName}
                    </h5>
                    <p className="font-sans text-xs text-brand-charcoal/60 mt-1">
                      {t("testimonials.relationshipLabel", {
                        relationship: item.relationship,
                        childName: item.childName,
                        childAge: item.childAge,
                      })}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-16 text-center max-w-4xl mx-auto border-t-4 border-brand-charcoal/10 pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4">
            {/* Mascot Icon */}
            <div className="w-16 h-16 rounded-full bg-brand-yellow border-4 border-brand-charcoal flex items-center justify-center shadow-neo-sm p-1">
              <Sprout className="w-5 h-5 text-emerald-600" />
            </div>

            <h4 className="font-display text-xl sm:text-2xl font-black tracking-tight text-brand-teal leading-relaxed">
              "{t("testimonials.quote")}"
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
